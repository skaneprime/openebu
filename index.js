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
    res.send('function task(x) { return x * x }');
});

app.get('/result4/', (req, res) => {
    res.set({
        'X-Author': 'itmo336261',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain; charset=UTF-8'    
    })
    res.send(JSON.stringify({ 'message': 'itmo336261', 'x-result': req.headers['x-test'], 'x-body': req.body }));
});

app.listen(process.env.PORT || 3030, () => {
  console.log(`server started on port ${process.env.PORT || 3030}`);
});
