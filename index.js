const express = require("express");
const app = express();
const cors = require("cors");
const clientRoute = require("./routes/clientRoute");
const ConnectDb = require("./db");
app.use(cors());
app.use(express.json());
app.use("/client", clientRoute);
ConnectDb();
app.listen(9090, () => {
  console.log("listening to port 9090");
});
