console.log("wena wena")

const http = require('http')

http
    .createServer(function (req, res) {

        console.log(req.url)
        const url = req.url
        if (url == '/hoy') {

            res.write(`${new Date()}`)
        }

        res.end()
    })
    .listen(8080, () => console.log('Escuchando el puerto 8080'))
