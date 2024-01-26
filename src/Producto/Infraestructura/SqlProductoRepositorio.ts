import { Producto } from "../Dominio/Producto";
import {ProductoRepositorio} from "../Dominio/ProductoRepositorio";
import ProductoModelo from "./models/Producto.model";

export class SqlProductoRepositorio implements ProductoRepositorio{
    async addProducto(id_Producto: number, nombre_Producto: string, precio_producto: number): Promise<Producto | null> {
        try {
            const ProductoCreado = await ProductoModelo.create({id_Producto, nombre_Producto, precio_producto})
            return new Producto(ProductoCreado.id_producto, ProductoCreado.nombre_producto, ProductoCreado.precio_producto);
        } catch (error) {
            console.log("Error en sqlProducto.repositorio en add");
            return null;
        }
    }
    async deleteProducto(id_Producto: number): Promise<Producto | null> {
      try {
        const ProductoEliminado = await ProductoModelo.findOne({where: {id_Producto: id_Producto}});
        if (ProductoEliminado) {
            await ProductoEliminado.destroy();
            return new Producto(ProductoEliminado.id, ProductoEliminado.nombre_producto, ProductoEliminado.precio_producto)
        }else{
            return null;
        }
      } catch (error) {
        console.log("error en sqlProducto.repositorio en el delete");
        return null;
      }
    }
    
}