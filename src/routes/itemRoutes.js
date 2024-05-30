const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticateToken = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

router.post('/', authenticateToken, upload.single('image'), itemController.createItem);

router.get('/', itemController.getAllItems);

router.get('/:id', itemController.getItemById);

router.put('/:id', authenticateToken, itemController.updateItemById);

router.delete('/:id', authenticateToken, itemController.deleteItemById);

module.exports = router;
