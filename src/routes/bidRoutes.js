const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/:itemId', authenticateToken, bidController.placeBid);

router.get('/:itemId', bidController.getAllBidsForItem);

module.exports = router;
