const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.c2wbrsc.mongodb.net/pingopongo?retryWrites=true&w=majority`, (err)=>{
  if(err){
           console.log(err.message)
  }else{
            console.log('connected to mongodb')
  }
})


// mongodb+srv://<username>:<password>@cluster0.c2wbrsc.mongodb.net/?retryWrites=true&w=majority