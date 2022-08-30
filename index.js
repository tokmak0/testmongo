const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});

const mongoose = require('mongoose');
try{
mongoose.connect(process.env.api,{
  useNewUrlParser: true
});
  console.log("evety")
}catch(e){
  console.log(e)
}
mongoose.pluralize(null);


var comment= require("./comment.js")
console.log(comment)


app.use(express.urlencoded());
app.use(express.json());

app.get('/login', (req, res) => {
  comment.find({}, (err, data) => {
  if (err) throw err;
    console.log(data)
  res.render(__dirname+"/views/login",{
    comment:data.reverse()
  })
  
});

});

app.get('/', (req, res) => {
  res.render(__dirname+"/views/index")
});



app.post('/login', (req, res) => {
var name=req.body.name;
var surname=req.body.surname;
console.log(surname);
comment.create({ name: name, surname: surname }, (err, result) => {
  if (err) throw err;
  console.log(result);
});
    res.redirect("/login")


  
});



