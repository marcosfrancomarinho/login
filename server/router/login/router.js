const express = require('express')
const router = express.Router()
const hasUserDB = require('../../../database/query/select')

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            throw new Error(`argumentos informado invalido (email:${email}, password:${password}.`)
        }
        await hasUserDB(email, password)
        res.status(200).type('json').send({ OK: true, msg: 'usuário logado com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(400).type('json').send({ error: error.message })
    }
})
module.exports = router   