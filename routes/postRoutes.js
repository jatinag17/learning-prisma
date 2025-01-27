import {Router} from 'express';
import { createPost,fetchPosts,showPost, deletePost } from '../controller/PostController.js'

const router = Router()

router.post("/", createPost)
router.get("/", fetchPosts)
router.get("/:id", showPost)
router.delete("/:id", deletePost)



export default router;