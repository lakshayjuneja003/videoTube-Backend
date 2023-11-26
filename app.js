import { express } from "express";
import cors from "cors"
import cookieParser from "cookieparser"

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import 
import userRouter from "./routes/user.route.js"

// routes declartion
app.use("api/v1/users", userRouter)

// example of the web url
// http:localhost:3000/api/v1/users/

export {app}
