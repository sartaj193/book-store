import express from "express";
//import passport from "passport";
import {
  registerController,
  loginController,
  adminLogin,
  forgotPasswordController,
  resetPasswordController,
  //testController,
  //forgotPasswordController,
} from "../controllers/authController.js";
//import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.post("/admin", adminLogin);
router.post("/forgot-password", forgotPasswordController);

// Reset Password route
router.post("/reset-password", resetPasswordController);
//Forgot Password || POST
//router.post("/forgot-password", forgotPasswordController);

//test routes
//router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
//router.get("/user-auth", requireSignIn, (req, res) => {
//res.status(200).send({ ok: true });
//});
//protected Admin route auth
///router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
//res.status(200).send({ ok: true });
//});

export default router;

/*import express from "express";
import passport from "passport";
import { googleAuthCallback } from "../controllers/authController.js";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleAuthCallback
);

export default router;
*/
