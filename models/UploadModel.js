let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UploadSchema = new Schema ({
  filePath:
  {
    type:String,
    required:true
  }
})


module.exports = mongoose.model('Upload',UploadSchema);
