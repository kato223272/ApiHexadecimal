import express from 'express';
import { addVendedorController,deleteVendedorController } from './Dependencies';


export const vendedorRouter = express.Router();

vendedorRouter.post('/agregarVendedor', addVendedorController.run.bind(addVendedorController));
vendedorRouter.delete('/eliminarVendedor', deleteVendedorController.run.bind(deleteVendedorController));