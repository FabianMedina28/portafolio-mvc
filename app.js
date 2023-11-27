const express = require('express');
const app = express();
const rutasMain = require('./routers/main');
const rutasAbout = require('./routers/about')

app.listen(3000,() =>{
    console.log('Servidor funcionando');
}); 
app.use('/', rutasMain);
app.use('/', rutasAbout);
app.use(express.static('public'));