import express from "express"
import { configDotenv } from "dotenv"
import { connectDb, sequelize } from "./config/connectDb.js"
import Router from "./routes/userRoutes.js"

configDotenv()
connectDb()

const app = express()
const port = process.env.PORT || 6000

app.use(express.json()) // ✅ IMPORTANT
app.use("/", Router)

// DB sync
;(async () => {
    try {
        await sequelize.sync({ alter: true })
        console.log("Database Synced")
    } catch (e) {
        console.log("Error Syncing the Database", e)
    }
})()

app.listen(port, () => {
    console.log("Server is running on port:", port)
})