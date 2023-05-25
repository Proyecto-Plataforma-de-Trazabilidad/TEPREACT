const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "aws-dbinstance.cagy0earnfql.us-east-2.rds.amazonaws.com",
  user: 'admin',
  password: 'Te-k3li-L!',
  database: 'apeajaldb',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});
