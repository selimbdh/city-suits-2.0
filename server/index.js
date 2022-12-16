const express = require("express");
const morgan = require("morgan");
const db = require("./configs/dataBase");
const cors = require("cors");
const cartRoutes=require("./Routes/cartRoutes")
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/users", require("./Routes/userRoutes"));
app.use("/api/products", require("./Routes/productRoutes"));
app.use("/api/cart",cartRoutes)
app.get("/", function (req, res) {
  res.json({ message: "Welcome to the Poke-MongoDB RESTful API!" });
});

const PORT = 4000;

app.listen(PORT, function () {
  console.log("Prod-MongoDB RESTful API listening on http://localhost:" + PORT);
});
