const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Camila Sayuri',
        imagem: 'https://avatars.githubusercontent.com/u/130701996?v=4',
        minibio: 'Desenvolvedora e Analista de E-commerce',
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',   
        minibio: 'Desenvolvedora e instrutora',
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP', 
        minibio: 'CEO & Founder da PrograMaria',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostrarPorta () {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostrarPorta)