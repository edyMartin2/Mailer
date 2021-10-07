const fs = require('fs');
const unzipper = require('unzipper')

module.exports = (file, name, path, fileUpload, server) => {
    var path = __dirname + '/layers/' + name + '.kmz'
    file.mv(path, (err) => {
        if (err) {
            console.log("-->", err)
            server.json({ message: err })
        } else {
            x = fs.createReadStream(path)
                .pipe(unzipper.Extract({
                    path: __dirname + '/kml/' + name
                }
                ));

            setTimeout(function () {
                fs.rename(__dirname + '/kml/' + name + '/doc.kml', __dirname + '/kml/' + name + '.kml', (err) => {
                    if (err) {
                        if (err.code === 'EXDEV') {
                            copy();
                            console.log("err")
                        } else {
                            console.log("err")
                        }
                        console.log("err")
                        return;
                    } else{
                        try {
                            fs.unlinkSync(__dirname + '/kml/' + name)
                            server.json({ message: "se movio el archivo" })
                        } catch (err){
                            server.json({ message: "se movio el archivo eliminar residuos" })
                        }
                    }

                })
            }, 3000);

            
            
        }
    })


}