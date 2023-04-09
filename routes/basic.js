const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('basic/home');
})

router.get('/contact', (req, res, next) => {
    res.render('basic/contact');
})

module.exports = router;