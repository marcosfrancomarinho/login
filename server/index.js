const express = require('express')
const cors = require('cors')
const login = require('./router/login/router')
const signUp = require('./router/signup/router')
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/login', login)
app.use('/signup', signUp)

app.listen(PORT, () => {      
    console.log('server online')
})    