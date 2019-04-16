//cadastro de usuarios
/*
modelo
*/

const mongoose = require('mongoose');
module.exports = function () {
    const schema = mongoose.Schema({
        envenenado: {
            type: Boolean,
            required: true
        },
        enfraquecido: {
            type: Boolean,
            required: true,
        },
        normal: {
            type: Boolean,
            required: true
        }
    });

    return mongoose.model('Status', schema, 'statuss');
}