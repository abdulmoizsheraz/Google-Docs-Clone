const express = require('express');
const router = express.Router();
const Document = require('../models/document');
const ExtractUser = require('../utils/ExtractUser');

router.get('/getdocument/:id', ExtractUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const documentId = req.params.id;

    // Find a document with the specified ID and belonging to the user
    const document = await Document.findOne({ _id: documentId, userId: userId });

    if (!document) {
      return res.status(404).json({ error: 'Document not found for the specified user and ID.' });
    }

    res.status(200).json(document);
  } catch (err) {
    console.error('Error retrieving document:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
