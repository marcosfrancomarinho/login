const User = require("./model");

async function hasUserDB(email, password) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    try {
        if (!emailRegex.test(email)) {
            throw new Error(`email invalido: (email informado:${email})`)
        }
        const response = await User.findOne(
            {
                where: { email: email },
                attributes: ['name', 'email', 'password']
            }
        )
        if (!response) {
            throw new Error('usuário não cadastrado faça o registro para entrar.')
        }
        if (response.password !== password) {
            throw new Error('senha invalida tente novamente.')
        }
        return {
            name: response.name,
            email: response.email,
            OK: true
        }
    } catch (error) {
        throw error
    }
}
module.exports = hasUserDB