// Inicialización de Módulo Global - Template para uso del Archivo de forma externa
module.exports = Template = (email, template) => {
    // Listado e Instancias de Índices para un mejor tratamiento de información de parte del REQUEST
    const content = template.content;
    // Inicialización e Infrestructura HTML para uso del Template - Test
    var html = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>` + template.name.toUpperCase() + ` | ` + template.version + `</title>
            <style type="text/css">
                * { cursor: default; -webkit-font-smoothing: antialiased; }
                body { margin: 0; padding: 0; min-width: 100%; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; }
                table { border-spacing: 0; color: #333333; font-family: Arial, sans-serif; }
                img { border: 0; }
                .wrapper { width: 100%; table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
                .webkit { max-width: 800px; }
                .outer { margin: 0 auto; width: 100%; max-width: 800px; }
                .full-width-image img { width: 100%; max-width: 800px; height: auto; }
                .inner { padding: 10px; }
                p { margin: 0; padding-bottom: 10px; }
                .h1 { font-size: 21px; margin: 0; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; }
                .h2 { font-size: 18px; margin: 0; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; }
                .h2 { font-size: 15px; margin: 0; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; }
                .one-column .contents { text-align: left; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; }
                .one-column p { font-size: 14px; margin-bottom: 10px; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; }
                .two-column { text-align: center; font-size: 0; }
                .two-column .column { width: 100%; max-width: 300px; display: inline-block; vertical-align: top; }
                .contents { width: 100%; }
                .two-column .contents { font-size: 14px; text-align: left; }
                .two-column img { width: 100%; max-width: 280px; height: auto; }
                .two-column .text { padding-top: 10px; }
                .three-column { text-align: center; font-size: 0; padding-top: 10px; padding-bottom: 10px; }
                .three-column .column { width: 100%; max-width: 200px; display: inline-block; vertical-align: top; }
                .three-column .contents { font-size: 14px; text-align: center; }
                .three-column img { width: 100%; max-width: 180px; height: auto; }
                .three-column .text { padding-top: 10px; }
                .img-align-vertical img { display: inline-block; vertical-align: middle; }
                @media only screen and (max-device-width: 480px) {
                    table[class=hide],
                    img[class=hide],
                    td[class=hide] { display: none !important; }
                    .contents1 { width: 100%; }
                    .contents1 { width: 100%; }
                }
            </style>
            <!--[if (gte mso 9)|(IE)]>
            <style type="text/css">
                table {border-collapse: collapse !important;}
            </style>
            <![endif]-->
        </head>
        <body style="margin: 0; padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0; min-width: 100%; background-color: #ffffff;">
            <center class="wrapper" style="width: 100%; table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #ffffff;">
                <table style="border-collapse: collapse; width: 50%; height: 54px; border-style: solid; margin-left: auto; margin-right: auto;" border="0" cellspacing="2" cellpadding="2">
                    <thead>
                        <tr style="font-family: Arial, Helvetica, sans-serif; color: #212121; margin: 0 auto; text-align: center; max-width: 660px; padding: 15px 10px;">
                            <td style="background-color: #ffffff; text-align: center; padding: 15px 10px;">
                                <img style="text-align: center;" src="https://irp.cdn-website.com/55677075/dms3rep/multi/logo-ampip-transaccionales.png" alt="ampip" width="200" height="64" border="0" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span style="font-size: 12pt; color: #212121;">Estimado <span style="color: #00afb7;"><b>Administrador del sistema</b></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span style="font-size: 12pt; color: #212121;">El usuario <span style="color: #00afb7;"><b>` + content.dataSubject.user_name + `</b></span> ha solicitado el proceso de <span style="color: #e03e2d;"><b>recuperación de contraseña</b></span>, por favor inicia sesión dentro del sistema para terminar el proceso adecuadamente.</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span style="font-size: 12pt; color: #212121;">A continuación encontrará los <span style="color: #00afb7;"><b>detalles generales</b></span> de su cuenta para poder proceder adecuadamente;</span>
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
                <table style="border-collapse: collapse; width: 50%; height: 42px; margin-left: auto; margin-right: auto;" border="0" cellspacing="2" cellpadding="2">
                    <tbody>
                        <tr style="height: 50px;">
                            <th style="width: 10.0078%; text-align: center; vertical-align: middle; background-color: #f9f9f9; height: 21px;">
                                <span style="color: #00afb7;">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">Identificación</span>
                                    </span>
                                </span>
                            </th>
                            <th style="width: 47.6094%; text-align: center; vertical-align: middle; background-color: #f9f9f9; height: 21px;">
                                <span style="color: #00afb7;">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">Usuario</span>
                                    </span>
                                </span>
                            </th>
                            <th style="width: 15.6989%; text-align: center; vertical-align: middle; background-color: #f9f9f9; height: 21px;">
                                <span style="color: #00afb7;">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">Email</span>
                                    </span>
                                </span>
                            </th>
                            <th style="width: 24.4387%; text-align: center; vertical-align: middle; background-color: #f9f9f9; height: 21px;">
                                <span style="color: #00afb7;">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">Contraseña</span>
                                    </span>
                                </span>
                            </th>
                        </tr>
                        <tr style="height: 50px;">
                            <td style="width: 10.0078%; height: 50px; text-align: right;">
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;">` + content.dataUser.id + `</span>
                                </span>
                            </td>
                            <td style="width: 47.6094%; height: 50px; text-align: left;">
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;">` + content.dataUser.user + `</span>
                                </span>
                            </td>
                            <td style="width: 15.6989%; height: 50px; text-align: center;">
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;">` + content.dataUser.email + `</span>
                                </span>
                            </td>
                            <td style="width: 24.4387%; height: 50px; text-align: center;">
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;">` + content.dataUser.password + `</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style="border-collapse: collapse; width: 50%; height: 54px; border-style: solid; margin-left: auto; margin-right: auto;" border="0" cellspacing="2" cellpadding="2">
                    <thead>
                        <tr style="font-family: Arial, Helvetica, sans-serif; background-color: #00afb7; color: #ffffff; margin: 20px auto; text-align: center; padding: 5px 10px;">
                            <td>
                                <p style="text-align: center; font-size: 11px; padding: 5px 0;">&copy;2021 México. Todos los derechos reservados.</p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </center>
        </body>
        </html>
    `;
    // Retorno Final ante uso de la función en ejecución
    return html.toString();
};
