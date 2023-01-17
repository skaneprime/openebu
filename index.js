const express = require('express');
const app = express();

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))

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
    res.send('function task(x) { return x * x * x }');
});

app.all('/promise/', (req, res) => {
    res.set({
        'X-Author': 'itmo336261',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain; charset=UTF-8'    
    })
    res.send(`
        function task(x) { 
            return new Promise((resolve, reject) => x < 18 ? resolve('yes') : reject('no')) 
        }
    `);
});

app.all('/result4/', (req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
        'Content-Type': 'application/json'    
    })
    const data = { 'message': 'itmo336261', 'x-result': req.headers['x-test'], 'x-body': req.body };
    console.log('this is', data);
    res.send(JSON.stringify(data));
    next();
});

app.listen(process.env.PORT || 3030, () => {
  console.log(`server started on port ${process.env.PORT || 3030}`);
});
