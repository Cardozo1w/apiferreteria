const express = require('express')
const apiRouter = require('./routes/api')
const router = require("express").Router();
const cors = require('cors')


const app = express();
app.use(cors())

require('./db')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter);

const port = 4000

app.listen(port, ()=> {
    console.log('Servidor corriendo en el puerto ', port)
})