"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtrepost_1 = require("../repository/reproduto/produtrepost");
class ProndutoController {
    async listaAll(req, resp) {
        await produtrepost_1.ProdutoModel.findAll()
            .then(data => resp.json(data))
            .catch(erro => resp.json({ 'mensagem': 'nenhum registro  encontrado' }));
    }
    async produtCreate(req, resp) {
        const produto = {
            'id': 210,
            'nome': 'Anderson asdf',
            'preco': 23,
            'descricao': 'asdfsdfsdf'
        };
        await produtrepost_1.ProdutoModel.create(produto)
            .then(data => resp.status(201).json(data))
            .catch(error => console.log(error));
    }
}
exports.default = new ProndutoController();
