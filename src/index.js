import express from "express"
import database from "./config/database.js"
import router from "./routes/petshop.js"

const api = express()
api.use(express.json())
api.use("/api", router)

const port = 3000

database.db
    .sync({force: false})
    .then((_) => {
        api.listen(port, () => {
            console.info("Server running on port 3000")
        })
    })
    .catch((e) => {
        console.log("Failed to connect to Server")
        
    })