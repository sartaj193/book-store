import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: {
    type: String,

    required: true,
  },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const AddBooks = mongoose.model("AddBooks", bookSchema);
export default AddBooks;
