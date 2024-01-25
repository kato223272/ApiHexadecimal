import { Sequelize } from "sequelize-typescript";
import dotenv  from "dotenv"; 

dotenv.config();

export const sequelize = new Sequelize ({
    host:process.env.HOST,
    database:process.env.DATABASE,
    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    port:3000
});

export async function InicializarServidor(){

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

