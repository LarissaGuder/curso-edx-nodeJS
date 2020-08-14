const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/// log completin
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next()
})

app.use((req, res, next) => {
    if (req.query.api_key) {
        next()
    } else {
        res.status(401).send({ msg: 'Sem permissão parça' })
    }
})

app.get('/', (req, res) => {
    res.send({ msg: 'relou' })
})

app.get('/accounts', (req, res) => {
    console.log('accounts inline middleware');
    next(new Error('opsssssssss'))
}, (req, res) => {
    res.send({ msg: 'accounts' })
})

app.post('/transactions', (req, res) => {
    console.log(req.body)
    res.send({ msg: 'transactions' })
})

app.use((error, req, res, next) => {
    res.status(500).send(error)
})
app.listen(3000)


/// curl localhost:3000/accounts?api_key=654654

/// curl -d '{"key":"value"}' localhost:3000/transactions?api_key=654654 -i -H 'Content-Type: application-json'


/// express cheatsheets
/// https://github.com/azat-co/cheatsheets/tree/master/express4