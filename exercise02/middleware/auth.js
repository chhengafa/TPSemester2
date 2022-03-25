
const Signin=(req,res,next)=>{
    if(req.session){
        return res.json({
            success:false,
            error:'you must sign in'
        })
    }
    next();
}
const Signout=(req,res,next)=>{
    if(req.session){
        return res.json({
            success:false,
            error:'you already sign in'
        })
    }
    next();
}
module.exports={
    Signin,Signout
}