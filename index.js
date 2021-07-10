const postgresql = require('postgresql');
const express = require('express');

const app = express();
const port = 8000;

app.use('/', express.static(__dirname + '/client'));



app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});
