import express from "express";
import upload from "../middlewares/multer.js";
import {
  addAuthorBook,
  //fetchAuthorSectionsWithBooks,
  fetchAuthorSectionsAndBooksByCategory,
} from "../controllers/authorBook.js";

const router = express.Router();

router.post("/authorbookk", upload.array("images", 4), addAuthorBook);
//router.get("/sections-with-books", fetchAuthorSectionsWithBooks);
router.get(
  "/author/:authorId/authorsection",
  fetchAuthorSectionsAndBooksByCategory
);
export default router;
