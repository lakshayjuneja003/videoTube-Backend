import mongoose from "mongoose";
import { DB_NAME } from "../contants";

const connectdb = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! Db Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection failed",error);
    }
}

export default connectdb;