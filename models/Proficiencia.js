const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        descricao:{
            type: String,
            required: true
        }
    });

    return mongoose.model('Proficiencia', schema, 'proficiencias');
}