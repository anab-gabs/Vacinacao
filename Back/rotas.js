
const express = require('express');
const pessoa = require('./controle/controlePessoa');
const unidade = require('./controle/controleUnidade')
const agendamento = require ('./controle/controleAgendamento')

const rotas = express.Router();
rotas.post('/cadastrar',pessoa.cadastrar);
rotas.get('/ler',pessoa.ler);
rotas.delete('/excluir/:cpf',pessoa.excluir);
rotas.get('/lerUm/:cpf',pessoa.lerUm);
rotas.put('/atualizar/:cpf',pessoa.Atualizar);

rotas.post('/cadastrarUnidade',unidade.cadastrar);
rotas.get('/lerUnidade',unidade.ler);
rotas.delete('/excluirUnidade/:id',unidade.excluir);
rotas.get('/listarUnidade/:id',unidade.lerUm);
rotas.put('/atualizarUnidade/:id',unidade.Atualizar);


rotas.post('/CadastrarAtendimento',agendamento.cadastrar);
rotas.get('/lerAgendamentos',agendamento.ler);
rotas.delete('/excluirAgendamento/:id',agendamento.excluir);
rotas.get('/listarAgendamento/:id',agendamento.lerUm);
rotas.put('/atualizarAgendamento/:id',agendamento.Atualizar);

module.exports = rotas;