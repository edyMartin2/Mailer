const fs = require("fs");


module.exports = (name, nickname) => {
    fs.rename(`${__dirname}/kml/${name}.kml`, `${__dirname}/kml/${nickname}.kml`, (e) => {
        if (e) console.log(e)
        else console.log("listo")
    });
}
