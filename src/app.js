const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello from the express");
});
app.get('/about',(req,res)=>{
res.send("hello namasskar");
});
app.listen(8000,()=>{
console.log("listening from the express");
});

