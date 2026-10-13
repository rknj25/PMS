import mongoose from "mongoose";
const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected");
    }
    catch{
        console.log("Database not connected");
        
    }
}

export default dbConnect;