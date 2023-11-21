let mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "todo-list";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("MongoDB foi iniciado!");
      })
      .catch((err) => {
        console.error("MongoDB encontrou um erro :(");
      });
  }
}

module.exports = new Database();
