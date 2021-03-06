const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(3333)

