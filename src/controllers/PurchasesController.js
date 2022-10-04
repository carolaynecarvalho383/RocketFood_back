const { json } = require("express");
const knex = require("../database/knex");


class PurchasesController {

  async create(req, res) {

    const { amount } = req.body;

    const user_id = req.user.id;

    const { product_id } = req.params;
    let totalPrice;
    const priceProduct = await knex('products')
      .select('price')
      .where({ id: product_id })

    const price = priceProduct.map(price => price.price)

    function calculatorTotalPrice(amount, price) {
      totalPrice = Number(price.toString()) * amount
      return totalPrice
    }
    calculatorTotalPrice(amount, price)

    const purchases = await knex("purchases").insert({
      user_id,
      product_id,
      totalPrice: totalPrice.toString(),
      amount
    })

    return res.json();
  }

  async show(req, res) {

    const id = req.user.id


    const purchases = await knex('purchases')
      .select([
        'products.image', 'products.title',
        'purchases.*'
      ]).innerJoin('products', 'products.id', 'purchases.product_id')
      .where('user_id', [id])




    return res.json(purchases);
  }

  async delete(req, res) {
   const {id} = req.params
   
   const teste = await knex('purchases')
   .where({id})
    .delete()
   return res.json(teste)
  }

  async update(req, res) {
    const {id} = req.params
    const{inventory} = req.body

    const amount = await knex("products")
    .where({ id}).first()
    console.log(amount.inventory);

    const calcRest = Number(amount.inventory - Math.round(inventory))

    await knex("products")
    .where({ id})
   .update({inventory:calcRest})
    return res.json()
  }
}

module.exports = PurchasesController;