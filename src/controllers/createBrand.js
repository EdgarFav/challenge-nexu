const Car = require("../database/schemas/carSchema");

const createBrand = async (req, res) => {
    const { name } = req.body;

    try {
        // Verificar si la marca ya existe
        const existingBrand = await Car.findOne({ brand_name: name });
        if (existingBrand) {
            return res.status(400).json({ message: 'Brand name already in use' });
        }

        // Crear una nueva marca
        const newBrand = new Car({ brand_name: name });
        await newBrand.save();

        res.status(201).json({ message: 'Brand created successfully', brand: newBrand });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = createBrand;