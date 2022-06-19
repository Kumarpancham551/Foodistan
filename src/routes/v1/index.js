const express = require("express");
const router = express.Router();
const helpController = require("../../controllers/helpController");
const foodController = require("../../controllers/foodController");
const resturantController = require("../../controllers/restaurantController");
const orderController = require("../../controllers/orderController");

router.get("/help",helpController.helpDetails);

router.post("/food",foodController.create);
router.delete("/food/:id/:restaurantId",foodController.destroy);

router.post("/restaurant",resturantController.create);
router.delete("/restaurant/:id",resturantController.destroy);
router.get("/restaurant/:id",resturantController.getAllFoodItems);

router.post("/order", orderController.addItem);
router.get("/order/:id",orderController.getOrder);
router.get("/order/:id/total",orderController.orderTotal);
router.patch("/order/:id",orderController.updateOrder);
router.patch("/order",orderController.deletItemFromOrder);


module.exports = router;