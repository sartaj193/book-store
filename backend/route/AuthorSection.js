import express from "express";
import {
  AuthorSectionIO,
  getAuthorSectionsByCategory,
  fetchAuthorSectionsByCategory,
  fetchAuthorSectionsAndBooksByCategory,
} from "../controllers/authorSection.js";

const router = express.Router();
router.post("/authorsection", AuthorSectionIO);
router.get("/:authorId", getAuthorSectionsByCategory);
router.get("/:autherId/sections", fetchAuthorSectionsByCategory);
router.get("/author/:authorId/sections", fetchAuthorSectionsByCategory);
router.get(
  "/author/:authorId/authorsections",
  fetchAuthorSectionsAndBooksByCategory
);
export default router;
