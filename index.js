let express = require("express");
let app = express();
let dotenv =  require('dotenv');
dotenv.config();
let port = process.env.PORT||3000;
let path = require('path');
let uploadRoute = require('./routes/upload.js');
let imagesRoute = require('./routes/images.js');
let mongoose = require('mongoose');



mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log('Connected')).catch(e=>console.log(e));

app.set('view engine','ejs');


app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{

  res.render('form-uploads');
})

app.use('/',uploadRoute);
app.use('/images',imagesRoute);








app.listen(port,()=>console.log('Listening to the server ... '));
