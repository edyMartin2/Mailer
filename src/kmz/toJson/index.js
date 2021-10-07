// Para leer el archivo .kmz
const parseKMZ = require('parse2-kmz');
// Para guardar los datos en un archivo .json
const fs = require('fs');
const unzipper = require('unzipper')
module.exports = async (server, path) => {
    await parseKMZ.toJson(path)
        .then((data) => {
            console.log("parseKMZ", data);
            server.json(data)
        })
        .catch((e) => {
            console.error(e);
        });


    fs.createReadStream(path)
        .pipe(unzipper.Extract({ path: __dirname + 'archivo.kml' }));
}