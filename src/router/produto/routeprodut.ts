import {Router} from 'express'
import prondutocontroller from '../../controller/produtcontroller';

const rotasProduto =  Router();

rotasProduto.get('/listeall',prondutocontroller.listaAll);
rotasProduto.get('/pesquesid/:id', prondutocontroller.pesquesid);
rotasProduto.post('/create', prondutocontroller.produtCreate);

export default rotasProduto;
