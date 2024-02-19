function Validation(req,res,next){
    console.log("Token approved")
    next()
}
module.exports=Validation