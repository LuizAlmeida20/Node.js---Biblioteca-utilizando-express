import express from "express";
const app = express(); //todas as funcoes de express estão agora na variavel app
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Diario de um banana"
    },
    {
        id: 2,
        titulo: "Percy Jackson"
    }
]

// app.get('/', function(req, res){
//     res.send("Curso de Node.js")
// })

app.get('/livros', function(req, res){
    res.json(livros)
})

app.post('/livros', function(req, res){
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

export default app;