# Vacinacao
###PESSOAS

###Listar uma pessoa
### http://18.116.115.13:3000/api/lerUmpg/:cpf

###listar todos
###http://18.116.115.13:3000/api/lerpg

###excluir pessoa
###http://18.116.115.13:3000/api/excluirpg/:cpf

###cadastrar pessoa
###http://18.116.115.13:3000/api/cadastrarpg
{
		"pessoa_nome":"testa",
	"cpf_pessoa":"58745485",
	"data_nascimento":"05/05/2000",
	"telefone_pessoa":"27998448560",
	"grupo_prioritario":false,
	"endereco_pessoa":"Rua da casa dele",
	"email_pessoa":"joanas@gmail.com"

	}

###Atualizar pessoa
###http://18.116.115.13:3000/api/atualizarpg/58745485

{
		"pessoa_nome":"joao",
	"data_nascimento":"05/05/2000",
	"telefone_pessoa":"27998448560",
	"grupo_prioritario":false,
	"endereco_pessoa":"Rua da casa dele",
	"email_pessoa":"joanas@gmail.com"

	}


###UNIDADE DE SAUDE

###listar uma unidade
###http://18.116.115.13:3000/api/listarUnidadepg/:id

###listar todas unidades
###http://18.116.115.13:3000/api/lerUnidadepg

###Atualizar unidade
###http://18.116.115.13:3000/api/atualizarUnidadepg/2
{
	  "nome_unidade":"Atualizando" ,
       "descricao_unidade" :"lotado" ,
        "endereco_unidade":" Rua da serra" ,
        "telefone_unidade": "40028922",
        "email_unidade":"unidade@gmail.com",
        "latlong_unidade":"280240,81049"
	      
	
}

###excluir unidade
###http://18.116.115.13:3000/api/excluirUnidadepg/:id

### cadastrar unidade
### http://18.116.115.13:3000/api/cadastrarUnidadepg

{
	  "nome_unidade":"Jacaraipe" ,
       "descricao_unidade" :"lotado" ,
        "endereco_unidade":" Rua da serra" ,
        "telefone_unidade": "40028922",
        "email_unidade":"unidade@gmail.com",
        "latlong_unidade":"280240,81049"
	      
	
}


###AGENDAMENTO
###CADASTRAR AGENDAMENTO
###http://18.116.115.13:3000/api/CadastrarAtendimentopg/id/id
{
	"data_hora_agendamento": "2021/04/06",
	"necessidades_especiais": true,
	"observacoes_agendamento": " Risco alto"

	
}

###listar um agendamento
###http://18.116.115.13:3000/api/listarAgendamentopg/id


###listar todas as unidades
###http://18.116.115.13:3000/api/lerAgendamentospg

###excluir agendamento
###http://18.116.115.13:3000/api/excluirAgendamentopg/id

###atualizar agendamento
###http://18.116.115.13:3000/api/atualizarAgendamentopg/5


{
	"data_hora_agendamento": "2021/04/06",
	"necessidades_especiais": true,
	"observacoes_agendamento": " TESTE"

	
}







###MONGO

###PESSOAS

###Listar uma pessoa
### http://18.116.115.13:3000/api/lerUm/:cpf

###listar todos
###http://18.116.115.13:3000/api/ler

###excluir pessoa
###http://18.116.115.13:3000/api/excluir/:cpf

###cadastrar pessoa
###http://18.116.115.13:3000/api/cadastrar
{
	"nomePessoa":"CABA",
	"CpfPessoa":"58745485",
	"dt_nascPessoa":"05/05/2000",
	"TelPessoa":"27998448560",
	"grupo_Prio_Pessoa":false,
	"EnderecoPessoa":"Rua da casa dele",
	"emailPessoa":"joanas@gmail.com"

	}
###Atualizar pessoa
###http://18.116.115.13:3000/api/atualizar/:cpf

{
	"nomePessoa":"testando",
	"CpfPessoa":"58745487",
	"dt_nascPessoa":"05/05/2000",
	"TelPessoa":"27998448560",
	"grupo_Prio_Pessoa":false,
	"EnderecoPessoa":"Rua da casa dele",
	"emailPessoa":"joanas@gmail.com"
	
	}


###UNIDADE DE SAUDE

###listar uma unidade
###http://18.116.115.13:3000/api/listarUnidade/:id

###listar todas unidades
###http://18.116.115.13:3000/api/lerUnidade

###Atualizar unidade
###http://18.116.115.13:3000/api/atualizarUnidade/id
{
	  "nomeUnidade":" sao lucas" ,
       "descricaoUnidade" :"SuperLotacao" ,
        "enderecoUnidade":" Rua da serra" ,
        "TelUnidade": "40028922",
        "emailUnidade":"unidade@gmail.com",
        "LatLongUnidade":"280240,81049" 
}

###excluir unidade
###http://18.116.115.13:3000/api/excluirUnidade/:id

### cadastrar unidade
### http://18.116.115.13:3000/api/cadastrarUnidade

{
	  "nomeUnidade":" Unidade teste" ,
       "descricaoUnidade" :"lotado" ,
        "enderecoUnidade":" Rua da serra" ,
        "TelUnidade": "40028922",
        "emailUnidade":"unidade@gmail.com",
        "LatLongUnidade":"280240,81049",
	       "Pessoas":"606ce407c76b9e1854e54fc4",
	      "_Agendamento":"606ce72c6c433d3244ff3b0b"
	
	
}


###AGENDAMENTO
###CADASTRAR AGENDAMENTO
###http://18.116.115.13:3000/api/CadastrarAtendimento
{
	"dt_hora_agendamento": "2021/04/06",
	"necessidadeEsp_agendamento": true,
	"Obs_agendamento": " Risco alto",
	"_Unidade":"606ce7096c433d3244ff3b0a",
	"Pessoas":"606ce407c76b9e1854e54fc4"
	
	
}

###listar um agendamento
###http://18.116.115.13:3000/api/listarAgendamento/id


###listar todas as unidades
###http://18.116.115.13:3000/api/lerAgendamentos

###excluir agendamento
###http://18.116.115.13:3000/api/excluirAgendamento/id

###atualizar agendamento
###http://18.116.115.13:3000/api/atualizarAgendamento/id



{
	"dt_hora_agendamento": "2021/04/06",
	"necessidadeEsp_agendamento": true,
	"Obs_agendamento": "Atualizando"
	
	
}
