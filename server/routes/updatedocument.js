const express = require('express');
const router = express.Router();
const Document = require('../models/document');
const ExtractUser = require('../utils/ExtractUser');

// Assuming the ExtractUser middleware is correctly implemented and adds the user information to req.user
router.put('/', ExtractUser, async (req, res) => {
   console.log(req.params.id)
 // try {
//     const { content, title } = req.body;
//     const updatedDocument = {};

//     if (content) {
//       updatedDocument.content = content;
//     }

//     if (title) {
//       updatedDocument.title = title;
//     }

//     const document = await Document.findById(req.params.id);

//     if (!document) {
//       return res.status(404).send('Document not found.');
//     }

//     // Check if the document's userId matches the authenticated user's id
//     if (document.userId.toString() !== req.user.id.toString()) {
//       return res.status(401).send('Unauthorized');
//     }

//     // Use the findByIdAndUpdate method to update the document
//     const updatedDoc = await Document.findByIdAndUpdate(
//       req.params.id,
//       { $set: updatedDocument },
//       { new: true }
//     );

//     res.json({ document: updatedDoc });
//   } catch (err) {
//     console.error('Error updating document:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
});

module.exports = router;
