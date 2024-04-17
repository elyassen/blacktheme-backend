const express = require("express");
const Client = require("../models/Clients.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const saved = await Client.create(data);
    if (!saved) return res.status(400).json({ msg: "data not saved " });
    return res.status(200).json({ msg: "data saved" });
  } catch (e) {
    return res.status(500).json({ err: e });
  }
});

module.exports = router;
