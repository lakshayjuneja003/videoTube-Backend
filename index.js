import dotenv from "dotenv"
import connectdb from "./db/db.js"
import { app } from "./app.js"
dotenv.config({
    path:'./.env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);

    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed", err);
})