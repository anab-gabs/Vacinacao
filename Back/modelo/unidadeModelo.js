const mongoose = require('mongoose');

const unidadeSchema = new mongoose.Schema({ 

nomeUnidade: { 
    type: String,
    required: true

},
descricaoUnidade: { 
    type: String,
    required: true



},
enderecoUnidade: { 
    type: String,
    required: true


},
TelUnidade: { 
    type: String,
    required: true
},
emailUnidade: { 
    type: String,
    required: true
},
LatLongUnidade: { 
    type: String,
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



module.exports = mongoose.model('UnidadeSaUde',unidadeSchema);