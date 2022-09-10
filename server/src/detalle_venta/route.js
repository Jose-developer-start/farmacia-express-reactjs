import { Router } from "express";
import { detalleVentaController } from "./controller.js";

const router = Router()


export const detallerVentaRouter = (app)=>{
    router.get('/', detalleVentaController.getDetalleVenta)
    router.get('/:id', detalleVentaController.getDetalleVentaById)
    router.post('/', detalleVentaController.storeDetalleVenta)
    router.put('/:id', detalleVentaController.updateDetalleVenta)
    router.delete('/:id', detalleVentaController.deleteDetalleVentaById)

    return app.use('/api/detalle-ventas', router);
}