const fs = require("fs");

module.exports = {
  fetchProducts: async (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db.json"));
    response.status(200).send(data.products);
  },
  addProduct: async (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db.json"));
    let products = data.products;
    products.push({
      ...request.body,
      id: products[products.length - 1].id + 1,
    });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    response.status(200).send(data.products);
  },
  deleteProduct: async (request, response) => {
    let idParams = parseInt(request.params.id);
    let data = JSON.parse(fs.readFileSync("./db.json"));
    let products = data.products;

    let newProducts = products.filter((product) => {
      return product.id !== idParams;
    });

    data.products = newProducts;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    response.status(200).send({ isSuccess: true, data: data.products });
  },
};
