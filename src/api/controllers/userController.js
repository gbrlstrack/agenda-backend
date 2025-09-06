const userService = require("../services/userService")

const create = async (req, res, next) => {
    try {
        const user = req.body;
        const newUser = await userService.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getById(id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedUser = await userService.update(id, updateData);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        await userService.destroy(id);
        res.status(204).send("Excluido com sucesso!");
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create, destroy, getAll, getById, update
}