import  { DataTypes,Model}  from "sequelize";
import db from '../dbconnect';

const tbuser = {

  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  username: {
    type: DataTypes.STRING,
  },
  userpasswd:{
		type: DataTypes.STRING,
  },
  useremail:{
		type: DataTypes.STRING,
	}
}

const option = {
      freezeTableName: true,
      tableName:'Usuario',
      timestamp:true,
      createdAt:'datAcriacao',
      updatedAt:'datAtualizacao',
      version:'versao'
}

export const UserModel = db.define('Usuario',tbuser,option)