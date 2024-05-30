const itemService = require('../services/itemService');

async function createItem(req, res) {
  try {
    const newItem = await itemService.createItem(req.body, req.file);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getAllItems(req, res) {
  try {
    const items = await itemService.getAllItems(req.query.page, req.query.limit);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getItemById(req, res) {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateItemById(req, res) {
  try {
    const updatedItem = await itemService.updateItemById(req.params.id, req.body);
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteItemById(req, res) {
  try {
    await itemService.deleteItemById(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById
};
