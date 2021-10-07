const parseKML = require('parse-kml');

module.exports = async(server, path)=>{
  await parseKML
  .toJson(path)
  .then(res => {
    server.json({message: res})
  })
  .catch(console.error)
}