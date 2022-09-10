import { Router } from "express";
import { ClienteController } from "./controller.js";

const router = Router()


export const ClienteRouter = (app)=>{
    router.get('/', ClienteController.getCliente)
    router.get('/:id', ClienteController.getClienteById)
    router.post('/', ClienteController.storeCliente)
    router.put('/:id', ClienteController.updateClienteById)
    router.delete('/:id', ClienteController.deleteClienteById)

    return app.use('/api/clientes', router);
}