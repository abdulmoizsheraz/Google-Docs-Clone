const express = require('express');
const router = express.Router();
const Document = require('../models/document');
const ExtractUser=require("../utils/ExtractUser")

router.get('/',ExtractUser, async (req, res) => {
  try {
    const userId = req.user.id 
    const documents = await Document.find({ userId: userId });

    if (documents.length === 0) {
      return res.status(404).json({ error: 'No documents found for the specified user.' });
    }

    res.status(200).json(documents);
  } catch (err) {
    console.error('Error retrieving documents:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
