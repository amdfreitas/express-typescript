import {Router} from 'express'
import prondutocontroller from '../../controller/prondutocontroller';




const rotasProduto =  Router();

rotasProduto.get('/listeall',prondutocontroller.listaAll)
rotasProduto.post('/create', prondutocontroller.produtCreate);

export default rotasProduto;
