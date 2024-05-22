const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    average_price: {
        type: Number,
        minlength: 100000,
        required: true
    },
    brand_name: {
        type: String,
        required: true,
        unique: true
    }
});

const Car = mongoose.model("Car", carSchema);

module.exports = { Car };