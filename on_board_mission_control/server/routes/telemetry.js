const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { temperature, pressure, altitude, velocity } = req.body;

  const query = `
    INSERT INTO telemetry_data (temperature, pressure, altitude, velocity)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [temperature, pressure, altitude, velocity], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Data inserted");
  });
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM telemetry_data ORDER BY timestamp DESC LIMIT 50",
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
});

module.exports = router;