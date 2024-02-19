function Token(req,res,next){
    console.log("Token creating..")
    next()
}
module.exports=Token