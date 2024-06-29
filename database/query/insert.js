const User = require("./model");

async function insertDatasDB(name, email, password) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    try {
        if (!name || !email || !password) {
            throw new Error(`argumentos informado invalido (name:${name}, email:${email}, password:${password}.`)
        }
        if (!emailRegex.test(email)) {
            throw new Error(`email invalido: (email informado:${email})`)
        }
        if (password.length < 8) {
            throw new Error(`A senha dever conter 8 digitos ou mais (comprimento da senha iformada: ${password.length})`)
        }
        return await User.create({
            name: name,
            email: email,
            password: password
        })
    } catch (error) {
        const code = error?.original?.code
        if (code === '23505') {
            throw new Error('esse email já está cadastrado em um conta')
        }
        throw error
    }
}
module.exports = insertDatasDB