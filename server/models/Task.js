const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    title:{type:String,require:true,trim:true},
    done:{type:Boolean,default:false}
});
module.exports=mongoose.model('task',taskSchema);