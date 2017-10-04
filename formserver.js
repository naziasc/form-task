const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');
const path = require ('path');
const app = express();

const PORT = 3000;

app.use(formidable());
//to link to the css files, images.static assests. available for everyone to view.
app.use(express.static('public'))

app.get('/', function(req,res){
  console.log('get to root');
  res.sendFile(path.join(__dirname, 'form.html'))
});

app.post('/', function(req,res) {
  console.log('post to /')
  console.log(req.fields);
  fs.writeFile
  (path.join(__dirname, 'form.json'), JSON.stringify(req.fields), function(error){
    if(error){
      console.log('ERROR');
      return res.send('ERROR')
    };


    res.send('Thanks for signing up');
  })
});

app.listen(PORT, function(){
  console.log('listening on port '+ PORT)
});
