// Listado e Instancias de Paquetes, Dependencias y Herramientas de la aplicación
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/routes.js");

// Inicialización e Instancia de la aplicación
const app = express();

// Declaración e Instancia para la configuración principal de la librería CORS
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
};

// Configuración general de la aplica
app.set('hostname', 'http://13.91.36.30');
/*
app.set('hostname', 'http://localhost');
*/
app.set('port', 3002);
// Metódos iniciales para uso de la aplicación
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Listado e Instancias de recursos internos de la aplicación
app.use(routes);

// Inicialización principal de la aplicación
app.listen(app.get('port'), () => {
    // Impresión de Meta datos para depuración y control de flujo de la aplicación
    console.log('server started <==> ' + app.get('hostname') + ':' + app.get('port'));
});
