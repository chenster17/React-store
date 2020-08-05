const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpeakerSchema = new Schema({
    name: String,
    brand: String,
    type: String,
    connection: String,
    weight: Number,
    power: Number,
    price: Number,
    file: String
},{
    versionKey: false
});



const Speaker = mongoose.model('Speaker', SpeakerSchema,'Speaker');

module.exports = Speaker;