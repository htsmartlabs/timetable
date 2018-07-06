const mongoose = require('../config/database.config');

const roomSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const roomModel = mongoose.model('room',roomSchema);

module.exports = roomModel;