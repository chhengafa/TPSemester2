

const logout = (session)=>{
    try {
        session.jwt=null;
        session.destroyed() ;
        return{
            success:true,
        }

    } catch (err) {
        return {
            success: false,
            error:err ||'error'
        }
    }
}
module.exports={
    logout
}