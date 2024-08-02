const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true
    }
});

const Admin=mongoose.model("admindetails",schema);

module.exports={
    Admin
}