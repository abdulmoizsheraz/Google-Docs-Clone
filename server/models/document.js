const { Schema, model } = require("mongoose")

const Document = new Schema({
    content: { type: String, required: true },
    title: { type: String, default: 'Untitled' },
    author: { type: String, default: 'Anonymous' },
    creationDate: { type: Date, default: Date.now() },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
})

module.exports = model("Document", Document)