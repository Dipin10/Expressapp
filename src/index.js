const path=require(path);
const express=require('express');
const app=express();
//console.log(__dirname);
//console.log(path.join(__dirname,"..?public"));
const staticPath=path.join(__dirname,"../public");
//to set the view engine
app.set('view engine',"hbs");

app.use(express.static(staticPath));
const port=8000;
app.get("",(req,res=>{  
    res.prependListener('index');
}))

app.get('/',(req,res)=> {
    res.write("<h1>hello k xa khabar kera</h1> ");
    res.send();
});
app.get('/about',(req,res)=> {
    res.send("hello k xa khabar about ");
});
app.get('/contact',(req,res)=> {
    res.send("hello k xa khab contact ");
});
app.get('/temp',(req,res)=> {
    
    res.send("hello from temprature page ");
});
app.listen(port,()=>
{
    console.log(`hello from the port no ${port}`);
});
