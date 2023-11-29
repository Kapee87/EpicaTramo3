import { Router } from 'express'
import authController from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { handleErrorValidations } from '../middlewares/validators/validateHandler.js'
import { validateLogin, validateRegister } from '../middlewares/validators/validateAuth.js'


const router = Router()

const { register, login, logout, profile, updateUser } = authController

//Rutas para registro de usuario
router.post("/register", validateRegister, handleErrorValidations, register)

//Rutas para iniciar sesión
router.post("/login", login) //validateLogin, handleErrorValidations,

router.post("/logout", logout)

router.post("/profile", authRequired, profile)

router.post("/editProfile", authRequired, updateUser)


export default router