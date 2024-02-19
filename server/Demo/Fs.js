const fs=require('fs')
// const path=require('path')
// fs.writeFile('Hello.html',"Welcome..",(err)=>{
//     if (err) throw err
// })
// fs.writeFile('Hii.html',"Hii..",(err)=>{
//     if (err) throw err
// })
// fs.appendFile('Hello.html','hiii',(err)=>{
//     if(err) throw err
// })
fs.readFile('Hello.html','utf8',(err,data)=>{
    console.log(data)
})

// fs.mkdir(path.join(__dirname,"/pqr"),{},(err)=>{
//     if(err) throw err
// })
