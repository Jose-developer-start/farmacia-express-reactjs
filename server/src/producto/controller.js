import connect from "../config/dbConnect.js"
export const ProductoController = {
    getProducto: (req,res)=>{
        connect.query("SELECT * FROM producto", (err,result)=>{
            res.status(200).json(result)
        })
    },
    getProductoById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM producto WHERE id=?",id, (err,result)=>{
            res.status(200).json(result)
        })
    },
    storeProducto: (req,res)=>{
        try{

            connect.query("INSERT INTO producto set ?",req.body, (err,result)=>{
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
    updateProductoById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE producto SET ? WHERE id=?",[req.body,id], (err,result)=>{
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
    deleteProductoById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM producto WHERE id=?",id, (err,result)=>{
                res.json(result)
            })
        }catch{
            res.status(500).json({
                "status": "server error"
            })
        }
    }
} 
