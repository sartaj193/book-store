// models/Section.js

import mongoose from "mongoose";
const SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  book: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Section = mongoose.model("Section", SectionSchema);
export default Section;
