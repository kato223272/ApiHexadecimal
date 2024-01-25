import { SqlproductoRepositorio } from "./sqlProductos.repositorio";
import { AddProductoCaseUse } from "../Aplicacion/addProducto.Caso.Use";
import { AddProductoController } from "./controller/addProductoController";

import { DeleteProductoCaseUse } from "../Aplicacion/deleteProducto.caso.Use";
import { DeleteProductoController } from "./controller/deleteProductoController";

export const sqlproductoRepositorio = new SqlproductoRepositorio();
export const addproductoCasoUso = new AddProductoCaseUse(SqlproductoRepositorio);
export const addproductoController = new AddProductoController(addproductoCasoUso);

export const deleteproductoCasoUso = new DeleteProductoCaseUse(SqlproductoRepositorio);
export const deleteproductoController = new DeleteProductoController(deleteproductoCasoUso);