const mongoose = require('../config/database.config');

const timeingSchema = mongoose.Schema({
    daylight_id:{type: String, required: true, unique: true},
    room_id:{type: String, required: true, unique: true},
    clock_id:{type: String, required: true, unique: true},
});

const timeingModel = mongoose.model('timeing',timeingSchema);

module.exports = timeingModel;