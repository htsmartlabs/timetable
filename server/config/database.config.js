const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/citicollege',{ useNewUrlParser: true },err =>{
    !err ? console.log('mongodb connected'):console.log(err);
});

module.exports = mongoose;