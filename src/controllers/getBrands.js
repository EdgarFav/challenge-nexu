const Car = require("../database/schemas/carSchema");
const { response } = require("../utils");

const getBrands = async (req, res) => {
    try {
        // Obtener todos los datos de los modelos
        const cars = await Car.find();

        // Agrupar por marca y calcular el precio promedio
        const brandMap = {};

        cars.forEach(car => {
            if (!brandMap[car.brand_name]) {
                brandMap[car.brand_name] = { total_price: 0, count: 0 };
            }
            brandMap[car.brand_name].total_price += car.average_price;
            brandMap[car.brand_name].count += 1;
        });

        const brands = Object.keys(brandMap).map((brand_name, index) => ({
            id: index + 1,
            brand_name,
            average_price: brandMap[brand_name].total_price / brandMap[brand_name].count,
        }));

        res.json(brands);
    } catch (error) {
        res.status(500).send(error);
    }
    // const cars = await Car.find();
    // response(res, 200, cars);
}
module.exports = getBrands;