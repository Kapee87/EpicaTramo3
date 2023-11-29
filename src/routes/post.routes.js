import { Router } from "express";
import controller from "../controllers/post.controller.js";
import { validateCreatePost } from "../middlewares/validators/validatePost.js";
import { handleErrorValidations } from "../middlewares/validators/validateHandler.js";


const router = Router()

const { getAllPosts, getPostById, createPost, updatePost, deletePost } = controller


router.get("/all", getAllPosts)
router.get("/:id", getPostById)
router.post("", validateCreatePost, handleErrorValidations, createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router