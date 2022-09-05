// main route(page) of our website

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
    });

// exporting the router in order to be used in server 
module.exports = router;