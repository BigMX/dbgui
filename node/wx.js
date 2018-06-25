'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: '0.0.0.0', routes:{cors:true }});

var mysql      = require('mysql');
var curr    = {ip:null,id:'',type:null};
var connection = mysql.createConnection({

    //host will be the name of the service from the docker-compose file. 
    host     : 'mysql',
    user     : 'root',
    password : 'go_away!',
    database : 'wx'
});


connection.connect();

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log('Server processing a / request');
        reply('Hello Future Studio');
    }
});
