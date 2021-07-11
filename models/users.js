const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    },
    name:{
        type:string,
        required:true
    }
},{
    timestamps:true
});
const user=mongoose.model('user', userschema);
module.exports=user;