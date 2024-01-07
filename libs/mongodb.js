import mongoose from "mongoose";
const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    }catch(error){
        console.log("not Connected")
    }
}

export default connectMongoDB;