// Inicialización de Módulo Global - Template para uso del Archivo de forma externa
module.exports = Template = (email, template) => {
    // Listado e Instancias de Índices para un mejor tratamiento de información de parte del REQUEST
    const content = template.content;
    // Inicialización y Declaración de Variables Globales
    var tBody_DatosContacto = '';
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
    // Inicialización e Infrestructura HTML para uso del Template - Test
    var html = `<Hello>`;
    // Retorno Final ante uso de la función en ejecución
    return html.toString();
};
