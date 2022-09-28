const express = require('express');
const app = express();
const Users = require('./models/Users.js');

app.use(express.json());

app.get("/",async (req, res) => {
    res.send("Bem Vindo ao Desafio Prático da Linx");
});

app.get('/clientes', async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);
    const user = req.body
    // console.log(user)
    await Users.create(user)
    console.log(user)
    // .then(() =>{
    //     console.log(user)
    //     return res.json({
    //         erro: false,
    //         mensagem: "Usuário cadastrado com sucesso!"
    //     });
    // }).catch(() =>{
    //     return res.status(400).json({
    //         erro:true,
    //         mensagem: "Erro: Usuário não cadastrado com sucesso!"
    //     });
    // });

    res.send("Página Cadastrar - Linx");
});

app.put("/atualizar", async (req, res) => {
    //console.log(req.body);
    await Users.modified(req.body)
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() =>{
        return res.status(400).json({
            erro:true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });

    res.sendStatus(200);
});

app.delete("/excluir", async (req, res) => {
    res.sendStatus(200);
});

app.listen(8085, () => {
    console.log("Servidor iniciado na porta 8085: http://localhost:8085");
});