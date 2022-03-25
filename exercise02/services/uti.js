const jwt = require('jsonwebtoken')
const creatSession =(userId, email)=>{
    return jwt.sign({
        _id:userId,
        email
    },'jwt-secret');
}
module.exports={
    creatSession
}