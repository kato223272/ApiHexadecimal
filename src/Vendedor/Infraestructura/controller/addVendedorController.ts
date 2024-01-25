import { Request, response } from "express";
import {AddVendedorCaseUse} from "../../Aplicacion/AddVendedorCaseUse"

export class AddVendedorController{
    constructor(readonly addVendedorCaseUse: AddVendedorCaseUse){}
    async run(req:Request, res:Response){
        try {

            let id_Vendedor = req.body.id_Vendedor;
            let nombre_vendedor = req.body.nombre_vendedor;
            let numeroTel_vendedor = req.body.numeroTel_vendedor;
            console.log(req.body)

            let vendedorCreado = await this.addVendedor
            CaseUse.run(id_Vendedor, nombre_vendedor, numeroTel_vendedor);
        } catch (error) {
            
        }
    }
}