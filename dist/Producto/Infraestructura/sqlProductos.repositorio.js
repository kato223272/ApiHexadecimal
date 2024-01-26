"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlProductoRepositorio = void 0;
const Producto_1 = require("../Dominio/Producto");
const Producto_model_1 = __importDefault(require("./models/Producto.model"));
class SqlProductoRepositorio {
    addProducto(id_Producto, nombre_Producto, numeroTel_Producto) {
        throw new Error("Method not implemented.");
    }
    deleteProducto(id_Producto) {
        throw new Error("Method not implemented.");
    }
    addproducto(id_producto, nombre_producto, precio_producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productoCreado = yield Producto_model_1.default.create({ id_producto, nombre_producto, precio_producto });
                return new Producto_1.Producto(productoCreado.id_producto, productoCreado.nombre_producto, productoCreado.precio_producto);
            }
            catch (error) {
                console.log("Error en sqlproducto.repositorio", error);
                return null;
            }
        });
    }
    deleteproducto(id_producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productoEliminado = yield Producto_model_1.default.findOne({ where: { id_producto: id_producto } });
                if (productoEliminado) {
                    yield productoEliminado.destroy();
                    return new Producto_1.Producto(productoEliminado.id, productoEliminado.nombre_producto, productoEliminado.precio_producto);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("Error en sqlproducto.repositorio en Deleteproducto", error);
                return null;
            }
        });
    }
}
exports.SqlProductoRepositorio = SqlProductoRepositorio;
