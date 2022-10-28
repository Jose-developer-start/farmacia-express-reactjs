import connect from "../config/dbConnect.js"
//Path directory
import {join,dirname} from "path"
import {fileURLToPath} from "url"

const __path = join(dirname(fileURLToPath(import.meta.url)),'../public')
export const ProductoController = {
    getProducto: (req,res)=>{
        connect.query("SELECT * FROM producto", (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getProductoById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM producto WHERE id=?",id, (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    storeProducto: (req,res)=>{
        //console.log(req.body)
        /* imgProduct.mv(`${__path}/${imgProduct.name}`,err => {
                if(err) return res.status(500).send({ message : err })
        
                return res.status(200).send({ message : 'File upload' })
            })*/
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
