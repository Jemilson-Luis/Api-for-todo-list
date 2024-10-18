import { Router } from "express";
import UserController from "../controllers/users.controllers";

const controller = new UserController()
const userRouter = Router()

userRouter.get('/users', controller.get.bind(controller))
userRouter.post('/users/:name/:email/:password', controller.create.bind(controller))
userRouter.patch('/users/:id/:name/:email/:password', controller.update.bind(controller))
userRouter.delete('/users/:id', controller.delete.bind(controller))
userRouter.get('/users/authenticate/:email/:password', controller.authenticate.bind(controller))

export default userRouter

