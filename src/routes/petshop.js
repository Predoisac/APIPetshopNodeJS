import express from "express"
import ControllerClient from "../controllers/client.js"
import ControllerDog from "../controllers/dog.js"

const router = express.Router()

router.get("/clients", ControllerClient.GetAll)
router.get("/client/:id", ControllerClient.GetOne)
router.post("/client", ControllerClient.Create)
router.put("/client/:id", ControllerClient.Update)
router.delete("/client/:id", ControllerClient.Delete)

router.get("/dogs", ControllerDog.GetAll)
router.get("/dog/:id", ControllerDog.GetOne)
router.post("/dog", ControllerDog.Create)
router.put("/dog/:id", ControllerDog.Update)
router.delete("/dog/:id", ControllerDog.Delete)

export default router