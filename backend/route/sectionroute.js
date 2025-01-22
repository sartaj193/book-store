import express from "express";

const router = express.Router();
import {
  SectionIO,
  getSectionsByCategory,
  fetchSectionsByCategory,
  fetchSectionsAndBooksByCategory,
} from "../controllers/sectionController.js";
router.post("/section", SectionIO);
router.get("/:categoryId", getSectionsByCategory);
router.get("/:categoryId/sections", fetchSectionsByCategory);
router.get("/category/:categoryId/sections", fetchSectionsAndBooksByCategory);
export default router;
