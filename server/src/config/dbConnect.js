import mysq from "mysql"
import { config } from "./config.js"

const connect = mysq.createConnection({
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password:config.DB_PASSWORD
})

connect.connect((err)=>{
    if(err) console.log(err)
    console.log('Database is connected in port || localhost:3306')
})

export default connect