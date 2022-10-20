"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produtcontroller_1 = __importDefault(require("../../controller/produtcontroller"));
const rotasProduto = (0, express_1.Router)();
rotasProduto.get('/listeall', produtcontroller_1.default.listaAll);
rotasProduto.get('/pesquesid/:id', produtcontroller_1.default.pesquesid);
rotasProduto.post('/create', produtcontroller_1.default.produtCreate);
exports.default = rotasProduto;
