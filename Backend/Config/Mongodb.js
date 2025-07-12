import mongoose from "mongoose";

const connectDb = async ()=>{
    mongoose.connection.on('connected', ()=> {
        console.log("Database Conneted")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerse`)
}

export default connectDb