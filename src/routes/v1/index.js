const express = require("express");
const router = express.Router();
const helpController = require("../../controllers/helpController");
const foodController = require("../../controllers/foodController");
const resturantController = require("../../controllers/restaurantController")

router.get("/help",helpController.helpDetails);

router.post("/food",foodController.create);
router.delete("/food/:id/:restaurantId",foodController.destroy);

router.post("/restaurant",resturantController.create);
router.delete("/restaurant/:id",resturantController.destroy);
router.get("/restaurant/:id",resturantController.getAllFoodItems);


module.exports = router;