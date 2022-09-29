const express = require('express');
const app = express();
const Users = require('./models/Users.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Bem Vindo ao Desafio Prático da Linx');
});

app.get('/usuarios', async (req, res) => {
  res.send(Users);
});

app.get('/ativo', async (req, res) => {
  const users = await Users.findAll({
    where: {Status: 'approved'}
  });
  res.json(users);
});

app.get('/cancelado', async (req, res) => {
  const users = await Users.findAll({
    where: {Status: 'not'}
  });
  res.json(users);
});

app.post('/cadastrar', async (req, res) => {
  const user = req.body;
  await Users.create({
    name: req.body.name,
    email: req.body.email,
    Product: req.body.Product,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    Payments_method: req.body.Payments_method,
    Number: req.body.Number,
    Holder_document: req.body.Holder_document,
    cvv: req.body.cvv,
    Status: req.body.Status,
    Code: req.body.Code,
    Adress: req.body.Adress,
    Number_house: req.body.Number_house,
    Zip_code: req.body.Zip_code,
    City: req.body.City,
    State: req.body.State,
    Country: req.body.Country,
  }).then(() =>{
        console.log(user)
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
  
});

app.put('/atualizar', async (req, res) => {
  //console.log(req.body);
  await Users.modified({
    name: req.body.name,
    email: req.body.email,
    Product: req.body.Product,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    Payments_method: req.body.Payments_method,
    Number: req.body.Number,
    Holder_document: req.body.Holder_document,
    cvv: req.body.cvv,
    Status: req.body.Status,
    Code: req.body.Code,
    Adress: req.body.Adress,
    Number_house: req.body.Number_house,
    Zip_code: req.body.Zip_code,
    City: req.body.City,
    State: req.body.State,
    Country: req.body.Country,
  })
    .then(() => {
      return res.json({
        erro: false,
        mensagem: 'Usuário atualizado com sucesso!',
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Usuário não atualizado!',
      });
    });

  res.sendStatus(200);
});

  app.put('/atualizarstatus', async (req, res) => {
  //console.log(req.body);
  await Users.modified({
    name: req.body.name,
    email: req.body.email,
    Product: req.body.Product,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    Payments_method: req.body.Payments_method,
    Number: req.body.Number,
    Holder_document: req.body.Holder_document,
    cvv: req.body.cvv,
    Status: req.body.Status,
    Code: req.body.Code,
    Adress: req.body.Adress,
    Number_house: req.body.Number_house,
    Zip_code: req.body.Zip_code,
    City: req.body.City,
    State: req.body.State,
    Country: req.body.Country,
  })
    .then(() => {
      return res.json({
        erro: false,
        mensagem: 'Usuário atualizado com sucesso!',
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Usuário não atualizado!',
      });
    });

  res.sendStatus(200);
});
 

app.delete('/excluir/:id', async (req, res) => {
    const idRota = req.params.id
    Users.destroy({
        where: {id: idRota}
    })
  res.sendStatus(200);
});

app.listen(8085, () => {
  console.log('Servidor iniciado na porta 8085: http://localhost:8085');
});