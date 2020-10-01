const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    id: String,
    Cart: Array
},{
    versionKey: false
});



const Account = mongoose.model('Account', AccountSchema,'Account');

module.exports = Account;