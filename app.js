var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//conexao bando de dados
const db = require('./config/database');
db('mongodb://127.0.0.1:27017/projetoBimestre');
//db('mongodb://127.0.0.1:27017/project');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//variavel projeto
const usuario = require('./routes/usuario');

const status = require('./routes/status');
const armaFogo = require('./routes/armaFogo')
const dano = require('./routes/dano')
const proficiencia = require('./routes/proficiencia');
const artefato = require('./routes/artefato');
const classe = require('./routes/classe');
const habilidade = require('./routes/habilidade');
const personagem = require('./routes/personagem')

//----------------------------------------------------------------------
//---                      variaveis projeto                         ---
//----------------------------------------------------------------------

app.use('/dano', dano);
app.use('/classe', classe);
app.use('/status', status);
app.use('/usuario', usuario);
app.use('/armaFogo', armaFogo);
app.use('/artefato', artefato);
app.use('/habilidade', habilidade);
app.use('/personagem', personagem);
app.use('/proficiencia', proficiencia);

module.exports = app;


