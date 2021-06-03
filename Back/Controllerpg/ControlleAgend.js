const atendimento = require("../Modelspg/ModeloAgend");
const Pessoa = require("../Modelspg/Modelops");
const Unidade = require("../Modelspg/ModeloUS");

atendimento.belongsTo(Pessoa, {
  foreignKey: "Idpessoa",
  as: "pessoas",
  onDelete:"RESTRICT",
  onUpdate:"CASCADE"
});

atendimento.belongsTo(Unidade, {
  foreignKey: "Idunidade",
  as: "unidade",
  onDelete:"RESTRICT",
  onUpdate:"CASCADE"
});

async function cadastrar(req, res) {
  try {
    const pessoaid = req.params.pessoaid;
    const unidadeId = req.params.unidadeid;
    const dt = req.body.data_hora_agendamento;
    const findpessoa = await Pessoa.findByPk(pessoaid);
    const findunidade = await Unidade.findByPk(unidadeId);

    const pesquisa = await atendimento.findOne({
      where: { data_hora_agendamento: dt },
    });
    if (!findunidade && !findpessoa) {
      res
        .status(400)
        .json({ message: "Ops! Náo localizamos a Unidade e a pessoa! " });
    }
    if (!findunidade) {
      res.status(400).json({ message: "Erro! Unidade de Saude nao localizada " });
    } else if (!findpessoa) {
      res.status(400).json({ message: "Ops! Pessoa nao localizada no sistema " });
    }

    if (!pesquisa) {
      const resp = await atendimento.create({
        Idpessoa: pessoaid,
        Idunidade: unidadeId,
        data_hora_agendamento: dt,
        necessidades_especiais: req.body.necessidades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
      });
      res.status(201).json(resp);
    } else {
      res.status(400).json({ message: "Data em Utilizacao " });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro! Nao foi Possivel cadastrar a pessoa informada!",
    });
  }
}

async function ler(req, res) {
  try {
    const resp = await atendimento.findAll({
      include: [
        {
          association: "pessoas",
        },
        {
          association: "unidade",
        },
      ],
    });
    if (!resp) {
      res.status(400).json({ message: " Erro ao listar " });
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops! Erro detectado!" });
  }
}

async function lerUm(req, res) {
  try {
    const id = req.params.id;
    const resp = await atendimento.findOne({
      where: {
        id: id,
      },
    });
    if (!resp) {
      res.status(400).json({
        message: `Erro ao tentar localizar esse atendimento pela data informada! ${new Date(
          dt
        ).toLocaleString("pt-Br")}`,
      });
      console.log(resp);
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Ops!  Erro" });
  }
}

async function atualizar(req, res) {
  try {
    const id = req.params.id;
    const resp = await atendimento.update(
      {
        data_hora_agendamento: req.body.data_hora_agendamento,
        necessidades_especiais: req.body.necessidades_especiais,
        observacoes_agendamento: req.body.observacoes_agendamento,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (resp == false) {
      res.status(400).json({ message: "Nao foi possivel atualizar o atendimento! Tente novamente mais tarde" });
    } else {
      res.status(200).json({ message: "Dados Atualizados com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ops!Erro" });
    console.log(error);
  }
}

async function excluir(req, res) {
  try {
    const id = req.params.id;

    const resp = await atendimento.destroy({
      where: {
        id:id,
      },
    });

    if (!resp) {
      res.status(400).json({ message: "Nao foi possivel excluir o atendimento" });
      console.log(resp)
    }else{
      res.status(200).json({ message: "Atendimento removido" });
    }

  } catch (error) {
    res.status(500).json({ message: "Erro! Nao foi posisvel Remover atendimento" });
    console.log(error);
  }
}

module.exports = {
cadastrar,
ler,
lerUm,
atualizar,
excluir,
};