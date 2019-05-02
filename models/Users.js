const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const newUser=new Schema({
googleID:String
});

module.exports= mongoose.model('user',newUser);
