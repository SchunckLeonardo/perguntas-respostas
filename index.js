const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const modelPerguntas = require('./database/Pergunta')
const modelRespostas = require('./database/Resposta')

//Database
connection
    .authenticate()
    .then(() => console.log("Conexão com o banco de dados completa"))
    .catch(err => console.log(err))

//EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/', (req, res) => {
    modelPerguntas.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    })
        .then(perguntas => {
            res.render('index', {
                perguntas
            })
        })
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao

    modelPerguntas.create({
        title: titulo,
        description: descricao
    }).then(
        res.redirect('/')
    )

})

app.get('/pergunta/:id', (req, res) => {
    const id = req.params.id
    modelPerguntas.findOne({
        where: { id: id }
    }).then(pergunta => {
        if(pergunta != undefined) {
            modelRespostas.findAll({
                where: {
                    questionId: pergunta.id
                },
                order: [
                    ['id', 'DESC']
                ]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta,
                    respostas
                })
            })
        } else {
            res.redirect('/')
        }
    })
})

app.post('/responder', (req, res) => {
    let body = req.body.corpo
    let questionId = req.body.pergunta
    modelRespostas.create({
        body,
        questionId
    }).then(() => {
        res.redirect(`/pergunta/${questionId}`)
    })
})

app.listen(8080, () => {
    console.log('Aplicação rodando')
})