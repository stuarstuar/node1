console.log("wena wena")

const http = require('http')
const url = require('url')


http // creamos el server 
    .createServer(function (req, res) {

        const params = url.parse(req.url, true).query
        console.log(params)

        // arreglo de usuarios 

        let users = [{
            rut: '123456789',
            nombre: 'Pat',
            apellido: 'Morita',
        }, ]

        // si el rekueszt tiene usarios 

        if (req.url.includes('/usuarios')) {
         
            let usuario = users.find((u) => u.rut == params.rut)

            usuario
            ? res.write(`
            Nombre: ${usuario.nombre} -
            Apellido: ${usuario.apellido}`)
            : res.write('No existe ninguna persona registrada con ese RUT')
            }
            res.end()
            
    })
    .listen(8080, () => console.log('Escuchando el puerto 8080'))
