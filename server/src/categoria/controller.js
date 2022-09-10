import connect from "../config/dbConnect.js"
export const CategoriaController = {
    getCategoria: (req,res)=>{
        connect.query("SELECT * FROM categoria", (err,result)=>{
            res.status(200).json(result)
        })
    },
    getCategoriaById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM categoria WHERE id=?",id, (err,result)=>{
            res.json(result)
        })
    },
    getCategoriaById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM categoria WHERE id=?",id, (err,result)=>{
            res.json(result)
        })
    },storeCategoria: (req,res)=>{
        connect.query("INSERT INTO categoria set ?",req.body, (err,result)=>{
            res.json(result)
        })
    },
    updateCategoriaById: (req,res)=>{
        const {id} = req.params
        connect.query("UPDATE categoria SET ? WHERE id=?",[req.body,id], (err,result)=>{
            res.status(200).send('Update')
        })
    },
    deleteCategoriaById: (req,res)=>{
        const {id} = req.params
        connect.query("DELETE FROM categoria WHERE id=?",id, (err,result)=>{
            res.json(result)
        })
    }
} 
