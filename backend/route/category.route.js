/*import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { productController } from "../controllers/productController.js";
import formidable from "formidable";

const router = express.Router();

// Create an instance of formidable
const form = formidable({ multiples: true });

// Route to create a product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  (req, res, next) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: "Error parsing the files" });
      }
      // Attach fields and files to the request object
      req.fields = fields;
      req.files = files;
      next();
    });
  },
  productController
);

export default router;*/
import express from "express";
import upload from "../middlewares/multer.js";
import {
  getAllCategories,
  createCategory,
  deleteCategory,
  CategoryIO,
  getCategorySections,
} from "../controllers/categoryController.js";
const router = express.Router();
router.get("/te", getAllCategories);
router.post("/createCategory", upload.single("image"), createCategory);
router.delete("/deletit/:id", deleteCategory);
router.put("/updateIt/:id", CategoryIO);
router.get("/:id/sections", getCategorySections);
export default router;
