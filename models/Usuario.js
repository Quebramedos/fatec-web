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
        },
        sobrenome: {
            type: String,
            required: true
        },
        data_nascimento: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        senha: {
            type: String,
            required: true
        },
        email_verificado: {
            type: Boolean,
            required: false
        },
        nomePersonagem: {
            type: String,
            required: true
        },
        progresso: {
            type: Number,
            required: false
        }

    });

    return mongoose.model('Usuario', schema, 'usuarios');
}