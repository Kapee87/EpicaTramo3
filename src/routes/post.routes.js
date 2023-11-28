import { Router } from "express";
import controller from "../controllers/post.controller.js";
import { validateCreatePost, validateUpdatePost } from "../middlewares/validators/validatePost.js";
import { handleErrorValidations } from "../middlewares/validators/validateHandler.js";


const router = Router()

const { getAllPosts, getPostById, createPost, updatePost, deletePost } = controller


router.get("/post/all", getAllPosts)
router.get("/post/:id", getPostById)
router.post("/post", validateCreatePost, handleErrorValidations, createPost)
router.put("/post/:id", validateUpdatePost, handleErrorValidations, updatePost)
router.delete("/post/:id", deletePost)

export default router