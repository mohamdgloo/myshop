//validate the token

const protect=async(req,res,next)=>{
    let token
    console.log(req.headers.authorization);
    
    next()
}
export{protect}