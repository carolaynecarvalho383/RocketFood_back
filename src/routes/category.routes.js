const{ Router} = require("express");

const CategoryController = require("../controllers/CategoryController")

const categoryRouter = Router()

const categoryController = new CategoryController()

categoryRouter.post("/",categoryController.create)
categoryRouter.delete("/:id",categoryController.delete)
categoryRouter.put("/:id",categoryController.update)


module.exports = categoryRouter;