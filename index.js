const express = require('express');
const app = express();

app.get('/login/', (req, res) => {
    res.set({
        'X-Author': 'itmo336261',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain; charset=UTF-8'    })
    res.send('itmo336261')
});

app.get('/sample/', (req, res) => {
    res.set({
        'X-Author': 'itmo336261',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain; charset=UTF-8'    })
    res.send('function task(x) {\n\treturn x * x;\n}');
});

app.listen(3000);