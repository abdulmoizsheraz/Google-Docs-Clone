const { Schema, model } = require("mongoose")
const mongoose = require('mongoose');
const Document = new Schema({
    content: { type: String, required: true },
    title: { type: String, default: 'Untitled' },
    creationDate: { type: Date, default: Date.now() },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
})

module.exports = model("Document", Document)