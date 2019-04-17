const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        custo: {
            type: Number,
            required: true
        },
        danofisico: {
            type: Number,
            required: true
        },
        tipo: {
            type: mongoose.ObjectId,
            ref: 'Dano',
            required: true
        },
        forca: {
            type: Number,
            required: true
        },
        municao: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('ArmaFogo', schema, 'armasFogos');
}