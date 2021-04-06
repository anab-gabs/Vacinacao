
const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({ 

nomePessoa: { 
    type: String,
    required: true

},
CpfPessoa: { 
    type: String,
    required: true

},
dt_nascPessoa: { 
    type: Date,
    required: true

},
TelPessoa: { 
    type: String,
    required: true

},
grupo_Prio_Pessoa: { 
    type: Boolean,
    required: true

},
EnderecoPessoa: { 
    type: String,
    required: true

},
emailPessoa: { 
    type: String,
    required: true

},

_Unidade:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'UnidadeSaUde',
   

},
_Agendamento:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Agendamento',

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


module.exports = mongoose.model('Pessoa',pessoaSchema);
