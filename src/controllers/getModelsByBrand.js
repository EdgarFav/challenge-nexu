const Car = require("../database/schemas/carSchema");

const getModelsByBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const cars = await Car.find({ brand_name: id }, 'id name average_price');
        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = getModelsByBrand;