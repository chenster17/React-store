const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebcamSchema = new Schema({
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



const Webcam = mongoose.model('Webcam', WebcamSchema,'Webcam');

module.exports = Webcam;