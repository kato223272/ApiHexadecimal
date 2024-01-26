import express from "express";
import {Signale} from "signale";
import {vendedorRouter} from "./Vendedor/Infraestructura/VendedorRoutes";
import {ProductoRouter} from "./Producto/Infraestructura/Producto.routes"
import {InicializarBaseDatos} from "./Conexion/Base";


const app = express();
const signale = new Signale();


app.use(express.json());
app.use('/Vendedor',vendedorRouter);
app.use('/Producto', ProductoRouter);

async function iniciarServidor(){
    try {
        await InicializarBaseDatos();
        app.listen(3000, ()=>{
            signale.success("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        signale.error("Error al iniciar el servidor", error);
    }
}

iniciarServidor();