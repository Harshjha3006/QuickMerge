const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const merger = require('./merge.js');
const upload = multer({dest :'pdfs/'});
const port = 80;
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.post('/',upload.array('pdfs',2),async (req,res)=>{
   let d = await merger(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
   res.redirect(`http://localhost:80/${d}.pdf`);
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'merge.html'));
});
app.listen(port,()=>{
    console.log(`The server is listening at http://localhost:${port}`);
});
