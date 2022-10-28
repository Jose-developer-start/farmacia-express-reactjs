import connect from "../config/dbConnect.js"
export const UserController = {
    getUsers: (req,res)=>{
        connect.query("SELECT * FROM usuario", (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    getUserById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM usuario WHERE email=?",id, (err,result)=>{
            res.status(200).json({
                "autor": "@",
                "versión": "1.0.0",
                "body": result
            })
        })
    },
    storeUser: (req,res)=>{
        try{

            connect.query("INSERT INTO usuario set ?",req.body, (err,result)=>{
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
    updateUserById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE usuario SET ? WHERE id=?",[req.body,id], (err,result)=>{
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
    deleteUserById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM usuario WHERE id=?",id, (err,result)=>{
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
