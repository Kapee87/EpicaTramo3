import { Router } from "express";
import controller from "../controllers/comment.controller.js";
import { validateCreateComment, validateUpdateComment } from "../middlewares/validators/validateComment.js";
import { handleErrorValidations } from "../middlewares/validators/validateHandler.js";

const router = Router()

const { getAllComments, getCommentById, createComment, updateCommnent, deleteComment } = controller


router.get("/comments/all", getAllComments)
router.get("/comments/:id", getCommentById)
router.post("/comments", validateCreateComment, handleErrorValidations, createComment)
router.put("/comments/:id", validateUpdateComment, handleErrorValidations, updateCommnent)
router.delete("/comments/:id", deleteComment)

export default router