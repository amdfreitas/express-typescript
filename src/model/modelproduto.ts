class Mproduto{

	id: number
	nome: string;
	preco: number;
	descrip: string;

	constructor(id: number, nome: string ,preco:number,descrip:string){
		this.id = id;
		this.nome = nome;
		this.preco = preco;
		this.descrip = descrip;
		
	}

}

export default Mproduto;