"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoModel = void 0;
const sequelize_1 = require("sequelize");
const dbconnect_1 = __importDefault(require("../dbconnect"));
const tbprodut = {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
    },
    preco: {
        type: sequelize_1.DataTypes.FLOAT(10, 2),
    }
};
const option = {
    freezeTableName: true,
    tableName: 'Produto',
    timestamp: true,
    createdAt: 'datAcriacao',
    updatedAt: 'datAtualizacao',
    version: 'versao'
};
exports.ProdutoModel = dbconnect_1.default.define('Produto', tbprodut, option);
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
