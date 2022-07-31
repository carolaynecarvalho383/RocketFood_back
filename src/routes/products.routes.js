const{ Router} = require("express");

const ProductsController = require("../controllers/ProductsController")

const productsRouter = Router()

const productsController = new ProductsController()

productsRouter.post("/:id_category",productsController.create)
productsRouter.put("/:id",productsController.update)
productsRouter.delete("/:id",productsController.delete)
productsRouter.get("/:id",productsController.show)
//productsRouter.get("/",productsController.index)

module.exports = productsRouter;