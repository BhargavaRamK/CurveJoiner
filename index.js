var express = require('express')

//App setup
var app = express();

var server = app.listen(1234, function(){
    console.log('listening to request on port 1234');
})

app.use(express.static('public'));