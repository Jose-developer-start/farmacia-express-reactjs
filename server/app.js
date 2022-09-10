import express from "express"
import morgan from "morgan"
import cors from "cors"

//Import routas web API
import { UserRouter } from "./src/user/route.js"
import { CategoriaRouter } from "./src/categoria/route.js"
import { ClienteRouter } from "./src/cliente/route.js"

import {config} from "./src/config/config.js"
import { ProductoRouter } from "./src/producto/route.js"
import { VentaRouter } from "./src/venta/route.js"
import { detallerVentaRouter } from "./src/detalle_venta/route.js"


//App initial
const app = express()

//Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin: "*"}))
//Config

//Routas
UserRouter(app)
CategoriaRouter(app)
ClienteRouter(app)
ProductoRouter(app)
VentaRouter(app)
detallerVentaRouter(app)
//Server running lister
app.listen(config.PORT, ()=>console.log('Server on port: ' + config.PORT))
