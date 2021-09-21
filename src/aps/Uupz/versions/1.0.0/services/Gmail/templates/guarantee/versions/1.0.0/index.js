// Inicialización de Módulo Global - Template para uso del Archivo de forma externa
module.exports = Template = (email, template) => {
    // Listado e Instancias de Índices para un mejor tratamiento de información de parte del REQUEST
    const content = template.content;
    // Inicialización y Declaración de Variables Globales
    var tBody_DatosContacto = '',
        tBody_DetallesGarantia = '',
        tBody_DetallesIncidencia = '';
    // Iteración dinámica de datos para la construcción del contenido de la Tabla - Datos del Contacto
    Object.entries(content.dataContact).forEach(([key, value]) => {
        // Concatenación dinámica para la construcción de los detalles del contacto
        tBody_DatosContacto += `
            <tr>
                <td width="20%"><span style"margin: 0 !important;">` + key + `:</span></td>
                <td width="80%"><span style"margin: 0 !important;">` + value + `</span></td>
            </tr>
        `;
    });
    // Iteración dinámica de datos para la construcción del contenido de la Tabla - Datos de la Empresa
    Object.entries(content.dataGuarantee).forEach(([key, value]) => {
        // Concatenación dinámica para la construcción de los detalles de la empresa
        tBody_DetallesGarantia += `
            <tr>
                <td width="20%"><span style"margin: 0 !important;">` + key + `:</span></td>
                <td width="80%"><span style"margin: 0 !important;">` + value + `</span></td>
            </tr>
        `;
    });
    // Iteración dinámica de datos para la construcción del contenido de la Tabla - Datos de la Empresa
    Object.entries(content.dataIncidence).forEach(([key, value]) => {
        // Concatenación dinámica para la construcción de los detalles de la empresa
        tBody_DetallesIncidencia += `
            <tr>
                <td width="20%"><span style"margin: 0 !important;">` + key + `:</span></td>
                <td width="80%"><span style"margin: 0 !important;">` + value + `</span></td>
            </tr>
        `;
    });
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
        <body style="margin: 0; padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0; min-width: 100%; background-color: #f3f2f0;">
            <center class="wrapper" style="width: 100%; table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f3f2f0;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f3f2f0;" bgcolor="#f3f2f0;">
                    <tr>
                        <td width="100%">
                            <div class="webkit" style="max-width: 800px; margin: 0 auto;">
                                <!--[if (gte mso 9)|(IE)]>
                                <table width="800" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0;" >
                                    <tr>
                                        <td style="padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0;" >
                                <![endif]-->
                                <table class="outer" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; margin: 0 auto; width: 100%; max-width:800px;">
                                    <tr>
                                        <td style="padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left:0;">
                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td height="15">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td height="15">&nbsp;</td>
                                                    </tr>
                                            </table>
                                            <table class="one-column" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; max-width: 800px; bgcolor="#f3f2f0">
                                                <tr>
                                                    <td align="center">
                                                        <img src="https://i.postimg.cc/pXKmKj4r/Banner-EMails-Test-01.png" alt="Banner E-mails Test" width="100%" style="max-width: 800px; max-height: 300px;" />
                                                    </td>
                                                </tr>
                                            </table>
                                            <table class="one-column" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; border-left: 1px solid #e8e7e5; border-right: 1px solid #e8e7e5; border-bottom: 1px solid #e8e7e5; border-radius: 15px;" bgcolor="#FFFFFF">
                                                <tr>
                                                    <td align="justify" style="padding: 20px;">
                                                        <p style="color: #262626; font-size: 22px; text-align: justify; font-family: Verdana, Geneva, sans-serif; padding-bottom: 5px !important; margin: 0 !important;">` + email.from + `</p>
                                                        <p style="color: #787777; font-size: 14px; text-align: justify; font-family: Verdana, Geneva, sans-serif; font-weight: 700;">` + content.dataSubject["Notificación"] + `</p>
                                                        <p style="color: #121212; font-size: 12px; text-align: justify; font-family: Verdana, Geneva, sans-serif; padding: 0 !important; margin: 0 !important; line-height: 20px;">` + ((content.dataContact["Nombre"] !== undefined) ? ('Estimado <b><i>' + content.dataContact["Nombre"]) : ('Estimated <b><i>' + content.dataContact["Name"])) + `</i></b>, ` + content.dataSubject["Descripción"].toLowerCase() + `</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding: 20px;">
                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                            <thead>
                                                                <tr>
                                                                    <th colspan="2"><p style="color: #262626; font-size: 18px; text-align: center; font-family: Verdana, Geneva, sans-serif; margin: 0 !important;">` + ((content.dataContact["Nombre"] !== undefined) ? ("Detalles del Contacto") : ("Contact Details")) + `</p></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>` + tBody_DatosContacto + `</tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding: 20px;">
                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                            <thead>
                                                                <tr>
                                                                    <th colspan="2"><p style="color: #262626; font-size: 18px; text-align: center; font-family: Verdana, Geneva, sans-serif; margin: 0 !important;">` + ((content.dataContact["Nombre"] !== undefined) ? ("Detalles de la Garantía") : ("Warranty Details")) + `</p></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>` + tBody_DetallesGarantia + `</tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding: 20px;">
                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                            <thead>
                                                                <tr>
                                                                    <th colspan="2"><p style="color: #262626; font-size: 18px; text-align: center; font-family: Verdana, Geneva, sans-serif; margin: 0 !important;">` + ((content.dataContact["Nombre"] !== undefined) ? ("Detalles de la Incidencia") : ("Incident Details")) + `</p></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>` + tBody_DetallesIncidencia + `</tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                <tr>
                                                    <td height="15">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td class="two-column" style="padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0; text-align: center; font-size: 0;">
                                                        <!--[if (gte mso 9)|(IE)]>
                                                            <table width="100%" style="border-spacing: 0;" >
                                                                <tr>
                                                                    <td width="50%" valign="top" style="padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0;" >
                                                        <![endif]-->
                                                        <div class="column" style="width: 100%; max-width: 450px; display: inline-block; vertical-align: top;">
                                                            <table class="contents" style="border-spacing: 0; width: 100%;">
                                                                <tr>
                                                                    <td align="center" style="padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0; max-width: 150px;">
                                                                        <a href="https://www.space.bar/"><img src="https://i.postimg.cc/d1n8wNTZ/Logotipo-Space-Bar.png" alt="" style="border-width: 0; width: 100%; height: auto; display: block;" /></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding-top: 0; padding-bottom: 0; padding-right: 0; padding-left: 0;">
                                                                        <p style="color: #262626; font-size: 12px; text-align: center; font-family: Verdana, Geneva, sans-serif; padding: 0 !important;"><b>` + ((content.dataContact["Nombre"] !== undefined) ? ("Todos los derechos reservados") : ("All rights reserved")) + ` © ` + new Date().getFullYear() + `</b></p>
                                                                        <p style="color: #262626; font-size: 10px; text-align: center; font-family: Verdana, Geneva, sans-serif; padding: 0 !important;">Template: ` + template.name + ` | Version: ` + template.version + `</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <!--[if (gte mso 9)|(IE)]>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        <![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="15">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if (gte mso 9)|(IE)]>
                                        </td>
                                    </tr>
                                </table>
                                <![endif]-->
                            </div>
                        </td>
                    </tr>
                </table>
            </center>
        </body>
        </html>
    `;
    // Retorno Final ante uso de la función en ejecución
    return html.toString();
};
