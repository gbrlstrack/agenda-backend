const { z } = require('zod');

const userSchema = z.object({
    name: z.string({
        required_error: 'O nome é obrigatório.',
        invalid_type_error: 'O nome deve ser um texto.',
    }).min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
    email: z.string({
        required_error: 'O email é obrigatório.',
    }).email({ message: 'Formato de email inválido.' }),
    phone: z.string().length(11, { message: 'O telefone deve conter apenas 11 numeros' }),
});

module.exports = userSchema