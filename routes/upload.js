// We want to save the images to the disk
let multer = require("multer");
let express = require('express');
let Upload = require('../models/UploadModel');
let router = express.Router();
let path = require('path');
const helpers = require('../helpers');
let storage = multer.diskStorage(
{
destination: (req,file,cb)=>
{
   cb(null,'uploads/');
},  // Files will be stored here
filename:(req,file,cb)=>{
  let image = new Upload({});
 console.log(image);
  // Adding extension to filename
  // field name is the name that we give to it in views (profile_pic);
 let fullNameFile = file.fieldname+'-'+Date.now()+path.extname(file.originalname);

image.filePath = fullNameFile;
image.save().then(()=>console.log('Image has been saved')).catch(e=>console.log(e));

cb(null,fullNameFile); // original name is the original name that our file had
}
});


router.post('/upload-profile-image',(req,res)=>{
  // With fileFilter we make sure only images are uploaded
  let upload = multer({storage,fileFilter:helpers.imageFilter}).single('profile_pic');

  upload(req,res,(err)=>{

  // req.file contains information of uploaded file
  // req.body contains information of text fields, if there were any
    // Validating the file and checking for errors
  if(req.fileValidationError) {return res.send(req.fileValidationError);}
  else if(!req.file) {return res.send("Please select an image to upload");}
  else if(err instanceof multer.MulterError) {return res.send(err);}
  else if(err) {return res.send(err);}

  // console.log(req.file);
  // // Displaying the image
  // console.log(req.file.path.replace("//","/"));
   // res.redirect('/images');
  res.render('file-uploaded',{message:req.file.path.replace("//","/")})
    })
})

module.exports = router;
