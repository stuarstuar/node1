
const http = require('http')
const url = require('url')
const fs = require('fs')

http
    .createServer(function (req, res) {
       
        const params = url.parse(req.url, true).query
        const nombre = params.nombre
        const contenido = params.contenido
       
        if (req.url.includes('/crear')) {
            fs.writeFile(nombre, contenido, () => {
                res.write('Archivo creado con éxito!')
                res.end()
            })
        }
     
        if (req.url.includes('/leer')) {
            fs.readFile(nombre, (err, data) => {
                res.write(data)
                res.end()
            })
        }
    })
    .listen(8081, () => console.log('Escuchando el puerto 8081'))
