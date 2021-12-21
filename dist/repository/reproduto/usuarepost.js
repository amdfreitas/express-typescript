"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const dbconnect_1 = __importDefault(require("../dbconnect"));
const tbuser = {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    userpasswd: {
        type: sequelize_1.DataTypes.STRING,
    },
    useremail: {
        type: sequelize_1.DataTypes.STRING,
    }
};
const option = {
    freezeTableName: true,
    tableName: 'Usuario',
    timestamp: true,
    createdAt: 'datAcriacao',
    updatedAt: 'datAtualizacao',
    version: 'versao'
};
exports.UserModel = dbconnect_1.default.define('Usuario', tbuser, option);
