const Pessoa = require("../Modelspg/Modelops");
const agendamento=require("../Modelspg/ModeloAgend")


Pessoa.hasOne(agendamento,{
  foreignKey:"Idpessoa",
  as:"pessoa"
})




async function cadastrar(req, res) {
  try {
    const cpf = req.body.cpf_pessoa;
    const pesquisa = await Pessoa.findOne({ where: { cpf_pessoa: cpf } });
    if (!pesquisa) {
      const resp = await Pessoa.create({
        pessoa_nome: req.body.pessoa_nome,
        cpf_pessoa: cpf,
        data_nascimento: req.body.data_nascimento,
        telefone_pessoa: req.body.telefone_pessoa,
        grupo_prioritario: req.body.grupo_prioritario,
        endereco_pessoa: req.body.endereco_pessoa,
        email_pessoa: req.body.email_pessoa,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Ops! Essa pessoa ja existe no sistema! " });
    }
  } catch (error) {
    res.status(500).json({
      message: " Erro ao Cadastrar",
    });
    console.log(error)
  }
}

async function ler(req, res) {
  try {
    const resp = await Pessoa.findAll();
    if (!resp) {
      res.status(400).json({ message: " Erro ao tentar listar " });
    }
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ops!  Erro" });
  }
}

async function lerUm(req, res) {
  try {
    const cpf = req.params.cpf;
    const resp = await Pessoa.findOne({
      where: {
        cpf_pessoa: cpf,
      },
    });
    if (!resp) {
      res.status(400).json({ message: "Erro ao tentar localizar cpf" });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops!  Erro" });
  }
}

async function atualizar(req, res) {
  try {
    const cpf = req.params.cpf;
    const resp = await Pessoa.update(
      {
        pessoa_nome: req.body.pessoa_nome,
        data_nascimento: req.body.data_nascimento,
        telefone_pessoa: req.body.telefone_pessoa,
        grupo_prioritario: req.body.grupo_prioritario,
        endereco_pessoa: req.body.endereco_pessoa,
        email_pessoa: req.body.email_pessoa,
      },
      {
        where: {
          cpf_pessoa: cpf,
        },
      }
    );
    if (resp == false) {
      res.status(400).json({ message: "Erro ao tentar Atualizar dados" });
    } else {
      res.status(200).json({ message: "Dados Atualizados" });
      console.log(resp)
    }
  } catch (error) {
    res.status(500).json({ message: "Ops!  Erro" });
  }
}

async function excluir(req, res) {
  try {
    const cpf = req.params.cpf;

    const resp = await Pessoa.destroy({
      where: {
        cpf_pessoa: cpf,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Erro ao tentar Remover pessoa" });
    }
    res.status(200).json({ message: "Pessoa  Removida " });
  } catch (error) {
    res.status(500).json({ message: "Erro ao Remover pessoa" });
  }
}

module.exports = {
cadastrar,
ler,
lerUm,
atualizar,
excluir,
};