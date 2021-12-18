import  { DataTypes,Model}  from "sequelize";
import db from '../dbconnect';


const tbprodut = {

  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  nome: {
    type: DataTypes.STRING,
  },
  descricao:{
		type: DataTypes.STRING,
  },
  preco:{
		type: DataTypes.FLOAT(10,2),
	}
}

const option = {
      freezeTableName: true,
      tableName:'Produto',
      timestamp:true,
      createdAt:'datAcriacao',
      updatedAt:'datAtualizacao',
      version:'versao'
}

export const ProdutoModel = db.define('Produto',tbprodut,option)

/*
interface UserInstance extends Model {
  id: number;
  name: string;
}

const UserModel = db.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  name: {
    type: DataTypes.STRING,
  },
  descricao:{
		type: DataTypes.STRING,
  },
  prec:{
		type: DataTypes.FLOAT(10,2),
	},
});

*/



