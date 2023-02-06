const express = require('express');

const router = express.Router();
const talkers = require('./Talkers');

router.get('/', async (_req, res) => {
    try {
        const content = await talkers.allTalkers();
        if (content.length <= 0) return res.status(200).json([]);
            return res.status(200).json(content);
    } catch (error) {
        return null;
    }
});

module.exports = router;