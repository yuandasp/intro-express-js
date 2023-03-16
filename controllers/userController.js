const fs = require("fs");

module.exports = {
  fetchUsers: async (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db.json"));
    response.status(200).send(data.users);
  },
  register: async (request, response) => {
    let data = JSON.parse(fs.readFileSync("./db.json"));
    let users = data.users;
    users.push({ ...request.body, id: users[users.length - 1].id + 1 });
    // response.status(200).send(users);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    response.status(200).send(data.users);
    // response.status(200).send("I'm Register");
  },
  deleteUser: async (request, response) => {
    // console.log(request.params);
    let idParams = parseInt(request.params.id);
    let data = JSON.parse(fs.readFileSync("./db.json"));
    let users = data.users;

    let newUsers = users.filter((user) => {
      return user.id !== idParams;
    });

    data.users = newUsers;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    response.status(200).send({ isSuccess: true, data: data.users });
  },
};
