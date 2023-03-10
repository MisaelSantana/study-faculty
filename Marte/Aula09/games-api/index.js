const { response, request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use(cors());

const DB = {
    games: [
        {id: 100, name: 'Diablo', year: 1994, price: 100},
        {id: 101, name: 'Final Fantasy VII', year: 1996, price: 120},
        {id: 102, name: 'CS', year: 2000, price: 190}
    ]
}

// Create router return all games;
app.get('/api/games', (request, response) => {
    response.send(DB.games);
});

// Create router return game ID;
app.get('/api/game/:id', (request, response) => {
    const idUser = request.params.id
    if(isNaN(request.params.id)) {
        response.sendStatus(400);
        response.send('Ops, o ID informado não é um número.');
    } else {
        const id = parseInt(idUser);
        const game = DB.games.find(index => index.id === id);
        if(game !== undefined) {
            response.statusCode = 200;
            response.json(game)
        } else {
            response.sendStatus(404);
        }
    }
});

// Delete items in API
app.delete('/api/game/:id', (request, response) => {
    const idUser = request.params.id
    if(isNaN(request.params.id)) {
        response.sendStatus(400);
        response.send('Ops, não foi possível deletar. Este item não existe!');
    } else {
        const id = parseInt(idUser);
        const game = DB.games.findIndex(index => index.id === id);
        if (game === -1) {
            // Usuário informou um ID que não existe na Base;
            response.sendStatus = 404;
        } else {
            DB.games.splice(game, 1);
            response.sendStatus(200);
            response.json({ message: 'Uhull, você passou a faca com sucesso!'});
        }
    }
})

// Create item using method post
app.post('/api/game/', (request, response) => {
    const {name, year, price} = request.body;
    DB.games.push({
        id: Math.floor(Math.random()* 10 + 1),
        name,
        year,
        price,
    }); 
    response.send({message: 'Uhuuul, criado com sucesso!'});
});

// Configuration connection aplication;
app.listen(8080, () => {
    console.log('API RUNNING, http://localhost:8080');
});
