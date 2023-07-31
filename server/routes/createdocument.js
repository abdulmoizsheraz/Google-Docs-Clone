const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const Document = require('../models/document');

const ExtractUser = require('../utils/ExtractUser');

router.post('/', ExtractUser, [
  body('content').exists().withMessage('Write something to get started !'),
], async (req, res) => {
  const { content, title } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const document = new Document({
      content,
      title,
      userId: req.user.id,
    });
    await document.save();
    res.status(200).json({ message: 'Document saved successfully!' });
  } catch (e) {
    res.status(500).json({ error: 'An error occurred while saving the document.' });
  }
});

module.exports = router;
