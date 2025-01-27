import {Router} from 'express'
import { createUser,updateUser,fetchUser,showUser } from '../controller/UserController.js'

const router = Router()

router.post("/", createUser)
router.put("/:id", updateUser)
router.get("/:id", fetchUser)
router.get("/:id", showUser)



export default router