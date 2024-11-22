/*import JWT from "jsonwebtoken";
import userModel from "../models/user.model.js";

// Protected Routes token-based
export const requireSignIn = async (req, res, next) => {
  try {
    // Check if the authorization header exists
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization header missing" });
    }

    const token = req.headers.authorization.split(" ")[1]; // Extract the token
    if (!token) {
      return res.status(401).json({ success: false, message: "Token missing" });
    }

    // Verify token
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode; // Attach the decoded token data to req.user

    next(); // Move to next middleware or route handler
  } catch (error) {
    console.log("JWT Error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

// Admin access middleware
export const isAdmin = async (req, res, next) => {
  try {
    // Check if user is authenticated and has a valid user object
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated or missing user ID in request",
      });
    }

    console.log("Admin check initiated for user:", req.user._id);

    // Find the user by ID, using lean for performance since we don't need Mongoose methods
    const user = await userModel.findById(req.user._id).lean();

    // If user is not found
    if (!user) {
      console.log("User not found:", req.user._id);
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Log user role for debugging
    console.log("User role:", user.role);

    // Check if the user has admin privileges (role === 1)
    if (user.role !== 1) {
      console.log("Unauthorized access attempt by user:", user._id);
      return res.status(403).json({
        success: false,
        message: "Unauthorized Access: Admins only",
      });
    }

    // User is admin, allow to proceed
    console.log("User is admin, access granted.");
    next();
  } catch (error) {
    console.error("Admin Middleware Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Error in admin middleware",
      error: error.message,
    });
  }
};*/
