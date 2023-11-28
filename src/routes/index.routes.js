import { Router } from 'express'
import authRouter from './auth.routes.js'
import postRouter from './post.routes.js'
import commentsRouter from './comments.routes.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.use("/auth", authRouter)

router.use(authRequired, postRouter)

router.use(authRequired, commentsRouter)


export default router