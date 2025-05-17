const express = require('express');
const path = require('path');
const WebSocket = require('ws');

//Layout con las cosas que quiero que tenga cada ejs
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 8080;

// Motor de vistas si usas EJS (puedes cambiar a pug/handlebars/html si prefieres)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..','views'));
app.use(expressLayouts);
app.set('layout', 'layout'); //nombre del layout sin el .ejs

// Servir archivos estáticos (html, js, css)
app.use(express.static(path.join(__dirname, '..', 'public')));

//Ruta principal y titulo del index
app.get('/', (req, res) => {
  res.render('index', { title: '100 Mercadólogos Dijeron' });
});

// Ruta controlador
app.get('/controlador', (req, res) => {
    res.send('Pantalla de Controlador');
});

// Ruta jugadores
app.get('/publico', (req, res) => {
    res.send('Pantalla de Jugadores');
});

// Iniciar servidor HTTP
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Crear servidor WebSocket con el mismo servidor HTTP
const wss = new WebSocket.Server({ server });

// Aquí manejaremos conexiones WebSocket
wss.on('connection', (ws) => {
  console.log('Nuevo cliente conectado');

  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);
    // Aquí luego manejaremos los mensajes que envíen los clientes (control, público, jugadores)
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});


//Conexión a base de datos
const sequelize =require('./config/database');
const Ronda = require('./models/Ronda');
const Respuesta = require('./models/Respuesta');
const Resultado = require('./models/Resultado');
const Equipo = require('./models/Equipo');


sequelize.authenticate()
  .then(() => {
    console.log ('Conexión a la base de datos exitosa.');
    return sequelize.sync(); 
  })
  .catch((err) => {
    console.error(' Error al conectar a la base de datos:', err);
  });



