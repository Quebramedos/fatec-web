let express = require('express');
let router = express.Router();
let controller = require('../controllers/teste');

/* GET home page. */
router.get('/', controller().teste);



module.exports = router;