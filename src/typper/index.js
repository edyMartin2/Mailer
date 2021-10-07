const toJsonKmz = require("../kmz/toJson")
const toJsonKml = require("../kml/toJson")
const axios = require("axios")

const UploadImageToBilda = (path, server) => {
    

    const url = 'https://api.duda.co/api/sites/multiscreen/resources/14557a2c/upload';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Basic ZDIzOTYwYmY1MTpaRnlqQTVzVzdYSW8='
        },
        body: JSON.stringify([
            {
                resource_type: 'IMAGE',
                src: 'https://res.cloudinary.com/ampipspace/image/upload/v1632766807/AMPIP/qine70gn1ageqqn4ymvv.png'
            }
        ])
    };

    axios(url, options)
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}


module.exports = (file, fileUpload, server) => {
    let typeByName = file.name.toString();
    let type = typeByName.split(".")

    switch (type[1]) {
        case "kml":
            file.mv(__dirname + '/files/kml/' + file.name, (err) => {
                if (err) {
                    server.json({ message: "error al cargar archivo" })
                } else {
                    toJsonKml(server, __dirname + '/files/kml/' + file.name)
                }
            })
            break
        case "kmz":
            file.mv(__dirname + '/files/kmz/' + file.name, (err) => {
                if (err) {
                    server.json({ message: "error al cargar archivo" })
                } else {
                    toJsonKmz(server, __dirname + '/files/kmz/' + file.name)
                }
            })
            break
        case "png":
            file.mv(__dirname + '/files/images/' + file.name, (err) => {
                if (err) {
                    server.json({ message: "error al cargar archivo" })
                } else {
                    UploadImageToBilda(__dirname + '/files/images/' + file.name, server);
                }
            })
            break
        default:
            return false
    }


}