module.exports = (file, name, path, fileUpload, server) => {
    file.mv(__dirname + '/kml/' + name + '.kml', (err) => {
        if (err) {
            server.json({ message: err })
        } else {
            server.json({ message: "se movio el archivo" })
        }
    })
}