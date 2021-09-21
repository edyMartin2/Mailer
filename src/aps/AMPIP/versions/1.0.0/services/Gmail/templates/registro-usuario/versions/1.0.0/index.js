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
                        <tr style="font-family: Arial, Helvetica, sans-serif; color: #333333; margin: 0 auto; text-align: center; max-width: 660px; padding: 15px 10px;">
                            <td style="background-color: #ffffff; text-align: center; padding: 15px 10px;">
                                <img style="text-align: center;" src="https://irp.cdn-website.com/55677075/dms3rep/multi/logo-ampip-transaccionales.png" alt="ampip" width="200" height="64" border="0" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span style="color: #212121;">
                                        <strong>
                                            <em>
                                                <span style="font-size: 14pt;">Estimado <span style="text-decoration: underline;">` + content.dataSubject.user_name + `</span></span>
                                            </em>
                                        </strong>
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span style="font-size: 12pt; color: #333333; text-align: center;">Bienvenido al sistema <span style="color: #00afb7;"><em><strong>Sección Socios AMPIP</strong></em></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span style="font-size: 12pt; color: #333333;"> A continuación se desglozaran tus datos de acceso para poder ingresar al sistema, por favor considera cambiar tu contraseña lo antes posible ya que es de forma temporal.</span>
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
                <table style="border-collapse: collapse; width: 50%; height: 54px; border-style: solid; margin-left: auto; margin-right: auto;" border="0" cellspacing="2" cellpadding="2">
                    <thead>
                        <tr style="height: 50px; text-align: center; padding: 10px 0;">
                            <td style="text-align: center; height: 50px; width: 98.791%;" colspan="2" scope="col">
                                <span style="color: #00afb7; padding: 10px 0; height: 25px;">
                                    <strong>
                                        <span style="font-size: 14pt;">Datos de Usuario</span>
                                    </strong>
                                </span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="height: 18px;">
                            <td style="width: 49.3955%; height: 50px; text-align: right;">
                                <span style="color: #212121;">Usuario:&nbsp;</span>
                            </td>
                            <td style="width: 49.3955%; height: 50px;">
                                <span style="color: #212121;">&nbsp;` + content.dataUser.email + `</span>
                            </td>
                        </tr>
                        <tr style="height: 18px;">
                            <td style="width: 49.3955%; height: 50px; text-align: right;">
                                <span style="color: #212121;">Contraseña:&nbsp;</span>
                            </td>
                            <td style="width: 49.3955%; height: 50px;">
                                <span style="color: #212121;">&nbsp;` + content.dataUser.password_temporal + `</span>
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
