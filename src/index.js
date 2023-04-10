const express = require('express');
const cnx = require('./config/conexion');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/index'))
const server = app.listen(3000);
console.log('server listening on port', 3000);

module.exports = server;