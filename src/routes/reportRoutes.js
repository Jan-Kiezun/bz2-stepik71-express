const express = require("express");
const router = express.Router();
const { getReport } = require("../dbCalls/reportCalls");

router.get("/", async (req, res) => {
  const report = await getReport();
  res.send(report);
});

module.exports = router;
