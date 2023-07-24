const express=require('express')
const app=express()
const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
var routes=require('./route/routes');
const cors=require('cors');

app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));

app.listen(9991,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

mongoose.connect("mongodb://127.0.0.1:27017/adbms", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully Connected to DB");
  })
  .catch((error) => {
    console.log("Error Connecting to DB:", error);
  });

  app.use(express.json());
  app.use(routes);