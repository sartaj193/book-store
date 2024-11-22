import express from "express"
import { authUser } from "../middlewares/auth";



const router =express.Router();

router.post("/get",authUser,getCart)
router.post("/add",authUser,addCart)
router.post("/update",authUser,updateCart)