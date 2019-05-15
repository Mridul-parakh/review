const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const newUser=new Schema({
googleID:String,
credits:{
    type:Number,
    default:0
}
});

module.exports= mongoose.model('user',newUser);
