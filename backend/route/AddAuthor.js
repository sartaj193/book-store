import express from "express";
import { createAuthor, getAllAuthor } from "../controllers/addAuthor.js";
import upload from "../middlewares/multer.js";
const route = express.Router();

route.post("/addAuthor", upload.single("image"), createAuthor);
route.get("/allAuthor", getAllAuthor);
export default route;
