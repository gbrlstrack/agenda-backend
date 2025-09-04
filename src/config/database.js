const Datastore  = require('nedb-promises');

const db = new Datastore({ filename: 'users.db', autoload: true })

module.exports = db;