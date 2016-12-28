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
var multer  = require('multer');

//
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

//creates a route to index html and sends the file there
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

//the file is retrieved
app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
 //  
 fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){ //if an error is thrown then give the user an error
            console.log( err );
            }else{  //otherwise the file has been uploaded successfully
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response ); //succesful upload message given to user
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
