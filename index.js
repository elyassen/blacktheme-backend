const express = require("express");
const app = express();
const cors = require("cors");
const clientRoute = require("./routes/clientRoute");
const ConnectDb = require("./db");

// CORS configuration
const corsOptions = {
  origin: "https://blacktheme.onrender.com/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); //
app.use(express.json());
app.use("/client", clientRoute);
ConnectDb();

app.listen(9090, () => {
  console.log("Listening on port 9090");
});
