var express = require('express');
var app = express();

//Mount dependencies
app.use(express.static(__dirname+'/'));

//Route everything else to AngularJS frontend
app.get('/*',function(req,res){
	res.sendFile(__dirname+'/test_index.html');
});

app.listen(8080, function () {
  console.log('Testing on port 8080');
});