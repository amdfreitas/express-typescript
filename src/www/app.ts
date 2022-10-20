import app from '../server';
import s from '../config/default';
import http from 'http';
//import dbconnect from '../repository/dbconnect';

const servidor = http.createServer(app);

if (process.env.NODE_ENV === 'PRODUCT') {
  servidor.listen(s.server.produc_porta, async () => {
    //await dbconnect.sync();
    console.log('teste de servidor product', s.server.produc_porta);
  });
} else {
  servidor.listen(s.server.dev_porta, async () => {
    //await dbconnect.sync();
    console.log('teste de server dev ', s.server.dev_porta);
  });
}
