

const { populate } = require("../modelo/unidadeModelo");
const Unidade = require("../modelo/unidadeModelo");

async function cadastrar(req,res){ 
    
    const unidade = new Unidade ({
        
        nomeUnidade: req.body.nomeUnidade,
        descricaoUnidade: req.body.descricaoUnidade,
        enderecoUnidade: req.body.enderecoUnidade,
        TelUnidade: req.body.TelUnidade,
        emailUnidade:req.body.emailUnidade,
        LatLongUnidade:  req.body.LatLongUnidade,
        Pessoas:req.body.Pessoas,
        Agendamentos: req.body.Agendamentos
    }).save().then(()=>{

        res.send("Unidade cadastrada com sucesso!")
    }).catch(()=>{
        res.send("Erro Ao Cadastrar!")
    })
   

};

async function ler(req,res){ 
    
    const unidade = await Unidade.find( function(erro,dados){ 
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
        }

    }).populate('Pessoas').populate('Agendamentos');

   
    
};
 

 async function excluir(req,res){ 
    const id = req.params.id
    
    await Unidade.findOneAndDelete({_id:id },function(erro,dados){
        if(erro) { 
            res.status(400).send("OPS! Ocorreu um erro!")
        }else{
            res.status(200).json({dados})
        }
    });
    // res.status(201).send("Unidade deletada com sucesso!!")
   
};


async function lerUm(req,res){ 
    const id = req.params.id
    await Unidade.findOne( {_id:id },function(erro,dados){ 
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
        }

    });
    
    
   
   
   
};

async function Atualizar(req,res){ 

    const unidade ={
        $set: {
            nomeUnidade: req.body.nomeUnidade,
            descricaoUnidade: req.body.descricaoUnidade,
            enderecoUnidade: req.body.enderecoUnidade,
            TelUnidade: req.body.TelUnidade,
            emailUnidade:req.body.emailUnidade,
            LatLongUnidade:  req.body.LatLongUnidade,

            updated: Date.now()}

    } 
    const option = {new: true}

        

    const id = req.params.id
     await Unidade.findOneAndUpdate( {_id:id },unidade,option,function(erro,dados){ 

            
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
            
        }

    });
    
    
   
   
   
};
module.exports = {cadastrar,ler,excluir,lerUm,Atualizar};