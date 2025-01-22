// models/Section.js

import mongoose from "mongoose";
const AuthorsectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "AuthorBook" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Authorsection = mongoose.model("Authorsection", AuthorsectionSchema);
export default Authorsection;
