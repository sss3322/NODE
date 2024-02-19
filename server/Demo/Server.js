// const path =require('path')
// console.log(_dirname);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.dirname(__filename))
// const http =require("http")
// http.createServer((req,res)=>{
//     res.write("this is running")
//     res.end();
// }).listen(4000,console.log("server is running"))



// const http =require("http")
// const server=http.createServer((req,res)=>{
//     res.write(req.url)
//     console.log(req.url)
//     res.end();
// })
// port=3000
// server.listen(port,()=>console.log(`Server is running on${port}`))

//--------------------------------------------------------------------------------------------

// const fs = require("fs")
// const path= require("path")
// const http =require("http")

// const server= http.createServer((req,res)=>{
//     if(req.url ==="/about")
//     fs.readFile(
// path.join(__dirname,"Home" ,"About.html"),
// "utf8",
// (err,data)=>{
//     if(err)throw err;
//     res.end(data)
// })
// if(req.url ==="/home")
// fs.readFile(
// path.join(__dirname,"Home", "Home.html"),
// "utf8",
// (err,data)=>{
// if(err)throw err;
// res.end(data)
// })
// if(req.url ==="/contact")
// fs.readFile(
// path.join(__dirname,"Home" ,"Contact.html"),
// "utf8",
// (err,data)=>{
// if(err)throw err;
// res.end(data)
// })
// }

// )
// port=5000;
// server.listen(port,()=> console.log(`server is ${port}`))

//-------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.get("/",(req,res)=>{
//     res.send("Welcome")
// })
// app.get("/home",(req,res)=>{
//     res.send("Hii")
// })
// port=5000;
// app.listen(port,console.log(`server is running on ${port}`))

// -------------------------------------------------------------------------------------

// const express= require('express')
// const app=express()

// app.use(express.static('Home'))
// app.get("/*",(req,res)=>{
//     res.status(404)
//     res.send("not found")
// })
// port=5000
// app.listen(port,console.log(`Server is running on ${port}`))

// ---------------------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.get("/home",Token,Validation,(req,res)=>{
//     console.log("Login")
//     res.send("Welcome")
// })
// function Token(req,res,next){
//     console.log("Token creating")
//     next();
// }
// function Validation(req,res,next){
//     console.log("Token approved")
//     next()
// }
// port=5000
// app.listen(port,()=>console.log(`Server is running on ${port}`))
// ---------------------------------------------------------------------------

// const express=require('express')
// const app=express()

// app.get("/home",Token,Validation,(req,res)=>{
//     console.log("Login")
//     res.send("Welcome")
// })
// function Token(req,res,next){
//     setTimeout(()=>{
//     console.log("Token creating")
//     next()},8000);
// }
// function Validation(req,res,next){
//     setTimeout(()=>{
//         console.log("Token approved")
//         next()},8000);
    
// }
// port=5000
// app.listen(port,()=>console.log(`Server is running on ${port}`))

//-----------------------------------------------------------------------

// const express=require('express');
// const Token = require("../Middleware/Token");
// const Validation = require("../Middleware/Validation");
// const app= express()

// const middleware=[Token,Validation]
// app.get("/home",middleware,(req,res)=>{
//     console.log("Login")
//     res.send("Welcome")
// })
// Port=5000;
// app.listen(Port,()=>console.log(`Server is running on ${Port}`))

//------------------------------------------------------------------------
const router=require("../Router/Router1")
const express=require('express')

const app=express()
app.use(express.json())

app.use('/',router)

port=5000
app.listen(port,()=> console.log(`Server is running on ${port}`))