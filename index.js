const express = require("express");
const app = express();
const clientRoute = require("./routes/clientRoute");
const ConnectDb = require("./db");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/client", clientRoute);
ConnectDb();
app.get("/", (req, res) => {
  res.json({ msg: "server started", status: "running" });
});

app.listen(9090, () => {
  console.log("Listening on port 9090");
});
