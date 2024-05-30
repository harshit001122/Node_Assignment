const bidService = require('../services/bidService');

async function placeBid(req, res) {
  try {
    const bid = await bidService.placeBid(req.user.id, req.params.itemId, req.body.bid_amount);
    res.status(201).json(bid);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getAllBidsForItem(req, res) {
  try {
    const bids = await bidService.getAllBidsForItem(req.params.itemId);
    res.json(bids);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  placeBid,
  getAllBidsForItem
};
