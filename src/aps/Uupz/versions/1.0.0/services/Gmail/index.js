// Listado e Instancias de Paquetes, Dependencias y Herramientas de la aplicación
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const fs = require("fs");

// Inicialización de Módulo Global - Provider para uso del Archivo de forma externa
module.exports = Provider = async(application, service, email, template, response) => {
    // Evaluamos la existencia del directorio del TEMPLATE a utilizar
    if (!fs.existsSync("./src/apps/" + application.name + "/versions/" + application.version + "/services/" + service.provider + "/templates/" + template.name)) {
        // Composición de la respuesta ante la petición del script solicitado para el desarrollador
        response.status(200).jsonp({
            code: 200,
            status: "OK",
            type: "success",
            data: `No fue posible determinar la existencia del directorio ${template.name} para uso del TEMPLATE dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
        });
    }
    // Evaluamos la existencia del directorio de la VERSION a utilizar
    if (!fs.existsSync("./src/apps/" + application.name + "/versions/" + application.version + "/services/" + service.provider + "/templates/" + template.name + "/versions/" + template.version)) {
        // Composición de la respuesta ante la petición del script solicitado para el desarrollador
        response.status(200).jsonp({
            code: 200,
            status: "OK",
            type: "success",
            data: `No fue posible determinar la existencia del directorio ${template.version} para uso de la VERSIÓN dentro del repositorio, ponte en contacto con un administrador para poder continuar.`
        });
    }
    // Instanciamos los datos de autentificación para uso de Google API dentro de gmail
    const oAuth2Client = new google.auth.OAuth2(service.parameters.clientId, service.parameters.clientSecret, service.parameters.redirectUri);
    // Solicitamos la última versión disponible del Access Token perteneciente al API de Gmail
    oAuth2Client.setCredentials({ refresh_token: service.parameters.refreshToken });
    // Aplicamos el uso de la función Try/Catch para el procesamiento del envío de e-mail
    try {
        // Instanciamos el uso del archivo index.js para utilizar el template de email acorde ante la petición
        const Template = require("./templates/" + template.name + "/versions/" + template.version + "/index.js");
        // Solicitud y Ejecución del Metódo - Template | Permitiendonos realizar la carga del formato del e-maila enviar
        email.html = Template(email, template);
        // Reemplazamos la última versión disponible del Access Token perteneciente al API de Gmail
        service.parameters.accessToken = await oAuth2Client.getAccessToken();
        // Creación e Instancia del Objeto - Transport de NodeMailer para uso del envío de e-mail
        const transporter = nodemailer.createTransport({
            service: service.provider,
            secure: service.parameters.secure,
            auth: {
                type: service.parameters.type,
                user: service.parameters.user,
                clientId: service.parameters.clientId,
                clientSecret: service.parameters.clientSecret,
                refreshToken: service.parameters.refreshToken,
                accessToken: service.parameters.accessToken
            }
        });
        // Creación e Instancia del Objeto - Options de NodeMailer para uso del envío de e-mail
        const mailerOptions = {
            from: email.from,
            to: email.to,
            cc: [
                "info@uupz.com.mx"
            ],
            bcc: [
                "notificaciones.uupz@gmail.com"
            ],
            subject: email.subject,
            html: email.html
        };
        // Generamos el envío de e-mail previamente parámetrizado con el uso de NodeMailer
        await transporter.sendMail(mailerOptions);
    } catch (error) {
        // Composición de la respuesta ante la petición del script solicitado para el desarrollador
        response.status(200).jsonp({
            code: 200,
            status: "OK",
            type: "error",
            data: "Se presentó un error al generar el proceso de envío de e-mail; " + error
        });
    }
};
