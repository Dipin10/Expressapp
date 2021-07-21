const mongoose=require("mongoose");
const validator=require("validator");
const StudentSchema=new mongoose.Schema({
    name:String,
    required:true,
    minlenght:3,

},
{

email: {
    type:String,
    required:true,
    unique:[true,"Email id already present"],
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
        }
    }
},
phone:{
    type:Number,
    unique:true,
    min:10,
    max:10,},
    address:{
        
        required:true,
    }

})
const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;
