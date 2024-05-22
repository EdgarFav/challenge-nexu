const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/models", controllers.getModels);
router.get("/brands", controllers.getBrands);


module.exports = router;