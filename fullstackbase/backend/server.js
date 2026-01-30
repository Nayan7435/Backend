// const express = require('express');
import express from 'express';

const app = express();

app.use(express.static('dist'))

app.get('/',(req, res) => {
    res.send('Server is Ready')
});

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke1',
            content: 'This is a joke1'
        },
        {
            id: 2,
            title: 'A joke2',
            content: 'This is a joke2'
        },
        {
            id: 3,
            title: 'A joke3',
            content: 'This is a joke3'
        },
        {
            id: 4,
            title: 'A joke4',
            content: 'This is a joke4'
        },
        {
            id: 5,
            title: 'A joke5',
            content: 'This is a joke5'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Serve at http://localhost:${port}`);

})