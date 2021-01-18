const bodyParser = require('body-parser');
const express = require('express');

const server = express();
server.use(bodyParser.json());
server.post('/',function(req,res){
    res.json('HOLAAAAAAAA')
})
module.exports = { server };