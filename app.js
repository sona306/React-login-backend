const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {loginmodel}=require("./models/login")
const {registermodel}=require("./models/register")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sonasabu:sonavi306@cluster0.ejzjjq6.mongodb.net/logindb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/login",(req,res)=>{
    let input=req.body
    let login=new loginmodel(input)
    login.save()
    res.json({"status":"success"})
})

app.post("/register",(req,res)=>{
    let input=req.body
    let register=new registermodel(input)
    register.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    loginmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    ) 
})

app.post("/search",(req,res)=>{
    console.log("hi")
})

app.listen(8081,()=>{
console.log("server running..")
})