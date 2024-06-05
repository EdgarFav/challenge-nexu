const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     // type: mongoose.Schema.Types.ObjectId,
    //     auto: true
    //     // default: () => new mongoose.Types.ObjectId()
    // },
    name: {
        type: String,
    },
    average_price: {
        type: Number,
        minlength: 100000,
        default: 0

    },
    brand_name: {
        type: String,
        required: true,
    },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;