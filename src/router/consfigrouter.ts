import {Router} from 'express'
import routProduto  from './produto/routeprodut'

const rotaConfig =  Router();

rotaConfig.use('/produto',routProduto);

export default rotaConfig;