const { json, response } = require("express");
const knex = require("../database/knex");


class PurchasesController {

  async create(req, res) {

    const { totalPrice } = req.body;

    const user_id = req.user.id;

    const allRequests = await knex('purchases')
      .where({ user_id })

    const request_id = await knex("requests").insert({
      user_id,
      status: "Pendente",
      totalPrice
    })

    const requestItens = allRequests.map(purchase => {
      return {
        user_id,
        request_id,
        product_id: purchase.product_id,
        request_amount: purchase.amount,
        request_price: purchase.totalPrice
      }
    })

    await knex("requests_itens").insert(requestItens)

    await knex('purchases')
      .where({ user_id })
      .delete()

    return res.json();
  }

  async show(req, res) {

    const user_id = req.user.id


    const requests = await knex('requests')
      .where('user_id', [user_id])

    return res.json(requests );
  }

  async showRequestItens(req, res){
    const {id} = req.params;
    
     const requestsItens = await knex('requests_itens')
      .select([
        'requests_itens.request_amount',
        'requests_itens.request_price',
        'products.title'
      ]).innerJoin('products', 'products.id', 'requests_itens.product_id')
      .where({ request_id: id })
      .orderBy('title')


      return res.json(requestsItens)
  }
 
}

module.exports = PurchasesController;