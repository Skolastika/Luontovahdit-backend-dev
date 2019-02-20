const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const bcrypt = require("bcrypt")
const profileRoute = require("./routes/profileRouter");
const hotspotsRouter = require('./controllers/hotspots')
const commentsRouter = require('./controllers/comments')
const usersRouter = require('./controllers/users')
const { isUserLogged } = require('./utils/authentication')

const {body,check,validationResult  }   = require('express-validator/check');
const {sanitizeBody}  = require('express-validator/filter');

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require('dotenv').config();


let app = express();
app.use(bodyParser.json())
app.use(express.static('build'))

const port = process.env.PORT || 8000;

mongoose.connect( process.env.ATLAS_URI,

    { useNewUrlParser: true }
    
).then(
    () => {console.log("Connection to mongo DB successfull")},
    (error) => {console.log("Connection to mongpDB failed: " + error)}
);

app.use(session({
    name : "luontovahdit-id",
    resave : false,
    secret : process.env.SECRET,
    saveUninitialized : false,
    cookie : {maxAge : 180 * 60 * 60 * 24},
    store : new MongoStore ({
        collection : "session",
        mongooseConnection: mongoose.connection,
        ttl : 24 * 60 * 60
    })
}));


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
    console.log("SerializeUser: "  + user.username);
    done(null, user._id);
})

passport.deserializeUser(async function(id, done) {
    console.log("deserializeUser");
    try {
      const user = await userModel.findById(id)
      console.log('do we have a user? ', user)
      if(!user){
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
)

const createSaltedPassword = async (pw) => {
  const pwHash = await bcrypt.hash(pw, 10)
  return pwHash
}

const isPasswordValid = async (pw, hash) => {
  const pwCorrect = await bcrypt.compare(pw, hash)
  console.log('password: ', pwCorrect)
  return pwCorrect
}


app.get("/", function(req, res, next){
    return res.status(200).json({"home" : "redirect to home page"});
})

app.post("/login", [

        sanitizeBody('username').trim().escape(),
        sanitizeBody('password').trim().escape(),
        body('username').isLength({min : 3, max : 20}).withMessage('Username must be at least 6 digit. Symbols: <,>,&,\',\",/ not allowed'),
        body('password').isLength({min : 3, max : 20}).withMessage('Password must be at least 6 digit. Symbols: <,>,&,\',\",/ not allowed')

    ], function(req, res, next){

        const lgnerrors = validationResult(req);
        if (!lgnerrors.isEmpty()) {
            console.log('login error: '+lgnerrors)
            return res.status(409).json(lgnerrors.array());
        } else {
            next();
        }
    },

    passport.authenticate("local-login"),
    function(req, res){
      console.log(req.user)
      const user = {
        id: req.user._id,
        username: req.user.username,
        displayname: req.user.displayname,
        email: req.user.email
      }
      return res.status(200).json(user)
    }
)

app.post("/logout", function (req, res){
    if (req.session){
        req.session.destroy();
    }
    return res.status(200).json({"message" : "logged out" })
})


passport.use("local-login", new localStrategy({
    usernameField : "username",
    passwordField : "password",
    passReqToCallback : true
  }, async function(req, username, password, done) {

    console.log('in local-login')

    try {
      const user = await userModel.findOne({"username" : username})
      console.log('user: ', user)
      if (!user){
        return done(null, false, "Wrong credential")
      }
      const pwValid = await isPasswordValid(password, user.password)
      console.log(pwValid)
      if (pwValid){

        let token = createToken()
        req.session.token = token
        req.session.username = username
        return done(null, user)

      } else {
        console.log('something goes wrong here...')
        return done(null, false, "Wrong password")
      }
    } catch (err) {
      return done(err)
    }
  })
)




app.post("/register", [


    body('username').isLength({min : 6, max : 20}).withMessage('Username must be at least 6 digit'),
    body('password').isLength({min : 6, max : 20}).withMessage('Password must be at least 6 digit'),
    body('displayname').isLength({min : 6, max : 20}).withMessage('Displayname must be at least 6 digit'),
    body('email').isEmail().withMessage('Check email address'),
    sanitizeBody('username').trim().escape(),
    sanitizeBody('password').trim().escape(),
    sanitizeBody('displayname').trim().escape(),
    sanitizeBody('email').normalizeEmail()


], async function(req, res){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log('r1: ',errors)
        return res.status(409).json(errors.array());
    }

    let user = new userModel({
        "username" : req.body.username,
        "displayname" : req.body.displayname,
        "password" : await createSaltedPassword(req.body.password),
        "email" : req.body.email
    })

    user.save().then(
        () => {return res.status(200).json({"message": "success"})},
        (error) => { console.log('r2: ',error); return res.status(409).json({ "message" : "username or email address already in use " });}
    )
});

function createToken (){

    let token = "";
    let letters = "abcdefghijABCDEFGHIJ0123456789";
    for (let i = 0; i < 1024; i++){
        let temp = Math.floor(Math.random() * 30);
        token = token + letters[temp];
    }
    return token;
}

app.use("/profile", isUserLogged, profileRoute);
app.use('/api/hotspots', hotspotsRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/users', usersRouter)



app.listen(port);
console.log("Running in port" + port);