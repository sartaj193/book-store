import mongoose from "mongoose";
const authorbookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  authors: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  authorsection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authorsection",
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

const AddAuthorBooks = mongoose.model("AddAuthorBooks", authorbookSchema);
export default AddAuthorBooks;
