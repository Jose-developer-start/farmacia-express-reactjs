import connect from "../config/dbConnect.js"
export const ClienteController = {
    getCliente: (req,res)=>{
        connect.query("SELECT * FROM cliente", (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getClienteById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM cliente WHERE id=?",id, (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    storeCliente: (req,res)=>{
        try{

            connect.query("INSERT INTO cliente set ?",req.body, (err,result)=>{
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
    updateClienteById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE cliente SET ? WHERE id=?",[req.body,id], (err,result)=>{
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
    deleteClienteById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM cliente WHERE id=?",id, (err,result)=>{
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
