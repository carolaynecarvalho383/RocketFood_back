const knex = require("../database/knex")
const DiskStorage = require('../providers/DiskStorage');

const diskStorage = new DiskStorage()

 class ImageProductController{

  async update(req, res) {

    const  {id}  = req.params

    const productFilename = req.file.filename;
    console.log(productFilename);
    
    const product = await knex("products")
      .where({ id })
      .first()

    if (product.image) {
      await diskStorage.deleteFile(product.image)
    }
    const filename = await diskStorage.saveFile(productFilename)

    product.image = filename 

    await knex("products")
    .update(product)
    .where({ id})

    return res.json()
  }


}


module.exports = ImageProductController;