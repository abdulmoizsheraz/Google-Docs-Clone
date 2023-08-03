const express = require('express');
const router = express.Router();
const Document = require('../models/document');
const ExtractUser = require('../utils/ExtractUser');

router.put('/updatedocument/:id', ExtractUser, async (req, res) => {
  console.log(req.params.id)
  try {
    const { content, title } = req.body;
    const updatedDocument = {};

    if (content) {
      updatedDocument.content = content;
    }

    if (title) {
      updatedDocument.title = title;
    }

    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).send('Document not found.');
    }

    if (document.userId.toString() !== req.user.id.toString()) {
      return res.status(401).send('Unauthorized');
    }

    const updatedDoc = await Document.findByIdAndUpdate(
      req.params.id,
      { $set: updatedDocument },
      { new: true }
    );
    res.status(200).json({ message: 'Document saved successfully!' });
  } catch (err) {
    console.error('Error updating document:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
