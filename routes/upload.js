// We want to save the images to the disk
let multer = require("multer");
let express = require('express');
let Upload = require('../models/UploadModel');
let router = express.Router();
let path = require('path');

// Disk storage w multer
let storage = multer.diskStorage(
{

// Files will be stored here
destination: (req,file,cb)=>
{
   cb(null,'./public/uploaded');
},
filename:(req,file,cb)=>{

  // Adding extension to filename
  // field name is the name that we give to it in views (profile_pic)
  let image = new Upload({});
  console.log(image);

   let fullNameFile = "uploaded/"+image._id+path.extname(file.originalname);
   cb(null,fullNameFile);
// Save an  image
image.filePath = fullNameFile;
image.save().then(()=>console.log('Image has been saved')).catch(e=>console.log(e));

}
});

const upload = multer({storage});

router.post('/upload-profile-image',upload.single('profile_pic'),(req,res)=>{
  console.log(req.file);
res.render('file-uploaded',{message:"Something"});
})

module.exports = router;
