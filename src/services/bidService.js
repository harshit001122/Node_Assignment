const { Bid } = require('../models');

async function placeBid(userId, itemId, bidAmount) {
  const newBid = await Bid.create({ user_id: userId, item_id: itemId, bid_amount: bidAmount });
  return newBid;
}

async function getAllBidsForItem(itemId) {
  const bids = await Bid.findAll({ where: { item_id: itemId } });
  return bids;
}

module.exports = {
  placeBid,
  getAllBidsForItem,
};
