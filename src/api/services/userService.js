const userModel = require("../models/userModel");
const userSchema = require("../schemas/userSchema");
const ApiError = require("../../utils/apiError");

const create = async (userData) => {
    const validatedData = userSchema.parse(userData);
    const existingContact = await userModel.findByEmail(userData.email);

    if (existingContact) {
        throw new ApiError('Já existe um usuário com este email.', 409);
    }

    const newUser = await userModel.create(validatedData);

    return newUser;
}

const getAll = async () => {
    const users = await userModel.getAll();
    return users;
};

const getById = async (id) => {
    const user = await userModel.getById(id)

    if (!user) throw new ApiError("Usuário não existe", 404)

    return user;
}

const update = async (id, newData) => {
    await getById(id)

    const updatedUser = await userModel.update(id, newData);

    return updatedUser;
}

const destroy = async (id) => {
    await getById(id)
    const destroyed = await userModel.destroy(id)
    return destroyed
}

module.exports = {
    create, destroy, getAll, getById, update
}