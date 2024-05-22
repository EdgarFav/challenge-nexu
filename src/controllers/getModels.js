const { Car } = require("../database/schemas/carSchema");
const { response } = require("../utils");

const getModels = async (req, res) => {
    const cars = await Car.find();
    response(res, 200, cars);
}
module.exports = getModels;