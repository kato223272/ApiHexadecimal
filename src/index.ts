import express from "express";
import {Signale} from "signale";
import {vendedorRouter} from "./Vendedor/Infraestructura/VendedorRoutes";
import {ProductoRouter} from "./Producto/Infraestructura/Producto.routes"
import {InicializarBaseDatos} from "./Conexion/Base";


const app = express();
const signale = new Signale();


app.use(express.json());
// app.use('/Vendedor',vendedorRouter);
// app.use('/Producto', ProductoRouter);

async function inicializarServidor(){
    try {
        await InicializarBaseDatos();
        app.listen(3000, ()=>{
            signale.success("El servidor está corriendo en el puerto 3000");
        })
    } catch (error) {
        signale.error("Se produjo un error al inicializar el servidor", error)
    }
   
}

inicializarServidor();


