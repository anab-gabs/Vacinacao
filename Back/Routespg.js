
const Route = require("express").Router();
const Pessoa = require("./Controllerpg/Controllerps");
const UniSaude = require("./Controllerpg/ControlleUS");
const Atendimento=require("./Controllerpg/ControlleAgend")
//pessoa
Route.post("/cadastrarpg", Pessoa.cadastrar);
Route.get("/lerpg",Pessoa.ler);
Route.get("/lerUmpg/:cpf",Pessoa.lerUm);
Route.put("/atualizarpg/:cpf",Pessoa.atualizar);
Route.delete("/excluirpg/:cpf",Pessoa.excluir);

//unidadeSaude
Route.post("/cadastrarUnidadepg", UniSaude.cadastrar);
Route.get("/lerUnidadepg",UniSaude.ler);
Route.get("/listarUnidadepg/:id",UniSaude.lerUm);
Route.put("/atualizarUnidadepg/:id",UniSaude.atualizar);
Route.delete("/excluirUnidadepg/:id",UniSaude.excluir);

//agendamento
Route.post("/CadastrarAtendimentopg/:pessoaid/:unidadeid", Atendimento.cadastrar);
Route.get("/lerAgendamentospg",Atendimento.ler);
Route.get("/listarAgendamentopg/:id",Atendimento.lerUm);
Route.put("/atualizarAgendamentopg/:id",Atendimento.atualizar);
Route.delete("/excluirAgendamentopg/:id",Atendimento.excluir);


module.exports=Route
