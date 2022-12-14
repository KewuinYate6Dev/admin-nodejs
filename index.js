const express = require('express');
require('dotenv').config();
var cors = require('cors');
const { dbConnection }  = require('./database/config');

const app = express();
//Configurar cors
app.use(cors());
//DataBase
dbConnection();


//Rutas
app.get( '/', (req, res)=>{
    res.json({
        ok:true, 
        msg:"Hola mundo"
    });
} );

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});