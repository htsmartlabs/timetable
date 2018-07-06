const mongoose = require('../config/database.config');

const timeingSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const timeingModel = mongoose.model('timeing',timeingSchema);

module.exports = timeingModel;