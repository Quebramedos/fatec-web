const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario');

/* post */
router.post('/', controller.novo);

/*get&/*/
router.get('/', controller.listar);

/*obterum*/
router.get('/:id', controller.obterUm);

/*obterum*/
router.patch('/', controller.atualizar);

//excluir
router.delete('/:id', controller.excluir);


module.exports = router;
