const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

function myMiddleware(req, res, next) {
  if (!req.body.isAdmin) {
    return res.json({ message: "user unauthorized" })
  }
  next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create)



module.exports = usersRoutes;