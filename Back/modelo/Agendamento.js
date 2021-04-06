
const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({ 

dt_hora_agendamento: { 
    type: Date,
    required: true

},
necessidadeEsp_agendamento: { 
    type: Boolean,
    required: true



},
Obs_agendamento: { 
    type: String,
    required: true


},

_Unidade:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'UnidadeSaUde',
    required: true

},
Pessoas:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Pessoa',
    required: true

},
creatAt: { 
    type: Date,
    default: Date.now

},
updated:{ 
type: Date,
default: null
}

}) 


module.exports = mongoose.model('Agendamento',agendamentoSchema);