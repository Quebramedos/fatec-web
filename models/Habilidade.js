const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        nome:{
            type:String,
            required: true
        },
        classe: {
            type: mongoose.ObjectId,
            ref: "Classe",
            required: true
        },
        energia: {
            type: Number,
            required: true,
        },
        tipo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Habilidade', schema, 'habilidades');
}