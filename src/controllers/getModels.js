const Car = require("../database/schemas/carSchema");
const response = require("../utils/response");

const getModels = async (req, res) => {
    try {
        const cars = await Car.find();
        response(res, 200, cars);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = getModels;