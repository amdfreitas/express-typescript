"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const default_1 = __importDefault(require("../config/default"));
const http_1 = __importDefault(require("http"));
//import dbconnect from '../repository/dbconnect';
const servidor = http_1.default.createServer(server_1.default);
if (process.env.NODE_ENV === 'PRODUCT') {
    servidor.listen(default_1.default.server.produc_porta, async () => {
        //await dbconnect.sync();
        console.log('teste de servidor product', default_1.default.server.produc_porta);
    });
}
else {
    servidor.listen(default_1.default.server.dev_porta, async () => {
        //await dbconnect.sync();
        console.log('teste de server dev ', default_1.default.server.dev_porta);
    });
}
