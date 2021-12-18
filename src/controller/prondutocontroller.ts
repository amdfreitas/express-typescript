import {Request, Response} from 'express'
import { ProdutoModel } from "../repository/reproduto/produtrepost";

 class ProndutoController {

	async listaAll (req: Request, resp: Response){
	
	 await ProdutoModel.findAll()
						 .then(data => resp.json(data))
						 .catch(erro => resp.json({'mensagem':'nenhum registro  encontrado'}));

	}
	
	async produtCreate(req: Request, resp: Response){
				  const produto={
		 'id':210,
		 'nome':'Anderson asdf',
		 'preco':23,
		 'descricao':'asdfsdfsdf'
	 }

	 await ProdutoModel.create(produto)
	    .then(data => resp.status(201).json(data))
		 .catch(error => console.log(error));
		 

	}
}


export default new ProndutoController();