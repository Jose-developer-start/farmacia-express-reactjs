import connect from "../config/dbConnect.js"

export const VentaController = {
    getVenta: (req,res)=>{
        connect.query("SELECT venta.id,venta.fecha_venta,venta.total_pago,venta.descuento,cliente.nombre AS clienteNombre,cliente.apellido AS clienteApellido,usuario.nombre AS userNombre,usuario.apellido AS userApellido FROM `venta`INNER JOIN cliente ON venta.cliente_id=cliente.id INNER JOIN usuario ON venta.usuario_id=usuario.id", (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getVentaById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM venta WHERE id=?",id, (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    storeVenta: (req,res)=>{
        try{

            connect.query("INSERT INTO venta set ?",req.body, (err,result)=>{
                res.status(201).json({
                    "status":"inserted data",
                    "insertId": result.insertId 
                })
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },
    updateVentaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE venta SET ? WHERE id=?",[req.body,id], (err,result)=>{
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
    deleteVentaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM venta WHERE id=?",id, (err,result)=>{
                res.json({
                    "status": "deleted"
                })
            })
        }catch{
            res.status(500).json({
                "status": "server error"
            })
        }
    }
} 
