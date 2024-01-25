import { Producto} from "./Producto";

export interface ProductoRepositorio {

    addProducto(id_producto:number, nombre_producto:string, precio_producto:number ):Promise<Producto | null>;
}
