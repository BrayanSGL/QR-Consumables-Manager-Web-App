const express = require("express");
const app = express();
const port = 3000;

//Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public")); //Para acceder a los archivos estáticos

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/manager", (req, res) => {
  res.render("manager");
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
