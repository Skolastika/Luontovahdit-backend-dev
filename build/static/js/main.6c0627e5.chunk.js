(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(e,t,n){e.exports=n(506)},506:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(70),s=n.n(o),c=n(8),i=n.n(c),u=n(16),p=n(18),l=n(19),m=n(21),d=n(20),h=n(22),f=n(24),g=n(450),v=n(528),b={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},E={login:"/kirjaudu",register:"/rekisteroidy",addHotspot:"/lisaa_kohde",hotspots:"/kohteet"},O="Luontovahdit",y=n(84),w=n.n(y),j=n(240),k=n.n(j),C=n(241),S=n.n(C),x=n(31),T=n(28),I=n.n(T),H="/api/hotspots",_={getAll:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(H);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getHotspotsByCoordinates:function(){var e=Object(u.a)(i.a.mark(function e(t,n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(H,"/@").concat(t,",").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getHotspot:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(H,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post(H,t,{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),upVote:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat(H,"/").concat(t,"/vote"),{type:"upVote"},{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),downVote:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat(H,"/").concat(t,"/vote"),{type:"downVote"},{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},L={create:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/api/comments",t,{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),upVote:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat("/api/comments","/").concat(t,"/vote"),{type:"upVote"},{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),downVote:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("".concat("/api/comments","/").concat(t,"/vote"),{type:"downVote"},{withCredentials:!0});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},D={hotspots:[],currentHotspot:null,newHotspot:null,newCoordinates:[],error:null},M=function(){return function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getAll();case 3:n=e.sent,console.log(n),t({type:"GET_HOTSPOTS_SUCCESS",hotspots:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"GET_HOTSPOTS_FAIL",error:"Virhe kohteiden haussa! "+e.t0});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HOTSPOTS_SUCCESS":return{hotspots:t.hotspots,error:null};case"GET_HOTSPOTS_FAIL":return Object(x.a)({},e,{error:t.error});case"SET_CURRENT_HOTSPOT":return Object(x.a)({},e,{currentHotspot:e.hotspots.find(function(e){return e.id===t.id}),error:null});case"SET_NEW_COORDINATES":return Object(x.a)({},e,{newCoordinates:t.newCoordinates});case"ADD_HOTSPOT_SUCCESS":return Object(x.a)({},e,{hotspots:e.hotspots.concat(t.hotspot),newHotspot:t.hotspot,error:null});case"ADD_HOTSPOT_FAIL":return Object(x.a)({},e,{error:t.error});case"ADD_COMMENT_SUCCESS":var n=Object(x.a)({},e.hotspots.find(function(e){return e.id===t.comment.inHotspot.id}));return n.comments=n.comments.concat(t.comment),Object(x.a)({},e,{hotspots:e.hotspots.map(function(e){return e.id===n.id?n:e}),currentHotspot:n,error:null});case"ADD_COMMENT_FAIL":return Object(x.a)({},e,{error:t.error});case"VOTE_HOTSPOT_SUCCESS":return Object(x.a)({},e,{hotspots:e.hotspots.map(function(e){return e.id===t.hotspot.id?t.hotspot:e}),currentHotspot:t.hotspot});case"VOTE_HOTSPOT_FAIL":return Object(x.a)({},e,{error:t.error});case"VOTE_COMMENT_SUCCESS":var r=(n=Object(x.a)({},e.hotspots.find(function(e){return e.id===t.comment.inHotspot.id}))).comments.findIndex(function(e){return e.id===t.comment.id});return n.comments[r]=t.comment,Object(x.a)({},e,{hotspots:e.hotspots.map(function(e){return e.id===n.id?n:e}),currentHotspot:n,error:null});default:return e}},U={hotspots:[{type:"Feature",properties:{id:"5c1e0b21ee7a321eb40f3e12",icon:"star"},geometry:{type:"Point",coordinates:[24.8297076,60.3190656]}},{type:"Feature",properties:{id:"5c1e2ecbc969793cecad491a",icon:"star"},geometry:{type:"Point",coordinates:[25,60.2]}}]},A=function(e){return function(t){var n=e.map(function(e){return{type:"Feature",properties:{id:e.id,icon:"star"},geometry:{type:"Point",coordinates:e.location.coordinates}}});console.log(n),t({type:"SET_HOTSPOTS",hotspots:n})}},P=function(e){return function(t){var n={type:"Feature",properties:{id:e.id,icon:"star"},geometry:{type:"Point",coordinates:e.location.coordinates}};console.log(n),console.log(e.location),t({type:"ADD_HOTSPOT",hotspot:n})}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HOTSPOTS":return{hotspots:t.hotspots};case"ADD_HOTSPOT":return{hotspots:e.hotspots.concat(t.hotspot)};default:return e}},N=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,r,a,o=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.a.accessToken="pk.eyJ1Ijoic2tvbGFzdGlrYSIsImEiOiJjanFxZHdtOTQwYWdlNDNtZDR1eDB0ZTkwIn0.GcMqIGQE0v0ZIMPkUraBKw",t=[19.274990495527675,59.64523662578557,31.618656929369678,70.13546651354179],this.map=new w.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v9",center:[24.7385109,60.11021],zoom:10,minZoom:10,maxZoom:18,maxBounds:t}),n=function(e){o.map=o.map.setCenter([e.coords.longitude,e.coords.latitude])},r=function(e){return console.log(e)},navigator.geolocation&&navigator.geolocation.getCurrentPosition(n,r),this.map.addControl(new S.a({defaultLanguage:"mul"})),(a=new k.a({accessToken:w.a.accessToken,language:"FI",country:"FI",bbox:t,placeholder:"Etsi..."})).on("result",function(e){console.log(e),console.log(e.result.geometry.coordinates)}),this.map.addControl(a),this.map.on("load",function(){o.map.addSource("hotspots",{type:"geojson",data:{type:"FeatureCollection",features:o.props.hotspots}}),o.map.addLayer({id:"hotspot",source:"hotspots",type:"symbol",layout:{"icon-image":"{icon}-15","icon-allow-overlap":!0}})}),this.map.on("click","hotspot",function(e){e.originalEvent.cancelBubble=!0,o.props.history.push(E.hotspots+"/"+e.features[0].properties.id)}),this.map.on("click",function(e){e.originalEvent.cancelBubble||(console.log(e.lngLat.lng+" "+e.lngLat.lat),o.props.isUserLoggedIn?(o.props.setNewCoordinates([e.lngLat.lng,e.lngLat.lat]),o.props.history.push(E.addHotspot)):(new w.a.Popup).setLngLat(e.lngLat).setHTML('<a href="'.concat(E.login,'">Kirjaudu sis\xe4\xe4n?</a>')).addTo(o.map))});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.map.getSource("hotspots")&&this.map.getSource("hotspots").setData({type:"FeatureCollection",features:this.props.hotspots})}},{key:"render",value:function(){return a.a.createElement("div",{id:"map",style:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",textAlign:"left",marginTop:"43px",zIndex:10}})}}]),t}(a.a.Component),K={setNewCoordinates:function(e){return function(t){t({type:"SET_NEW_COORDINATES",newCoordinates:e})}},addHotspot:P,initialiseHotspots:M,setHotspotsOnMap:A},G=Object(v.a)(Object(f.b)(function(e){return{hotspots:e.map.hotspots,hotspotsData:e.hotspot.hotspots,isUserLoggedIn:e.user.isUserLoggedIn}},K)(N)),R=n(515),B=n(521),Z=n(238),J=n(523),W=n(516),z={getProfile:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/profile/get",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},Q={isUserLoggedIn:!1},Y=function(e){return function(t){t({type:"SET_USERLOGGEDIN",loggedIn:e})}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERLOGGEDIN":return Object(x.a)({},e,{isUserLoggedIn:t.loggedIn});default:return e}},X={login:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/logout",{withCredentials:!0});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),register:function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/register",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},$=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).logout=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.logout();case 2:n.props.setUserLoggedIn(!1);case 3:case"end":return e.stop()}},e,this)})),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(J.a,{attached:"top",tabular:!0},a.a.createElement(W.a,null,a.a.createElement(J.a.Item,null,O),a.a.createElement(J.a.Menu,{position:"right"},e.props.isUserLoggedIn?a.a.createElement(B.a,{item:!0,icon:"bars",direction:"left"},a.a.createElement(B.a.Menu,null,a.a.createElement(B.a.Item,{onClick:e.logout},"Kirjaudu ulos",a.a.createElement(Z.a,{style:{paddingLeft:"5px"},name:"log out"})))):a.a.createElement(J.a.Item,{as:R.a,exact:!0,to:E.login},a.a.createElement(Z.a,{name:"sign in"})))))}}]),t}(a.a.Component),ee={setUserLoggedIn:Y},te=Object(v.a)(Object(f.b)(function(e){return{isUserLoggedIn:e.user.isUserLoggedIn}},ee)($)),ne=n(520),re=n(519),ae=n(517),oe=n(522),se=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).close=function(){n.setState({open:!1}),n.props.history.push("/")},n.addHotspot=function(){var e=Object(u.a)(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(t.target.title.value.length>0&&t.target.description.value.length>0)){e.next=8;break}return r={title:t.target.title.value,description:t.target.description.value,location:{type:"Point",coordinates:n.props.coordinates}},t.target.title.value="",t.target.description.value="",e.next=7,n.props.addHotspot(r);case 7:n.props.error?(console.log("Error adding hotspot..."),console.log(n.props.error)):(console.log("Added hotspot!"),console.log(n.props.newHotspot),n.props.addHotspotToMap(n.props.newHotspot),n.close());case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.state={open:e.open},document.title=O+"- Lis\xe4\xe4 kohde",n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("open "+this.state.open),a.a.createElement("div",null,a.a.createElement(ne.a,{open:this.state.open,closeOnDimmerClick:!1,onClose:this.close,closeIcon:!0},a.a.createElement(ne.a.Header,null,"Lis\xe4\xe4 kohde"),a.a.createElement(ne.a.Content,null,a.a.createElement(re.a,{onSubmit:this.addHotspot},a.a.createElement("div",null,"Kohteen nimi:",a.a.createElement(re.a.Input,{type:"text",name:"title"})),a.a.createElement("div",null,"Havainto:",a.a.createElement(ae.a,{name:"description",style:{minHeight:100}})),a.a.createElement(oe.a,{type:"submit"},"Lis\xe4\xe4")))))}}]),t}(r.Component),ce={addHotspot:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.create(e);case 3:r=t.sent,n({type:"ADD_HOTSPOT_SUCCESS",hotspot:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"ADD_HOTSPOT_FAIL",error:"Kohdetta ei voitu lis\xe4t\xe4! "+t.t0});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},addHotspotToMap:P},ie=Object(v.a)(Object(f.b)(function(e){return{newHotspot:e.hotspot.newHotspot,error:e.hotspot.error}},ce)(se)),ue=n(518),pe=n(524),le=n(527),me=n(268),de=n(237),he=function(e){var t=e.id,n=e.vote,r=e.votes,o=e.color,s=e.icon,c=e.compact,i=Object(me.a)(e,["id","vote","votes","color","icon","compact"]);return a.a.createElement(oe.a,Object.assign({as:"div",labelPosition:"right"},i),a.a.createElement(oe.a,{basic:!0,color:o,type:"button",onClick:function(){return n(t)},compact:c},a.a.createElement(Z.a,{name:s})),a.a.createElement(de.a,{as:"a",basic:!0,pointing:"left"},r))},fe=n(526),ge=n(451),ve=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.isUserLoggedIn?this.props.trigger:a.a.createElement(fe.a,{trigger:this.props.trigger,content:a.a.createElement(ge.a,{to:E.login},"Kirjaudu sis\xe4\xe4n? ",a.a.createElement(Z.a,{name:"sign in"})),on:"click",hoverable:!0,position:"top right"})}}]),t}(a.a.Component),be=Object(f.b)(function(e){return{isUserLoggedIn:e.user.isUserLoggedIn}})(ve),Ee=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).sortComments=function(e,t){e.preventDefault(),n.setState({selectedSort:t.value}),n.sortOrder="vanhin"===t.value?function(e,t){return new Date(e.createdAt).getTime()>new Date(t.createdAt).getTime()?1:-1}:function(e,t){return new Date(e.createdAt).getTime()<new Date(t.createdAt).getTime()?1:-1},console.log(n.sortOrder)},n.sortOrder=function(){},n.state={selectedSort:"vanhin"},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{style:{paddingBottom:"20px"}},a.a.createElement(pe.a,{as:"h3",floated:"left"},"Kommentit"),a.a.createElement(B.a,{basic:!0,selection:!0,options:[{text:"Vanhimmat ensin",value:"vanhin"},{text:"Uusimmat ensin",value:"uusin"}],defaultValue:"vanhin",onChange:this.sortComments,compact:!0,style:{float:"right",marginTop:"-5px"}})),a.a.createElement(ue.a,{hidden:!0}),[].concat(this.props.comments).sort(this.sortOrder).map(function(t){return a.a.createElement("div",{key:t.id},a.a.createElement(le.a,null,new Date(t.createdAt).toLocaleDateString("fi-FI",b)," lis\xe4nnyt ",t.addedBy.displayname,a.a.createElement(ue.a,{hidden:!0}),a.a.createElement("p",null,t.content),a.a.createElement(ue.a,{hidden:!0}),a.a.createElement(be,{trigger:a.a.createElement(he,{id:t.id,vote:e.props.upVoteComment,votes:t.upVotes,color:"green",icon:"thumbs up",compact:!0})}),a.a.createElement(be,{trigger:a.a.createElement(he,{id:t.id,vote:e.props.downVoteComment,votes:t.downVotes,color:"orange",icon:"thumbs down",compact:!0})}),a.a.createElement(oe.a,{compact:!0,basic:!0,color:"red"},a.a.createElement(Z.a,{name:"flag"}))),a.a.createElement(ue.a,{hidden:!0}))}))}}]),t}(a.a.Component),Oe={upVoteComment:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.upVote(e);case 3:r=t.sent,n({type:"VOTE_COMMENT_SUCCESS",comment:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"VOTE_COMMENT_FAIL",error:t.t0});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},downVoteComment:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.downVote(e);case 3:r=t.sent,n({type:"VOTE_COMMENT_SUCCESS",comment:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"VOTE_COMMENT_FAIL",error:t.t0});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}},ye=Object(f.b)(null,Oe)(Ee),we=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggleVisibility=function(){n.setState({visible:!n.state.visible})},n.state={visible:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={display:this.state.visible?"none":""},t={display:this.state.visible?"":"none"};return a.a.createElement(le.a,null,a.a.createElement("div",{style:e},a.a.createElement(oe.a,{onClick:this.toggleVisibility},this.props.buttonLabel)),a.a.createElement("div",{style:t},a.a.createElement(oe.a,{basic:!0,onClick:this.toggleVisibility},"Peruuta"),a.a.createElement(ue.a,{hidden:!0}),this.props.children))}}]),t}(a.a.Component),je=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).addComment=function(){var e=Object(u.a)(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(t.target.comment.value.length>0)){e.next=7;break}return r={content:t.target.comment.value,inHotspot:n.props.hotspotId},t.target.comment.value="",e.next=6,n.props.addComment(r);case 6:n.props.error?(console.log("Error adding comment..."),console.log(n.props.error)):console.log("Added hotspot!");case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(re.a,{onSubmit:this.addComment},a.a.createElement("div",null,a.a.createElement(ae.a,{name:"comment",style:{minHeight:100}})),a.a.createElement(oe.a,{type:"submit"},"Lis\xe4\xe4"))}}]),t}(r.Component),ke={addComment:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.create(e);case 3:r=t.sent,n({type:"ADD_COMMENT_SUCCESS",comment:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"ADD_COMMENT_FAIL",error:"Kommentia ei voitu lis\xe4t\xe4! "+t.t0});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}},Ce=Object(f.b)(function(e){return{error:e.hotspot.error}},ke)(je),Se=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).close=function(){n.setState({open:!1}),n.props.history.push("/")},n.state={open:e.open},e.hotspot&&(document.title=O+"- "+e.hotspot.title),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.hotspot){var t=this.props.hotspot;return a.a.createElement("div",null,a.a.createElement(ne.a,{open:this.state.open,closeOnDimmerClick:!1,onClose:this.close,closeIcon:!0},a.a.createElement(ne.a.Header,null,t.title),a.a.createElement(ne.a.Content,null,a.a.createElement(be,{trigger:a.a.createElement(he,{id:t.id,vote:this.props.upVoteHotspot,votes:t.upVotes,color:"green",icon:"thumbs up"})}),a.a.createElement(be,{trigger:a.a.createElement(he,{id:t.id,vote:this.props.downVoteHotspot,votes:t.downVotes,color:"orange",icon:"thumbs down"})}),a.a.createElement(oe.a,{basic:!0,color:"red"},a.a.createElement(Z.a,{name:"flag"})),a.a.createElement("span",{style:{paddingLeft:"5px"}},"lis\xe4nnyt ",t.addedBy.name),a.a.createElement(ue.a,{hidden:!0}),t.description,a.a.createElement(ue.a,{hidden:!0}),e.props.isUserLoggedIn?a.a.createElement(we,{buttonLabel:"Kommentoi"},a.a.createElement(Ce,{hotspotId:t.id})):null,a.a.createElement(ye,{comments:t.comments}))))}return a.a.createElement("div",null,a.a.createElement(ne.a,{open:this.state.open,closeOnDimmerClick:!1,onClose:this.close,closeIcon:!0},a.a.createElement(ne.a.Header,null,"Kohdetta ei l\xf6ytynyt!"),a.a.createElement(ne.a.Content,null,a.a.createElement("p",null,"Jotain meni pieleen."))))}}]),t}(r.Component),xe={upVoteHotspot:function(e){return console.log("upvote"),function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.upVote(e);case 3:r=t.sent,n({type:"VOTE_HOTSPOT_SUCCESS",hotspot:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"VOTE_HOTSPOT_FAIL",error:t.t0});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},downVoteHotspot:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.downVote(e);case 3:r=t.sent,n({type:"VOTE_HOTSPOT_SUCCESS",hotspot:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"VOTE_HOTSPOT_FAIL",error:t.t0});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}},Te=Object(v.a)(Object(f.b)(function(e){return{isUserLoggedIn:e.user.isUserLoggedIn}},xe)(Se)),Ie=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).close=function(){n.setState({open:!1}),n.props.history.push("/")},n.login=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(t.target.username.value.length>0&&t.target.password.value.length>0)){e.next=12;break}return e.prev=2,e.next=5,X.login({username:t.target.username.value,password:t.target.password.value});case 5:n.props.setUserLoggedIn(!0),n.close(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),n.state={open:e.open},document.title=O+"- Kirjaudu",n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(ne.a,{open:this.state.open,closeOnDimmerClick:!1,onClose:this.close,closeIcon:!0},a.a.createElement(ne.a.Header,null,"Tervetuloa!"),a.a.createElement(ne.a.Content,null,a.a.createElement(re.a,{onSubmit:this.login},a.a.createElement("div",null,"K\xe4ytt\xe4j\xe4tunnus:",a.a.createElement(re.a.Input,{type:"text",name:"username"})),a.a.createElement("div",null,"Salasana:",a.a.createElement(re.a.Input,{type:"password",name:"password"})),a.a.createElement(oe.a,{type:"submit",icon:!0,labelPosition:"right"},"Kirjaudu sis\xe4\xe4n",a.a.createElement(Z.a,{name:"sign in"})),a.a.createElement("span",{style:{paddingLeft:"5px"}},a.a.createElement(ge.a,{to:{pathname:E.register,state:{open:!0}}},"Rekister\xf6idy?"))))))}}]),t}(r.Component),He={setUserLoggedIn:Y},_e=Object(v.a)(Object(f.b)(null,He)(Ie)),Le=n(109),De=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).close=function(){n.setState({open:!1,username:"",password:"",passwordConf:"",displayname:"",email:"",usernameError:!1,passwordError:!1,displaynameError:!1,emailError:!1,errorMessages:[]}),n.props.history.push(E.login)},n.register=function(){var e=Object(u.a)(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.setState({usernameError:!1,passwordError:!1,displaynameError:!1,emailError:!1}),!(n.state.username.length<6)){e.next=5;break}return e.next=5,n.setState({usernameError:!0,errorMessages:n.state.errorMessages.concat("K\xe4ytt\xe4j\xe4tunnuksen t\xe4ytyy olla v\xe4hint\xe4\xe4n 6 merkki\xe4 pitk\xe4.")});case 5:if(!(n.state.password.length<8||n.state.password!==n.state.passwordConf)){e.next=8;break}return e.next=8,n.setState({passwordError:!0,errorMessages:n.state.errorMessages.concat("Salasanan t\xe4ytyy olla v\xe4hint\xe4\xe4n 8 merkki\xe4 pitk\xe4.")});case 8:if(!(n.state.displayname.length<6)){e.next=11;break}return e.next=11,n.setState({displaynameError:!0,errorMessages:n.state.errorMessages.concat("K\xe4ytt\xe4j\xe4nimen t\xe4ytyy olla v\xe4hint\xe4\xe4n 6 merkki\xe4 pitk\xe4.")});case 11:if(!(n.state.email.length<6)){e.next=14;break}return e.next=14,n.setState({emailError:!0,errorMessages:n.state.errorMessages.concat("Anna toimiva s\xe4hk\xf6postiosoite.")});case 14:if(!(n.state.usernameError||n.state.passwordError||n.state.displaynameError||n.state.emailError)){e.next=18;break}return e.abrupt("return");case 18:return r={username:n.state.username,password:n.state.password,displayname:n.state.displayname,email:n.state.email},e.prev=19,e.next=22,X.register(r);case 22:n.close(),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(19),console.log("Virhe rekister\xf6inniss\xe4..."),console.log(e.t0),409===e.t0.response.status&&("username or email address already in use "===e.t0.response.data.message?n.setState({errorMessages:["Annettua s\xe4hk\xf6postiosoitetta on jo k\xe4ytetty rekister\xf6itymiseen."]}):n.setState({errorMessages:["K\xe4ytt\xe4j\xe4tunnusta ei voitu rekister\xf6id\xe4. Tarkista tiedot."]}));case 30:case"end":return e.stop()}},e,this,[[19,25]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState(Object(Le.a)({},e.target.name,e.target.value))},n.state={open:e.open,username:"",password:"",passwordConf:"",displayname:"",email:"",usernameError:!1,passwordError:!1,displaynameError:!1,emailError:!1,errorMessages:[]},document.title=O+"- Rekister\xf6idy",n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={display:this.state.errorMessages.length>0?"":"none"};return console.log("open "+this.state.open),a.a.createElement("div",null,a.a.createElement(ne.a,{open:this.state.open,closeOnDimmerClick:!1,onClose:this.close,closeIcon:!0},a.a.createElement(ne.a.Header,null,"Rekister\xf6idy k\xe4ytt\xe4j\xe4ksi"),a.a.createElement(ne.a.Content,null,a.a.createElement(le.a,{style:e,color:"red",inverted:!0,secondary:!0},"Huomioithan seuraavat:",a.a.createElement("ul",null,this.state.errorMessages.map(function(e){return a.a.createElement("li",{key:e},e)}))),a.a.createElement(re.a,{onSubmit:this.register},a.a.createElement(re.a.Field,null,"K\xe4ytt\xe4j\xe4tunnus:",a.a.createElement(re.a.Input,{type:"text",name:"username",error:this.state.usernameError,onChange:this.handleChange,attached:"top"})),a.a.createElement("div",null,"Salasana:",a.a.createElement(re.a.Input,{type:"password",name:"password",error:this.state.passwordError,onChange:this.handleChange})),a.a.createElement("div",null,"Salasana uudelleen:",a.a.createElement(re.a.Input,{type:"password",name:"passwordConf",error:this.state.passwordError,onChange:this.handleChange})),a.a.createElement("div",null,"Nimimerkki:",a.a.createElement(re.a.Input,{type:"text",name:"displayname",error:this.state.displaynameError,onChange:this.handleChange})),a.a.createElement("div",null,"S\xe4hk\xf6postiosoite:",a.a.createElement(re.a.Input,{type:"text",name:"email",error:this.state.emailError,onChange:this.handleChange})),a.a.createElement(oe.a,{type:"submit"},"Rekister\xf6idy")))))}}]),t}(r.Component),Me=Object(v.a)(De),Ve=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.initialiseHotspots();case 2:this.props.hotspots&&(console.log(this.props.hotspots),this.props.setHotspotsOnMap(this.props.hotspots)),this.props.checkUserSession();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return document.title=O,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(te,null)),a.a.createElement("div",{id:"mapPopup"}),a.a.createElement("div",{id:"mapComponent"},a.a.createElement(G,null)),a.a.createElement(g.a,{exact:!0,path:"".concat(E.hotspots,"/:id"),render:function(t){var n,r=t.match;return a.a.createElement(Te,{open:!0,hotspot:(n=r.params.id,e.props.hotspots.find(function(e){return e.id===n}))})}}),a.a.createElement(g.a,{exact:!0,path:E.addHotspot,render:function(t){t.match;return a.a.createElement(ie,{open:!0,coordinates:e.props.coordinates})}}),a.a.createElement(g.a,{exact:!0,path:E.login,render:function(e){e.match;return a.a.createElement(_e,{open:!0})}}),a.a.createElement(g.a,{exact:!0,path:E.register,render:function(e){e.match;return a.a.createElement(Me,{open:!0})}}))}}]),t}(a.a.Component),Ue={initialiseHotspots:M,setHotspotsOnMap:A,checkUserSession:function(){return function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.getProfile();case 3:t({type:"SET_USERLOGGEDIN",loggedIn:!0}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()}},Ae=Object(v.a)(Object(f.b)(function(e){return{hotspots:e.hotspot.hotspots,coordinates:e.hotspot.newCoordinates}},Ue)(Ve)),Pe=n(62),Fe=n(266),Ne=n(267),Ke=Object(Pe.combineReducers)({map:F,user:q,hotspot:V}),Ge=Object(Pe.createStore)(Ke,Object(Ne.composeWithDevTools)(Object(Pe.applyMiddleware)(Fe.a))),Re=n(525),Be=function(){s.a.render(a.a.createElement(f.a,{store:Ge},a.a.createElement(Re.a,null,a.a.createElement(Ae,null))),document.getElementById("root"))};Be(),Ge.subscribe(Be)}},[[278,2,1]]]);
//# sourceMappingURL=main.6c0627e5.chunk.js.map