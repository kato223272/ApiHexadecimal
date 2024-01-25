import { SqlVendedorRepositorio } from "./sqlVendedorRepositorio";
import { AddVendedorCaseUse } from "../Aplicacion/AddVendedorCaseUse";
import { AddVendedorController } from "./controller/addVendedorController";

import { DeleteVendedorCaseUse } from "../Aplicacion/deleteVendedorCaseUse";
import { DeleteVendedorController } from "./controller/deleteVendedorController";

export const sqlVendedorRepositorio = new SqlVendedorRepositorio();
export const addVendedorCasoUso = new AddVendedorCaseUse(sqlVendedorRepositorio);
export const addVendedorController = new AddVendedorController(addVendedorCasoUso);

export const deleteVendedorCasoUso = new DeleteVendedorCaseUse(sqlVendedorRepositorio);
export const deleteVendedorController = new DeleteVendedorController(deleteVendedorCasoUso);