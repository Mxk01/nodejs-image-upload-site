let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>
{
  let imgfile = req.file;
  console.log(imgfile);
  // console.log(imgfile);
  // res.render("form-uploaded.ejs");
})











module.exports = router;
