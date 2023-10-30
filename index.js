import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/userRoute.js"
const PORT = 3000
const DB_URI = "mongodb://127.0.0.1:27017/hospital"
const app = express()
mongoose.connect(DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
const db = mongoose.connection

db.on("error", (error) => {console.log(error)})
db.once("open", () => { console.log("Database connected")})

app.use(cors())
app.use(express.json())
app.use(userRoute)

app.listen(PORT, () => {
    console.log(`server up and running on http://localhost:${3000}`)
})