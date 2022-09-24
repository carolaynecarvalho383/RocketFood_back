const{ Router} = require("express");

const PurchasesController = require("../controllers/PurchasesController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const admAuthenticated = require("../middleware/admAuthenticated");

const purchasesRouter = Router()

const purchasesController = new PurchasesController()

purchasesRouter.post("/:product_id",ensureAuthenticated,purchasesController.create)
purchasesRouter.delete("/:id",ensureAuthenticated,purchasesController.delete)
purchasesRouter.get("/",ensureAuthenticated,purchasesController.show)

module.exports = purchasesRouter;