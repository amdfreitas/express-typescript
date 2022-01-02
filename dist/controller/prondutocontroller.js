"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtrepost_1 = require("../repository/reproduto/produtrepost");
const Mproduto_1 = __importDefault(require("../model/Mproduto"));
class ProndutoController {
    async listaAll(req, resp) {
        await produtrepost_1.ProdutoModel.findAll()
            .then(data => resp.json(data))
            .catch(erro => resp.json({ 'mensagem': 'nenhum registro  encontrado' }));
    }
    async produtCreate(req, resp) {
        const { id, nome, preco, descrip } = req.body;
        const produt = new Mproduto_1.default(id, nome, preco, descrip);
        await produtrepost_1.ProdutoModel.create(produt)
            .then(data => resp.status(201).json(data))
            .catch(error => console.log(error));
    }
}
exports.default = new ProndutoController();
