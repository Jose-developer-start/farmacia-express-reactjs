import connect from "../config/dbConnect.js"
export const detalleVentaController = {
    getDetalleVenta: (req,res)=>{
        connect.query("SELECT * FROM detalle_venta", (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getDetalleVentaById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT venta.id,producto.id,cliente.nombre,cliente.apellido,producto.producto,producto.descripcion,venta.fecha_venta,venta.total_pago,producto.precio_venta,venta.descuento FROM `detalle_venta` INNER JOIN producto ON detalle_venta.producto_id=producto.id INNER JOIN venta ON detalle_venta.venta_id=venta.id INNER JOIN cliente ON venta.cliente_id=cliente.id WHERE venta.id=?",id, (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    storeDetalleVenta: (req,res)=>{
        try{

            connect.query("INSERT INTO detalle_venta set ?",req.body, (err,result)=>{
                res.status(201).json({
                    "status":"inserted data"
                })
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },
    updateDetalleVenta: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE detalle_venta SET ? WHERE id=?",[req.body,id], (err,result)=>{
                res.status(200).json({
                    "status": "updated data"
                })
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },
    deleteDetalleVentaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM detalle_venta WHERE id=?",id, (err,result)=>{
                res.json({
                    "status": "deleted data"
                })
            })
        }catch{
            res.status(500).json({
                "status": "server error"
            })
        }
    }
} 
