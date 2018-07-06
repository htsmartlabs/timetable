const mongoose = require('../config/database.config');

const daylightSchema = mongoose.Schema({
    name:{type: String, required: true, unique: true}
});

const daylightModel = mongoose.model('daylight',daylightSchema);

module.exports = daylightModel;