/* Build a file upload app for the Chicago NSBE Website.  This app should be able to ask for a file from a users computer and then upload it 
into a uniquely named folder on the server.

Research and build and interface and then the app functionality.  Post the code on your Git site and then email me the link.  

Do not worry about storing the name into a database.  Using a flat file will work just fine for now.  You will need to do a fair amount 
of research and collaboration to complete this task on time.
*/

//Outline

//Ask the user for a file (Listen for it?)

//Check to make sure a file is being uploaded

//If a file is being uploaded then move it to the folder on the server

//Make sure it was uploaded successfully by checking the contents of the server folder?

//If not, then give the user an error

var express = require('express');
var app = express();
var fs = require('fs');

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
