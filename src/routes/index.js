const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/models", controllers.getModels);
router.get("/brands", controllers.getBrands);
router.get("/brands/:id/models", controllers.getModelsByBrand);


module.exports = router;