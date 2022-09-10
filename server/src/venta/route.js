import { Router } from "express";
import { VentaController } from "./controller.js";

const router = Router()


export const VentaRouter = (app)=>{
    router.get('/', VentaController.getVenta)
    router.get('/:id', VentaController.getVentaById)
    router.post('/', VentaController.storeVenta)
    router.put('/:id', VentaController.updateVentaById)
    router.delete('/:id', VentaController.deleteVentaById)

    return app.use('/api/ventas', router);
}