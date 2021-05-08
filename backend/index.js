require('dotenv').config()
const cors = require('cors')
const express = require('express')

/* EXPRESS INSTANCE */
const app = express()

app.disable('x-powered-by') //DESACTIVA X-POWERED-BY: EXPRESSJS

app.use(cors()) //PERMITE ACCESO EXTERNO

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
