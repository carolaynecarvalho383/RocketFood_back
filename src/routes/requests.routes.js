const{ Router} = require("express");

const RequestsController = require("../controllers/RequestsController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const admAuthenticated = require("../middleware/admAuthenticated");

const requestsRoutes = Router()

const requestsController = new RequestsController()

requestsRoutes.post("/",ensureAuthenticated,requestsController.create)
requestsRoutes.get("/:id",ensureAuthenticated,requestsController.show)


module.exports = requestsRoutes;