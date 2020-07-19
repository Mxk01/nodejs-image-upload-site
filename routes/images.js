let express = require('express');
let router = express.Router();

router.get('/:imgfile',(req,res)=>
{
  let {imgfile} = req.params.id;
  console.log(imgfile);
})











module.exports = router;
