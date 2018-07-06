const mongoose = require('../config/database.config');

const clockSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const clockModel = mongoose.model('clock',clockSchema);

module.exports = clockModel;