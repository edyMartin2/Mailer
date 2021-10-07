const express = require("express");
const fs = require("fs");
const router = express.Router();
const fileUpload = require("express-fileupload")
const typper = require("../typper")

router.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    limits: { fileSize: 50 * 1024 * 1024 },
}));


router.post('/send-email', (request, response) => {
    // Listado e Instancias para configuración de Encabezados para la Respuesta solicitada
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    // Evaluamos el índice de la Petición - BODY para determinar si se encuentra bien parámetrizada ya que en caso de no ser asi retornaremos la respuesta de la petición
    if (request.body.mailerbar === undefined) {
        // Composición de la respuesta ante la petición del script solicitado para el desarrollador
        response.status(200).jsonp({
            code: 200,
            status: "OK",
            type: "success",
            data: "Para hacer uso correcto de la aplicación es necesario visitar la documentación oficial del proyecto en https://github.com/spacebarmx/MailerBar"
        });
    } else {
        // Listado e Instancias de Índices para un mejor tratamiento de información de parte del REQUEST
        const application = request.body.mailerbar.application;
        const service = request.body.mailerbar.service;
        const email = request.body.mailerbar.email;
        const template = request.body.mailerbar.template;
        // Selección de Casos - Uso de Aplicación ha utilizar
        switch (application.name) {
            // Instancia para uso de la aplicación - Uupz
            case 'Uupz':
                // Evaluamos la existencia del directorio de la APLICACIÓN a utilizar
                if (!fs.existsSync("./src/apps/" + application.name)) {
                    // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                    response.status(200).jsonp({
                        code: 200,
                        status: "OK",
                        type: "success",
                        data: `No fue posible determinar la existencia del directorio ${application.name} para uso de la APLICACIÓN dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
                    });
                }
                // Evaluamos la existencia del directorio de la VERSION a utilizar
                if (!fs.existsSync("./src/apps/" + application.name + "/versions/" + application.version)) {
                    // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                    response.status(200).jsonp({
                        code: 200,
                        status: "OK",
                        type: "success",
                        data: `No fue posible determinar la existencia del directorio ${application.version} para uso de la VERSIÓN dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
                    });
                }
                // Evaluamos la existencia del directorio del SERVICIO a utilizar
                if (!fs.existsSync("./src/apps/" + application.name + "/versions/" + application.version + "/services/" + service.provider)) {
                    // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                    response.status(200).jsonp({
                        code: 200,
                        status: "OK",
                        type: "success",
                        data: `No fue posible determinar la existencia del directorio ${service.provider} para uso del SERVICIO dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
                    });
                }
                break;
            // Instancia para uso de la aplicación - AMPIP
            case 'AMPIP':
                // Evaluamos la existencia del directorio de la APLICACIÓN a utilizar
                if (!fs.existsSync("./src/apps/" + application.name)) {
                    // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                    response.status(200).jsonp({
                        code: 200,
                        status: "OK",
                        type: "success",
                        data: `No fue posible determinar la existencia del directorio ${application.name} para uso de la APLICACIÓN dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
                    });
                }
                // Evaluamos la existencia del directorio de la VERSION a utilizar
                if (!fs.existsSync("./src/apps/" + application.name + "/versions/" + application.version)) {
                    // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                    response.status(200).jsonp({
                        code: 200,
                        status: "OK",
                        type: "success",
                        data: `No fue posible determinar la existencia del directorio ${application.version} para uso de la VERSIÓN dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
                    });
                }
                // Evaluamos la existencia del directorio del SERVICIO a utilizar
                if (!fs.existsSync("./src/apps/" + application.name + "/versions/" + application.version + "/services/" + service.provider)) {
                    // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                    response.status(200).jsonp({
                        code: 200,
                        status: "OK",
                        type: "success",
                        data: `No fue posible determinar la existencia del directorio ${service.provider} para uso del SERVICIO dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
                    });
                }
                break;
            // Instancia para uso de la aplicación - Default
            default:
                // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                response.status(200).jsonp({
                    code: 200,
                    status: "OK",
                    type: "success",
                    data: `No fue posible determinar el esquema de procesamiento ante la aplicación ${application.name}, ponte en contacto con un administrador para poder continuar.`
                });
                break;
        }
        // Instanciamos el uso del archivo index.js para utilizar el servicio de email acorde ante la petición
        const Provider = require("../apps/" + application.name + "/versions/" + application.version + "/services/" + service.provider + "/index.js");
        // Solicitud y Ejecución del Metódo - Provider | Permitiendonos realizar el envío de e-mail de forma dinámica
        Provider(application, service, email, template, response)
            // Inicialización y Aplicación del Callback - THEN para procesar la respuesta ante el script en ejecución
            .then((result) => {
                // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                response.status(200).jsonp({ code: 200, status: "OK", type: "success", data: `Se ha envíado exitosamente la notificación por correo eléctronico` });
                // Composición de la respuesta ante la petición del script solicitado para la consola
                console.log('Provider | THEN | Result: success');
            })
            // Inicialización y Aplicación del Callback - CATCH para procesar la respuesta ante el script en ejecución
            .catch((error) => {
                // Composición de la respuesta ante la petición del script solicitado para el desarrollador
                response.status(200).jsonp({ code: 200, status: "OK", type: "error", data: `Se presentó un error al realizar la notificación por correo eléctronico` });
                // Composición de la respuesta ante la petición del script solicitado para la consola
                console.log('Provider | CATCH | Error: ', error);
            });
    }
});

router.post("/up", (req, res) => {
    if (req.files) {
        let googleFile = req.files.google
        typper(googleFile, fileUpload, res);
    } else {
        res.json({ message: "No hay archivos para subir" })
    }
})

module.exports = router;
