import app from  '../server';
import s  from '../config/default';
import  http  from  'http';
import dbconnect from '../repository/dbconnect';

const servidor = http.createServer(app);

servidor.listen(s.server.porta, async () =>{
	await dbconnect.sync();
	console.log('teste de servidor ');
});