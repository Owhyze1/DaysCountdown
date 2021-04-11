var express = require('express');
var app = express();
var port = 3000;

// import whole directory
app.use(express.static(__dirname));

// listen for requests
var server = app.listen(port, () => {
    console.log(`Server listening on port ${server.address().port}`);
});
