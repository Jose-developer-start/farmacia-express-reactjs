import express from "express"
import morgan from "morgan"
import cors from "cors"
//Subidad de archivos
import fileUpload from "express-fileupload"
//Path directory
import {join,dirname} from "path"
import {fileURLToPath} from "url"

const __path = dirname(fileURLToPath(import.meta.url))
console.log(__path)
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
//Config

//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cors({origin: "*"}))

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//Routas
UserRouter(app)
CategoriaRouter(app)
ClienteRouter(app)
ProductoRouter(app)
VentaRouter(app)
detallerVentaRouter(app)
//Server running lister

app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log("The server is running in port || localhost:",app.get('port'));
});
