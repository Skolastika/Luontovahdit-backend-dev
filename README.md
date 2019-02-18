# Luontovahdit Backend

Backend for [Luontovahdit frontend](https://github.com/Skolastika/luontovahdit-frontend-suggestion), a map-based application where users can add info and comments for hotspots on the map. Contains the build of the frontend in the `build` directory.

Made with Node.js and Express, using Passport for session management. Mongoose for MongoDB interaction.


## Available Scripts

In the project directory, you can run:

### `npm start` or `node index.js`

Runs the app.

### `npm run watch`

Runs the app and watches for changes, restarting automatically when changes are detected.


## Environment variables

The backend assumes that these variables are available:

`ATLAS_URI` The Mongo DB access url.
`SECRET` Secret string for creating the user session.
In addition, `PORT` can be specified. If not, the default is 8000.


## API

### Hotspots

Hotspots are points on the map with a title, description, comments, and votes. The comments are stored as id numbers, have their own model and are handled from their own API, but comments are populated when the hotspot is returned as a response.

`GET /api/hotspots`

Returns all hotspots.

`GET /api/hotspots/@:longitude,:latitude,:radius`

Parameters after @: longitude, latitude, radius (in kilometers), comma separated. Get hotspots near a spot according to longitude and latitude with a given radius in km. Radius is optional and defaults to 500 km. Requires 2dsphere index in the MongoDB collection.

Returns hotspots sorted by distance limited to `MAX_HOTSPOTS`.

`GET /api/hotspots/:id`

Returns the hotspot according the the id.

`POST /api/hotspots`

Creates a new hotspot by the session user. Data expected in json format with GeoJSON coordinates for a point:

```JSON
{
  "title": "Title of the hotspot",
	"description": "Describe the hotspot.",
	"location": {
		"type": "Point",
		"coordinates": [
			25.0094,
			61.7826
		]
	}
}
```

`POST /api/hotspots/:id/edit`

Requires user session, and the hotspot must be created by the same user. Expects json with title and/or description.
```JSON
{
  "title": "New Title",
  "description": "New description."
}
```

`POST /api/hotspots/vote`

Request body json in the format:
```JSON
{
  "type": "upVote" 
}
```

Type can be upVote or downVote. Requires an active session. The vote is registered to the session user.

`DELETE /api/hotspots/:id`

Delete the hotspot associated with id. Requires the user to be logged in, and the hotspot must be created by the same user.


### Comments

Comments are always associated with a hotspot, through the inHotspot field.

`GET /api/comments`

Returns all comments.

`GET /api/comments/user=:userId`

Returns all comments by the user specified by `userId`.

`POST /api/comments`

Requires an active session. Creates a new comment. Expects content and the associated hotspot id.
```JSON
{
	"content": "This is a new comment.",
	"inHotspot": "5c1e2ecbc969793cecad491a"
}
```

`POST /api/comments/:id/edit`

Requires user session, and the comment must be posted by the same user. Expects json with content.
```JSON
{
	"content": "This is an edited comment."
}
```

`POST /api/comments/:id/vote`

Similar to hotspot vote. Request body json in the format:
```JSON
{
  "type": "upVote" 
}
```

Type can be upVote or downVote. Requires an active session. The vote is registered to the session user.

`DELETE /api/hotspots/:id`

Delete the hotspot associated with id. Requires the user to be logged in, and the hotspot must be created by the same user.

