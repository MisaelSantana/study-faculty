const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello ford');
});

app.get('/concessionarias', (req, res) => {
    const lojas = [
        {
            id: 1,
            name: 'Joinville-SC'
        },
        {
            id: 2,
            name: 'Barra do Sul-SC'
        },
        {
            id: 3,
            name: 'Garuva-SC'
        },
        {
            id: 4,
            name: 'Terra de Ninguem-SC'
        },
    ]
    res.render('stores', {
        lojas
    });
});

app.get('/', (req, res) => {
    res.send('hello ford')
});

app.get('/', (req, res) => {
    res.send('hello ford')
});

app.listen(9000, console.log('App Rodando: http://localhost:9000'));