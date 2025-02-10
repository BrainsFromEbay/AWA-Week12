import express, {Express} from "express"
import mongoose, {Connection} from "mongoose";
import cors, {CorsOptions} from "cors";
import dotenv from "dotenv";
import path from "path"
import bookRouter from "./src/routes/book" 

dotenv.config()

const app: Express = express()
const port: number = parseInt(process.env.PORT as string) || 1234

const mongoDB: string = "mongodb://127.0.0.1:27017/testdb"
mongoose.connect(mongoDB)
mongoose.Promise = Promise
const db: Connection = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error"))

if (process.env.NODE_ENV === 'development') {
    const corsOptions: CorsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
    app.use(cors(corsOptions))
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "../public")))
app.use("/api/book", bookRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})