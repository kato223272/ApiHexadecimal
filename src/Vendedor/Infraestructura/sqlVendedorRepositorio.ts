import { Vendedor } from "../Dominio/Vendedor";
import { VendedorRepositorio } from "../Dominio/VenderdorRepositorio";
import VendedorModel from "./models/Vendedor.model";

export class SqlVendedorRepositorio implements VendedorRepositorio{
    async addVendedor(id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number): Promise<Vendedor | null> {
        try {
            const VendedorCreado = await VendedorModel.create({id_Vendedor,nombre_vendedor, numeroTel_vendedor});
            return new Vendedor(VendedorCreado.id_Vendedor, VendedorCreado.nombre_vendedor, VendedorCreado.numeroTel_vendedor)
        } catch (error) {
            console.log("Error en sqlVendedor.repositorio", error);
            return null;
        }
    }

    async deleteVendedor(id_Vendedor: number): Promise<Vendedor | null> {
        try {
            const VendedorEliminado = await VendedorModel.findOne({where: {id_Vendedor:id_Vendedor}});
            if(VendedorEliminado){
                await VendedorEliminado.destroy();
                return new Vendedor(VendedorEliminado.id,VendedorEliminado.nombre_vendedor, VendedorEliminado.numeroTel_vendedor);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlVendedor.repositorio en DeleteVendedor", error);
            return null;
        }
    }
}