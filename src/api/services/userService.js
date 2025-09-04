const userModel = require("../models/userModel");
const userSchema = require("../schemas/userSchema")

const validateExistenceById = async () => {
    const existingUser = await userModel.findById(id);
    if (!existingUser) throw new Error("Usuário não existe")

    return contact
}

const create = async (userData) => {
    const validatedData = userSchema.parse(userData);
    const existingContact = await userModel.findByEmail(userData.email);

    if (existingContact) {
        throw new Error('Já existe um usuário com este email.');
    }

    const newUser = await userModel.create(validatedData);

    return newUser;
}

const getAll = async () => {
    const users = await userModel.findAll();
    return users;
};

const getById = async (id) => {
    const user = await userModel.findById(id)

    if (!user) throw new Error("Usuário não existe")

    return user;
}

const update = async (id, newData) => {
    await validateExistenceById(id)

    const validatedData = userSchema.partial().parse(newData);

    const updatedUser = await contactModel.update(id, validatedData);

    return updatedUser;
}

const destroy = async (id) => {
    await validateExistenceById(id)
    const destroyed = await userModel.destroy
    return destroyed
}

module.exports = {
    create, destroy, getAll, getById, update
}