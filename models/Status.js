//cadastro de usuarios
/*
modelo
*/

const mongoose = require('mongoose');
module.exports = function () {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Status', schema, 'statuss');
}