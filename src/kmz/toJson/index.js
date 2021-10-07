// Para leer el archivo .kmz
const parseKMZ = require('parse2-kmz');
// Para guardar los datos en un archivo .json
const fs = require('fs');

module.exports = async(server, path) => {
   await parseKMZ.toJson(path)
        .then((data) => {
            server.json(data)
        })
        .catch((e) => {
            console.error(e);
        });
    
}