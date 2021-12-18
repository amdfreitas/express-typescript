"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produtrepost_1 = require("../repository/reproduto/produtrepost");
const rota = (0, express_1.Router)();
rota.get('/listall', async (reqs, resp) => {
    const produto = {
        'nome': 'adfasdfsdf',
        'preco': 23,
        'descricao': 'asdfsdfsdf'
    };
    await produtrepost_1.ProdutoModel.create(produto)
        .then(() => resp.status(201))
        .catch(error => console.log(error));
});
rota.post('/create', (reqs, resp) => {
});
exports.default = rota;
