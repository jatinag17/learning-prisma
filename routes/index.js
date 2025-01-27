import { Router } from "express";
import UserRoutes from "./userRoutes.js";
import PostRoutes from "./postRoutes.js";
import CommentRoutes from "./commentRoutes.js";

const router = Router();

router.use("/api/user", UserRoutes);

// for post route
router.use("/api/post", PostRoutes);

// for comment route
router.use("/api/comment", CommentRoutes);

export default router;
