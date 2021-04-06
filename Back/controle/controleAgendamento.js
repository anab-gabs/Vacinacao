

const Agendamento = require("../modelo/Agendamento");

async function cadastrar(req,res){ 
    
    const agendamento = new Agendamento ({
        
        dt_hora_agendamento: req.body.dt_hora_agendamento,
        necessidadeEsp_agendamento: req.body.necessidadeEsp_agendamento,
        Obs_agendamento: req.body.Obs_agendamento,
        _Unidade: req.body._Unidade,
        Pessoas:req.body.Pessoas
        
    }).save().then(()=>{

        res.send("Agendamento cadastrado com sucesso!")
    }).catch(()=>{
        res.send("Erro Ao tentar cadastrar o agendamento!")
    })
   

};

async function ler(req,res){ 
    
    const agendamento = await Agendamento.find( function(erro,dados){ 
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
        }

    }).populate('_Unidade').populate('Pessoas');
   
    
};
 

 async function excluir(req,res){ 
    const id = req.params.id
    
    await Agendamento.findOneAndDelete({_id:id },function(erro,dados){
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
    await Agendamento.findOne( {_id:id },function(erro,dados){ 
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
        }

    });
    
    
   
   
   
};

async function Atualizar(req,res){ 

    const agendamento ={
        $set: {
            dt_hora_agendamento: req.body.dt_hora_agendamento,
            necessidadeEsp_agendamento: req.body.necessidadeEsp_agendamento,
            Obs_agendamento: req.body.Obs_agendamento,

            updated: Date.now()}

    } 
    const option = {new: true}

        

    const id = req.params.id
     await Agendamento.findOneAndUpdate( {_id:id },agendamento,option,function(erro,dados){ 

            
        if(erro) { 
            res.status(400).send("Erro na leitura dos dados,tente novamente!")
        }else{
            res.status(200).json({dados})
            
        }

    });
    
    
   
   
   
};
module.exports = {cadastrar,ler,excluir,lerUm,Atualizar};