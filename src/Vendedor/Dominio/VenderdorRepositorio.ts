import { Vendedor} from "./Vendedor";

export interface  VendedorRepositorio {
    addVendedor(id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number):Promise<Vendedor | null>;
    deleteVendedor(id_Vendedor: number): Promise<Vendedor | null>;
}