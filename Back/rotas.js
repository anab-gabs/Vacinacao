
const express = require('express');
const pessoa = require('./controle/controlePessoa');
const unidade = require('./controle/controleUnidade')
const agendamento = require ('./controle/controleAgendamento')

const rotas = express.Router();
rotas.post('/cadastrar',pessoa.cadastrar);
rotas.get('/ler',pessoa.ler);
rotas.delete('/excluir/:cpf',pessoa.excluir);
rotas.get('/ler/:cpf',pessoa.lerUm);
rotas.put('/pessoa/:cpf',pessoa.Atualizar);

rotas.post('/unidade/cadastrar',unidade.cadastrar);
rotas.get('/unidade/ler',unidade.ler);
rotas.delete('/unidade/excluir/:id',unidade.excluir);
rotas.get('/unidade/ler/:id',unidade.lerUm);
rotas.put('/unidade/atualizar/:id',unidade.Atualizar);


rotas.post('/agendamento/cadastrar',agendamento.cadastrar);
rotas.get('/agendamento/ler',agendamento.ler);
rotas.delete('/agendamento/excluir/:id',agendamento.excluir);
rotas.get('/agendamento/ler/:id',agendamento.lerUm);
rotas.put('/agendamento/atualizar/:id',agendamento.Atualizar);

module.exports = rotas;