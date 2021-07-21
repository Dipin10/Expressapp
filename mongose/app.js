const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dipinchannel", {useNewUrlParse:true, useUnifiedTopology:true})

.then( ()=>console.log("connection succesful.."))
.catch((err)=>console.log(err));
//schema
const playlistSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },

    ctype:String,
    phone:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }

})
//Mongose model
const createDocument = async()=>{
    try{
const Playlist=new mongoose.model("Playlist",playlistSchema);
const reactPlaylist=new Playlist({
    name:"React JS",
    ctype:"Front End",
    phone:90,
    active:true,
    
})
const result=await reactPlaylist.save();

}
catch(err){
    console.log(error);
}
}
//createDocument();
const getDocument=async()=>{
    try
{
   const result=await Playlist.find({videos:{$gte:50}})
   .select({name:1});
   console.log(result);

}
catch(err){
    console.log(err);
}
}

getDocument();
  
