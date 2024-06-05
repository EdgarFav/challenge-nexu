const { create } = require("../database/schemas/carSchema");

module.exports = {
    getBrands: require("./getBrands"),
    getModels: require("./getModels"),
    getModelsByBrand: require("./getModelsByBrand"),
    createBrand: require("./createBrand")
};