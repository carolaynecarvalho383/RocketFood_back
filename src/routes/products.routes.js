const{ Router} = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");

const ProductsController = require("../controllers/ProductsController")
const ImageProductController = require("../controllers/ImageProductController")

const admAuthenticated = require("../middleware/admAuthenticated");

const productsRouter = Router() 
const upload = multer(uploadConfig.MULTER)

const productsController = new ProductsController()
const imageProductController = new ImageProductController()


productsRouter.post("/",admAuthenticated,upload.single("image"),productsController.create)
productsRouter.put("/:id",admAuthenticated,productsController.update)
productsRouter.patch("/imageFile/:id",admAuthenticated, upload.single("image"),imageProductController.update)

productsRouter.delete("/:id",productsController.delete)
productsRouter.get("/:id",productsController.show)
productsRouter.get("/",productsController.index)




module.exports = productsRouter;