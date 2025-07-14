import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDb from "./Config/Mongodb.js";
import connectCloudinary from "./Config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

//middlewares
app.use(cors());
app.use(express.json())

//Api endPoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter)
app.get('/' , (req,res)=>{
    res.send("Api Conncted")
})

app.listen(port, console.log("server is runing "+ port))