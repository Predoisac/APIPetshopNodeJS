import express from "express"
import ControllerClient from "../controllers/client.js"

const router = express.Router()

router.get("/clients", ControllerClient.GetAll)
router.get("/client/:id", ControllerClient.GetOne)
router.post("/client", ControllerClient.Create)
router.put("/client/:id", ControllerClient.Update)
router.delete("/client/:id", ControllerClient.Delete)

export default router