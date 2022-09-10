import { Router } from "express";
import { CategoriaController } from "./controller.js";

const router = Router()


export const CategoriaRouter = (app)=>{
    router.get('/', CategoriaController.getCategoria)
    router.get('/:id', CategoriaController.getCategoriaById)
    router.post('/', CategoriaController.storeCategoria)
    router.put('/:id', CategoriaController.updateCategoriaById)
    router.delete('/:id', CategoriaController.deleteCategoriaById)

    return app.use('/api/categorias', router);
}