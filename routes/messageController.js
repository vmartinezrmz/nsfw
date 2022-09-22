const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    console.log(req.query);

    res.end();
});

router.post('/test', (req, res) => {
    console.log(req.body);

    res.end();
});

module.exports = router;
