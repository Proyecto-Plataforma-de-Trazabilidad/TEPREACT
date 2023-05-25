const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Endpoint para el inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Realizar la consulta a la base de datos para verificar las credenciales
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      if (results.length > 0) {
        // Las credenciales son válidas, el inicio de sesión es exitoso
        res.json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Las credenciales son inválidas
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    }
  });
});

// Iniciar el servidor en un puerto específico
app.listen(3000, () => {
  console.log('Servidor API en funcionamiento en el puerto 3000');
});
