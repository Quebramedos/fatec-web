const ArmaFogo = require('../models/ArmaFogo')(/*=construtor=*/);

const controller = {};// objeto vazio

controller.novo = function (req, res) {
    // os dados para sere gravados estao no req.body

    ArmaFogo.create(req.body).then(
        //calback se der certo
        function () {
            res.send(null);
            //falha error 201
            res.sendStatus(201).end();
        },
        function (erro) {
            console.error(erro);
            //htt 500 erro interno de servidor
            res.sendStatus(500).end();
        }
    );
    //res.send('Dados gravados!');


};

controller.listar = function (req, res) {
    ArmaFogo.find().populate('dano').exec().then(
        //callback do bem
        function (armasFogos) {//todos os veikculos do vetor 
            //REtorna o vetor encontrado
            res.json(armasFogos).end();
        },
        function (erro) {
            console.error(erro)
            res.sendStatus(500).end();
        }
    );

};

controller.obterUm = function (req, res) {
    const id = req.params.id;

    ArmaFogo.findById(id).exec().then(

        //callback do bem
        function (armaFogo) {
            if (armaFogo) {
                res.json(armaFogo).end();
            } else {
                res.sendStatus(404).end();
            }

        },
        function (erro) {
            console.error(erro);
            res.sendStatus(500).end();
        }
    )
};

controller.atualizar = function (req, res) {
    //capturar o id dentro do corpo da requisiçao
    const id = req.body._id;
    //encontra o objeto indentificado pelo id e substitui o seu conteudo por req.body       
    ArmaFogo.findByIdAndUpdate({ _id: id }, req.body).exec().then(
        //callback do bem
        function (armaFogo) {
            if (armaFogo) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },
        //callback do mal
        function (erro) {
            console.error(erro)
            res.sendStatus(500).end();
        }
    );
};

controller.excluir = function (req, res) {
    const id = req.params.id;
    //capturamos o id a partir da url do Status
    ArmaFogo.findByIdAndDelete({ _id: id }).exec().then(
        //callback do bem
        function (armaFogo) {
            if (armaFogo) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },
        function (erro) {
            //callback do mal
            console.error(erro);
            res.sendStatus(500).end();
        }
    );
}
module.exports = controller;