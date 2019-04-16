const mongoose = require('mongoose');
module.exports = function () {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        vida: {
            type: Number,
            required: true
        },
        energia: {
            type: Number,
            required: true
        },
        armaFogo: {
            type: mongoose.ObjectId,
            ref: "ArmaFogo",
            required: true
        },
        artefato: {
            type: mongoose.ObjectId,
            ref: "Artefato",
            required: true
        },
        status: {
            type: mongoose.ObjectId,
            ref: "Status",
            required: true
        },
        classe: {
            type: mongoose.ObjectId,
            ref: "Classe",
            required: true
        },
        habilidade1: {
            type: mongoose.ObjectId,
            ref: "Habilidade",
            required: true
        }

    });

    return mongoose.model('Personagem', schema, 'personagens');
}