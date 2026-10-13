import mongoose from "mongoose";

const proSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}
})
const products=mongoose.model("products",proSchema);

export default products;