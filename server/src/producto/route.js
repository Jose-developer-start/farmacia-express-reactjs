import { Router } from "express";
import { ProductoController } from "./controller.js";

const router = Router()


export const ProductoRouter = (app)=>{
    router.get('/', ProductoController.getProducto)
    router.get('/:id', ProductoController.getProductoById)
    router.post('/', ProductoController.storeProducto)
    router.put('/:id', ProductoController.updateProductoById)
    router.delete('/:id', ProductoController.deleteProductoById)

    return app.use('/api/productos', router);
}