const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Camila Sayuri',
        imagem: 'https://avatars.githubusercontent.com/u/130701996?v=4',
        minibio: 'Desenvolvedora e Analista de E-commerce'

    })
}

function mostrarPorta () {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostrarPorta)