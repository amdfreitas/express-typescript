import {Request, Response} from 'express'
import { ProdutoModel } from "../repository/reproduto/produtrepost";
import Mproduto from '../model/modelproduto';

 class ProndutoController {

	async listaAll (req: Request, resp: Response){
	
	 await ProdutoModel.findAll()
			.then(data => resp.json(data))
			.catch(erro => resp.json({'mensagem':'nenhum registro  encontrado'}));
	}
	
	async produtCreate(req: Request, resp: Response){
		const {id,nome,preco,descrip} = req.body	
		const produt = new Mproduto(id,nome,preco,descrip)

	 await ProdutoModel.create(produt)
	    	.then(data => resp.status(201).json(data))
		    .catch(error => console.log(error));
	}

	async pesquesid (req: Request, resp: Response){
		const id = req.params.id;
		await ProdutoModel.findOne({
			where: {
				"id":id
			}
		})
		.then(data => resp.status(201).json(data))
		.catch(error => console.log(error));
	}
}


export default new ProndutoController();