const express = require('express');
const aboutControllers = require('../controllers/aboutControllers')
const router = express.Router();

router.get('/about', aboutControllers)

module.exports = router;