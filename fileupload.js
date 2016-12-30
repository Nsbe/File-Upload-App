//To be used with index.htm
/* Build a file upload app for the Chicago NSBE Website.  This app should be able to ask for a file from a users computer and then upload it 
into a uniquely named folder on the server.
Research and build and interface and then the app functionality.  Post the code on your Git site and then email me the link.  
Do not worry about storing the name into a database.  Using a flat file will work just fine for now.  You will need to do a fair amount 
of research and collaboration to complete this task on time.
*/

//we need express for the framework and fs because we are working with files
var express = require('express');
var app = express();
var fs = require('fs');


//parses incoming requests in middleware and handles multi-part and form objects
var bodyParser = require('body-parser');


//do I have the right directory?
app.use(express.static('public')); //now files in public directory can be loaded
var multer  = require('multer'); //npm install multer --save
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads'); //this chooses the location that the file is uploaded to
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage: storage }).single('file')

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

// Possible Error Source?
app.post('/fileupload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return
    }
    // Everything went fine
    else{  //otherwise the file has been uploaded successfully
        response = {
          message:'File uploaded successfully'
        };
    }
  console.log( response ); //succesful upload message given to user w/ name of file
  res.end( JSON.stringify( response ) ); //converts javascript value response to readable JSON string

  })
})

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
