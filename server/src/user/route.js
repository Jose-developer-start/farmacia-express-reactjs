import { Router } from "express";
import { UserController } from "./controller.js";

const router = Router()


export const UserRouter = (app)=>{
    router.get('/', UserController.getUsers)
    router.get('/:id', UserController.getUserById)
    router.post('/', UserController.storeUser)
    router.put('/:id', UserController.updateUserById)
    router.delete('/:id', UserController.deleteUserById)

    return app.use('/api/users', router);
}