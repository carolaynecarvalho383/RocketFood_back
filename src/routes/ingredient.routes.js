const{ Router} = require("express");

const IngredientController = require("../controllers/IngredientController")

const ingredientRouter = Router()

const ingredientController = new IngredientController()

ingredientRouter.get("/:product_id",ingredientController.index)
ingredientRouter.put("/:product_id",ingredientController.index)


module.exports = ingredientRouter;