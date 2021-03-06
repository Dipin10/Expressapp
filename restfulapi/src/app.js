const express=require("express");
require("./db/conn");
const Student=require("./students");
const app=express();

const port=process.env.PORT||3000;

app.use(express.json());
// create a new students
app.post("/students",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body)
    user.save().then(()=>{
res.send(user);
    }).catch((e)=>{
        res.send(e);
    }
    )
    //res.send("hello from the server side");
})
app.post("/students",async(req,res)=>)
app.listen(port,()=>{
    console.log(`connection is succesful at ${port}`);
}) 