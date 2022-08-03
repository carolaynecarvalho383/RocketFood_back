const{ Router} = require("express");

const ProductsController = require("../controllers/ProductsController")
const admAuthenticated = require("../middleware/admAuthenticated");

const productsRouter = Router()

const productsController = new ProductsController()

productsRouter.post("/",admAuthenticated,productsController.create)
productsRouter.put("/:id",admAuthenticated,productsController.update)
productsRouter.delete("/:id",admAuthenticated,productsController.delete)
productsRouter.get("/:id",productsController.show)
productsRouter.get("/",productsController.index)

module.exports = productsRouter;