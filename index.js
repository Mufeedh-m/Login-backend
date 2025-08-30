const express = require("express")
const cors= require("cors")
const app=express()

app.use(cors())

var username="mufeemuneer1@gmail.com"
var password = "mj2728"

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res){

    if(req.query.username==username && req.query.password==password){
        res.send(true)
    }
    else{
        res.send(false)
    }


})
app.listen(3000,function(){
    console.log("Server started.....")
})