const express = require('express');
const router = express.Router();
const Document = require('../models/document');
const ExtractUser = require('../utils/ExtractUser');

router.delete('/deletedocument/:id', ExtractUser, async (req, res) => {
   console.log(req.params.id)
 try {
    // finding notes
    let document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).send('Document not found.');
    }

    // Check if the document's userId matches the authenticated user's id
    if (document.userId.toString() !== req.user.id.toString()) {
      return res.status(401).send('Unauthorized');
    }

   document =await Document.findByIdAndDelete(req.params.id);
   res.status(200).send("Your Document ahs been deleted Succesfully");
  } catch (err) {
    console.error('Error updating document:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
