import { Column, DataType, Model, Table  } from "sequelize-typescript";

@Table({
    tableName:"producto",
    timestamps:false
})


class Producto extends Model{
@Column({
    type: DataType.INTEGER,
    primaryKey: true
}) public id_producto!: number;

@Column({
    type: DataType.STRING,
    primaryKey: false
}) public nombre_producto!: string;
@Column({
    type: DataType.FLOAT,
    primaryKey: false
})  public precio_producto!: number;

}
export default Producto;