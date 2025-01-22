import mongoose from "mongoose";

const bookdemandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bookdetails: {
    type: String,
    required: true,
  },
  additionalnotes: {
    type: String,
    required: true,
  },
});

const BookDemand = mongoose.model("BookDemand", bookdemandSchema);
export default BookDemand;
