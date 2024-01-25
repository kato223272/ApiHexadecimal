import { Producto } from "../Dominio/Producto";
import { ProductoRepositorio } from "../Dominio/ProductoRepositorio";
import ProductoModel from "./models/Producto.model";

export class SqlproductoRepositorio implements ProductoRepositorio{
    async addproducto(id_producto: number, nombre_producto: string, precio_producto: number): Promise<Producto | null> {
        try {
            const productoCreado = await ProductoModel.create({id_producto,nombre_producto, precio_producto});
            return new Producto(productoCreado.id_producto, productoCreado.nombre_producto, productoCreado.precio_producto)
        } catch (error) {
            console.log("Error en sqlproducto.repositorio", error);
            return null;
        }
    }

    async deleteproducto(id_producto: number): Promise<Producto | null> {
        try {
            const productoEliminado = await ProductoModel.findOne({where: {id_producto:id_producto}});
            if(productoEliminado){
                await productoEliminado.destroy();
                return new Producto(productoEliminado.id,productoEliminado.nombre_producto, productoEliminado.precio_producto);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlproducto.repositorio en Deleteproducto", error);
            return null;
        }
    }
}