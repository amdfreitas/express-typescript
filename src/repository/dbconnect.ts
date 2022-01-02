import s  from '../config/default';
import {Sequelize} from  'sequelize';
let db =null;

        if (process.env.NODE_ENV === "PRODUCT"){

					db = new Sequelize(
			   			s.produc_mysql.banco_dados,
                        s.produc_mysql.user,
                        s.produc_mysql.pass,  
                       { 
                        dialect: "mysql",   
                        host:s.produc_mysql.host,
                        port:s.dev_mysql.port
                           
                       }
		);
                }else {
                  
	 				db = new Sequelize(
				  		s.dev_mysql.banco_dados,
                        s.dev_mysql.user,
                        s.dev_mysql.pass,    
                       { 
                           dialect:"mysql",
                           host:s.dev_mysql.host,
                           port:s.dev_mysql.port
                       }
					);
 }


export default db!;