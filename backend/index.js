require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const router = require('./routes')
const { errorHandler, wrapErrors } = require(`./middlewares/errorHandling`)

/* EXPRESS INSTANCE */
const app = express()

//DISABLE HEADER X-POWERED-BY: EXPRESSJS
app.disable('x-powered-by')

//EXTERN CROSS DOMAIN ACCESS
app.use(cors())

app.use(express.urlencoded({ extended: true }))

//EX BODY PARSER
app.use(express.json())

//LOGGER
app.use(morgan('dev'))

//ROUTER
app.use('/api/v1', router)

//ERROR HANDLERS
app.use(wrapErrors)
app.use(errorHandler)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
