const fs = require("fs");

module.exports = {
  fetchProducts: async (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db.json"));
    response.status(200).send(data.carts);
  },
  addCart: async (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db.json"));
    let carts = data.carts;

    carts.push({ ...request.body, id: carts[carts.length - 1].id + 1 });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    response.status(200).send(carts);
  },
  deleteCart: async (request, response) => {
    idParams = parseInt(request.params.id);
    let data = JSON.parse(fs.readFileSync("./db.json"));
    let carts = data.carts;

    let newCarts = carts.filter((cart) => {
      return cart.id !== idParams;
    });
    data.carts = newCarts;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    response.status(200).send({ isSuccess: true, data: data.carts });
  },
};
