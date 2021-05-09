require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const router = require('./routes')

/* EXPRESS INSTANCE */
const app = express()

app.disable('x-powered-by') //DESACTIVA X-POWERED-BY: EXPRESSJS

app.use(cors()) //PERMITE ACCESO EXTERNO

app.use(express.urlencoded({ extended: true }))

app.use(express.json()) //EX BODY PARSER

app.use(morgan('dev')) //LOGGER

app.use('/api/v1', router)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
