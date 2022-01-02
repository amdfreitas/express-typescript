"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = __importDefault(require("../config/default"));
const sequelize_1 = require("sequelize");
let db = null;
if (process.env.NODE_ENV === "PRODUCT") {
    db = new sequelize_1.Sequelize(default_1.default.produc_mysql.banco_dados, default_1.default.produc_mysql.user, default_1.default.produc_mysql.pass, {
        dialect: "mysql",
        host: default_1.default.produc_mysql.host,
        port: default_1.default.dev_mysql.port
    });
}
else {
    db = new sequelize_1.Sequelize(default_1.default.dev_mysql.banco_dados, default_1.default.dev_mysql.user, default_1.default.dev_mysql.pass, {
        dialect: "mysql",
        host: default_1.default.dev_mysql.host,
        port: default_1.default.dev_mysql.port
    });
}
exports.default = db;
