class Mproduto{

	codig: number
	nome: string;
	preco: number;
	descrip: string;

	constructor(codig: number, nome: string ,preco:number,descrip:string){
		this.codig = codig;
		this.nome = nome;
		this.preco = preco;
		this.descrip = descrip;
	}

}

export default Mproduto;