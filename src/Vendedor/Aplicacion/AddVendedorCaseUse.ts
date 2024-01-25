 import {Vendedor} from "../Dominio/Vendedor";
 import {VendedorRepositorio} from "../Dominio/VenderdorRepositorio";

 export class AddVendedorCaseUse{

    constructor(readonly vendedorRepositorio: VendedorRepositorio){}

    async run(id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number ):Promise<Vendedor | null>{
        try {
            const addVendedor=await this.vendedorRepositorio.addVendedor(id_Vendedor, nombre_vendedor, numeroTel_vendedor)
            return addVendedor
            
        } catch (error) {
            console.log("error en addVendedorCaseUse");
            return null;
        }
    }
    
 } 