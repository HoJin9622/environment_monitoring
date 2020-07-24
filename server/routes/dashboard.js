const express = require('express');
const router = express.Router();
const Data = require('../tblSensorData.json');

router.get('/dashboard', (req, res) => {
  res.status(200).json({ success: true, data: Data });
});

module.exports = router;
