const Car = require("../database/schemas/carSchema");
const response = require("../utils/response");

const getModels = async (req, res) => {
    try {
        const cars = await Car.find().lean();

        const stringCars = cars.map(car => {
            return {
                ...car,
                _id: car._id ? car._id.toString() : car._id
            }
        })
        response(res, 200, stringCars);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = getModels;