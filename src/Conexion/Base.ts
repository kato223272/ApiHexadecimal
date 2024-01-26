import { Sequelize } from "sequelize-typescript";
import dotenv  from "dotenv"; 
import Producto from '../Producto/Infraestructura/models/Producto.model';
import vendedor from "../Vendedor/Infraestructura/models/Vendedor.model";

dotenv.config();

export const sequelize = new Sequelize ({
    dialect:"mysql",
    database:process.env.DATABASE,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port:3306,
    models:[Producto,vendedor]
});

export async function InicializarBaseDatos(){

try {
    console.log(process.env.HOST)
    await sequelize.authenticate();
    console.log("se logró conectar a la base de datos");
    await sequelize.sync({force:false});

} catch (error) {
    console.log("error al conectar la base de datos", error);
    process.exit(1);
}

};

