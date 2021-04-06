
const Pessoa = require("../modelo/pessoaModelo");

async function cadastrar(req,res){ 
    
    const pessoa = new Pessoa ({
        
        nomePessoa: req.body.nomePessoa,
        CpfPessoa: req.body.CpfPessoa,
        dt_nascPessoa: req.body.dt_nascPessoa,
        TelPessoa: req.body.TelPessoa,
        grupo_Prio_Pessoa:req.body.grupo_Prio_Pessoa,
        EnderecoPessoa:  req.body.EnderecoPessoa,
        emailPessoa: req.body.emailPessoa,
        _Unidade:req.body._Unidade,
        _Agendamento:req.body._Agendamento
    }).save();
    res.send("Pessoa cadastrada com sucesso!")

};

async function ler(req,res){ 
    
    const pessoa = await Pessoa.find( function(erro,dados){ 
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
        }

    }).populate('_Unidade').populate('_Agendamento')
    
    
   
    
};
 

 async function excluir(req,res){ 
    const cpf = req.params.cpf
    
    await Pessoa.findOneAndDelete({CpfPessoa:cpf },function(erro,dados){
        if(erro) { 
            res.status(400).send("OPS! Ocorreu um erro!")
        }else{
            res.status(200).json({dados})
        }
    });
    // res.status(201).send("Pessoa deletada com sucesso!!")
   
};


async function lerUm(req,res){ 
    const cpf = req.params.cpf
    const pessoa = await Pessoa.findOne( {CpfPessoa:cpf },function(erro,dados){ 
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
        }

    });
    
    
   
   
   
};

async function Atualizar(req,res){ 

    const pessoas ={
        $set: {nomePessoa: req.body.nomePessoa,
            CpfPessoa: req.body.CpfPessoa,
            dt_nascPessoa: req.body.dt_nascPessoa,
            TelPessoa: req.body.TelPessoa,
            grupo_Prio_Pessoa:req.body.grupo_Prio_Pessoa,
            EnderecoPessoa:  req.body.EnderecoPessoa,
            emailPessoa: req.body.emailPessoa, 
            updated: Date.now()}

    } 
    const option = {new: true}

        

    const cpf = req.params.cpf
     await Pessoa.findOneAndUpdate( {CpfPessoa:cpf },pessoas,option,function(erro,dados){ 

            
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
            
        }

    });
    
    
   
   
   
};
module.exports = {cadastrar,ler,excluir,lerUm,Atualizar};