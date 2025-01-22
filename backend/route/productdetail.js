import express from "express";
import upload from "../middlewares/multer.js"; // Import Multer for image handling

import {
  addProductDetail,
  getProductDetail,
} from "../controllers/DetailController.js";

const router = express.Router();

// Route to add product details with image uploads
/*router.post(
  "/addDetail",
  upload.fields([
    { name: "mainImage", maxCount: 1 }, // Handle main image upload (optional)
    { name: "additionalImages", maxCount: 5 },
  ]),
  addProductDetail
);

export default router;*/

// Route to upload product detail with images
router.post("/add-detail", upload.single("mainImage"), addProductDetail);
router.get("/get-detail/:productId", getProductDetail);
export default router;
