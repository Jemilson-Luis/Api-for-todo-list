import { Router } from "express";
import UserController from "../controllers/users.controllers";
import validateToken from "../middlewares/validateToken.middlewares";

const controller = new UserController()
const userRouter = Router()

userRouter.get('/users', validateToken, controller.get.bind(controller))
userRouter.post('/users/:name/:email/:password', controller.create.bind(controller))
userRouter.patch('/users/:id/:name/:email/:password', validateToken,  controller.update.bind(controller))
userRouter.delete('/users/:id', validateToken, controller.delete.bind(controller))
userRouter.get('/users/authenticate/:email/:password', controller.authenticate.bind(controller))

export default userRouter

