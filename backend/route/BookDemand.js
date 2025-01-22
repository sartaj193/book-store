import express from "express";
import { addBookDetails } from "../controllers/bookdemandcontroller.js";
const router = express.Router();
router.post("/bookdemand", addBookDetails);
export default router;
