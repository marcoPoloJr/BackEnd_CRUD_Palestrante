const express = require('express');

const router = express.Router();

const tokenGenerator = require('./TokenGenerator');

router.post('/', async (req, res) => {
    try {
        return res.status(200).json({ token: tokenGenerator() });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;