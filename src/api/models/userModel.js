const db = require('../../config/database');

const create = async (user) => {
    return db.insert(user)
}

const getAll = async () => {
    return db.find({})
}

const getById = async (id) => {
    return db.findOne({ _id: id })
}

const update = async (id, updateData) => {
    return db.update({ _id: id }, { $set: updateData }, { returnUpdatedDocs: true });
}

const destroy = async (id) => {
    return db.remove({ _id: id }, {})
}

const findByEmail = async (email) => {
    return db.findOne({ email: email });
};


module.exports = {
    create,
    getAll,
    getById,
    update,
    destroy,
    findByEmail
};