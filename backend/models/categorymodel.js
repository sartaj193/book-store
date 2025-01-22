import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
  slug: {
    name: String,
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
