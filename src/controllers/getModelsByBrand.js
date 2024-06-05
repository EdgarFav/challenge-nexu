const Car = require("../database/schemas/carSchema");

const getModelsByBrand = async (req, res) => {
    const { id } = req.params;
    try {
        const cars = await Car.find({ brand_name: id }, 'id name average_price').lean();
        const stringCars = cars.map(car => {
            return {
                ...car,
                _id: car._id ? car._id.toString() : car._id
            }
        })
        res.status(200).send(stringCars);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = getModelsByBrand;