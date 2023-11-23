const express = require("express");
const path = require("path");
const checkListRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");
require("./config/database");
const methodOverride = require("method-override");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/checklists", checkListRouter);
app.use("/", rootRouter);

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
});
