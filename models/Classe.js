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
        bonus: {
            type: Number,
            required: true
        },
        proficiencia: {
            type: mongoose.ObjectId,
            ref: "Proficiencia",
            required: true
        }
    });

    return mongoose.model('Classe', schema, 'classes');
}