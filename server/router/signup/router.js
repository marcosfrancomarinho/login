const express = require('express')
const router = express.Router()
const insertDatasDB = require('../../../database/query/insert')
router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            throw new Error(`argumentos informado invalido (name:${name}, email:${email}, password:${password}.`)
        }
        await insertDatasDB(name, email, password)
        res.status(200).type('json').send({ OK: true, msg: 'usuário cadastrado com sucesso' })
    } catch (error) {
        res.status(400).type('json').send({ error: error.message })
    }
})

module.exports = router 