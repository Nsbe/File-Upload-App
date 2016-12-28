//creates the directory for files to be uploaded
Var fs  = require(“fs”);
Var files = fs.readdirSync(‘./lib’);
Console.log(files);
Var fs = require(“fs”);
Fs.mkdir(“File Upload”, function(err) {
If (err) {
Consoles.log(err);
} else {
Console.log(“Loaded Documents”);
}
});

//Allows the user to upload single or multiple uploads
<input id="upload=input" type="file" name="uploads[]" multiple="multiple">
#upload-input {
display: none;
}
.btn:focus, .upload-btn:focus{
outline: 0;
}

html,
body {
height: 100%;
}

body {
text-align: center;
}

.row {
 margin-top: 60px;
 }
 
.upload-btn {
  border: none;
  }
  
  .upload-btn:hover,
  .upload-btn:focus,
  .upload-btn:active,
  .upload-btn.active {
  border: none;
  }
  
  var express = require('express');
 var app = express();
  
  
