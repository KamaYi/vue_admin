const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    account: String,
    password: String,
    date: {
        default: Date.now(),
        type: Date
    },
    id: Number,
}, {
    versionKey: false
})

/*定义模型User，数据库存的是users*/
module.exports = mongoose.model('User', userSchema);