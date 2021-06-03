require("dotenv").config({
  path:
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env",
});
const rotas = require("./rotas");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("Hello,World");
});

if ((process.env.NODE_ENV == "production")) {
  const db = require("./ConfigBD/mongo_connect");
  const dbpostgress = require("./ConfigBD/postgress_connect");
  app.use("/api", rotas);
  app.use("/api",require("./Routespg"))
}else{
  const db = require("./ConfigBD/mongo_connect");
  const dbpostgress = require("./ConfigBD/postgress_connect");
  app.use("/api", rotas);
  app.use("/api",require("./Routespg"))
}

app.listen(port, () => {
  console.log("servidor rodando na porta", port);
  console.log(process.env.NODE_ENV);

});
