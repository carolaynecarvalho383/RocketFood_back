const { Router } =require("express");
const usersRoutes = require("./users.routes")
const categoryRouter = require("./category.routes")
const productsRouter = require("./products.routes");
const ingredientRouter = require("./ingredient.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/category", categoryRouter);
routes.use("/products", productsRouter);
routes.use("/ingredients", ingredientRouter);



module.exports = routes;