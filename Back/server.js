

const express = require('express');

const app = express();
const port = 3000;
const rotas= require('./rotas')
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:faesa123@localhost:27017/Vacinacao1?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
db.once('open', function() {
    console.log("Banco de Dados Mongo conectado com sucesso");
});


app.use(express.json());

app.use(express.urlencoded( {extended:false}));

app.get('/',function(req,res){
    res.send('Hello,World')
 })
app.use('/api',rotas)

app.listen(port,() =>{
    console.log('servidor rodando na porta',port)
})