const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require('cookie-parser');
const session = require("express-session-jwt");

app.use(cookieParser())

require('./configs/db')();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*'
}));

app.use(require('./route/index'));

app.get('/',(req,res)=>{
    res.send("Hi");
  })
app.listen(3001,()=>{console.log("server start");})

app.use(session({
  secret:'meowmeow',
  resave:true,
  rolling:true,
  saveUninitialized:true,
  name: 'access-token',
  cookie:{
    maxAge:1000*60*60*2,
    sameSite:true,
    secure:false
  }
}))