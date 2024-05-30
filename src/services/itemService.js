const { Item } = require('../models');

async function createItem(itemData, imageFile) {
  const newItem = await Item.create({
    ...itemData,
    image_url: imageFile ? `/uploads/${imageFile.filename}` : null,
  });
  return newItem;
}

async function getAllItems(page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  const items = await Item.findAndCountAll({
    offset,
    limit,
  });
  return items;
}

async function getItemById(itemId) {
  const item = await Item.findByPk(itemId);
  return item;
}

async function updateItemById(itemId, updatedData) {
  const item = await Item.findByPk(itemId);
  if (!item) {
    throw new Error('Item not found');
  }
  const updatedItem = await item.update(updatedData);
  return updatedItem;
}

async function deleteItemById(itemId) {
  const item = await Item.findByPk(itemId);
  if (!item) {
    throw new Error('Item not found');
  }
  await item.destroy();
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
};
