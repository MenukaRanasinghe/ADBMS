var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var studentSchema=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('student',studentSchema);