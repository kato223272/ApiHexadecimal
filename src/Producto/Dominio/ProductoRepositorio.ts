import { Producto} from "./Producto";

export interface  ProductoRepositorio {
    addProducto(id_Producto: number, nombre_Producto: string, numeroTel_Producto: number):Promise<Producto | null>;
    deleteProducto(id_Producto: number): Promise<Producto | null>;
}