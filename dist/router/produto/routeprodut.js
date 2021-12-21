"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prondutocontroller_1 = __importDefault(require("../../controller/prondutocontroller"));
const rotasProduto = (0, express_1.Router)();
rotasProduto.get('/listeall', prondutocontroller_1.default.listaAll);
rotasProduto.post('/create', prondutocontroller_1.default.produtCreate);
exports.default = rotasProduto;
