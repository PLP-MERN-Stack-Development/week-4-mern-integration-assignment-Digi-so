import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {type:string,required:true,unique:true},
  padword: {type:string,required:true}});
  export default mongoose.model('User', userSchema);