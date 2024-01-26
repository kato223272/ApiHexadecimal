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
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const Base_1 = require("./Conexion/Base");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
// app.use('/Vendedor',vendedorRouter);
// app.use('/Producto', ProductoRouter);
function inicializarServidor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, Base_1.InicializarBaseDatos)();
            app.listen(3000, () => {
                signale.success("El servidor está corriendo en el puerto 3000");
            });
        }
        catch (error) {
            signale.error("Se produjo un error al inicializar el servidor", error);
        }
    });
}
inicializarServidor();
