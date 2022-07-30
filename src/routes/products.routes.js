const{ Router} = require("express");

const ProductsController = require("../controllers/ProductsController")

const productsRouter = Router()

const productsController = new ProductsController()

productsRouter.post("/:category_id",productsController.create)

module.exports = productsRouter;