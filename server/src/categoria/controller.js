import connect from "../config/dbConnect.js"
export const CategoriaController = {
    getCategoria: (req,res)=>{
        connect.query("SELECT * FROM categoria", (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getCategoriaById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM categoria WHERE id=?",id, (err,result)=>{
            res.json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getCategoriaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("SELECT * FROM categoria WHERE id=?",id, (err,result)=>{
                res.json(result)
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },storeCategoria: (req,res)=>{
        connect.query("INSERT INTO categoria set ?",req.body, (err,result)=>{
            res.json(result)
        })
    },
    updateCategoriaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE categoria SET ? WHERE id=?",[req.body,id], (err,result)=>{
                res.status(200).send('Update')
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },
    deleteCategoriaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM categoria WHERE id=?",id, (err,result)=>{
                res.json({
                "status": "deleted data"
                })
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    }
} 
