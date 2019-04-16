const mongoose = require('mongoose');
module.exports = function () {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        custo: {
            type: Number,
            required: false
        }
    });

    return mongoose.model('Artefato', schema, 'artefatos');
}