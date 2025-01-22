import userModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../privacy/authPrivacy.js";
import JWT from "jsonwebtoken";

// Register Controller
export const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validations
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "email and password is required" });
    }

    // Check if user exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already registered. Please log in.",
      });
    }

    // Register user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      email,

      password: hashedPassword,
      // Default role for users
    }).save();

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
};

// Login Controller

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Verify the password
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate a JWT token
    const payload = { userId: user._id, email: user.email, role: user.role };
    const token = JWT.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d", // Use environment variable for flexibility
    });

    // Respond with the token and user details (excluding sensitive info)
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
};

// userController.js

// Admin Login Controller
/*import JWT from "jsonwebtoken";

export const googleAuthCallback = (req, res) => {
  // Successful authentication, create JWT token
  const token = JWT.sign(
    { userId: req.user._id, email: req.user.email, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
  // Redirect to frontend with token
  res.redirect(
    `${process.env.FRONTEND_URL}/auth/google/success?token=${token}`
  );
};*/

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = JWT.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d", // Set an expiration time for consistency
      }); // Admin token
      return res.status(200).json({ success: true, token });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during admin login",
    });
  }
};

// Uncomment for password reset feature
/*
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).send({ message: "Email and new password are required" });
    }

    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({ success: false, message: "Wrong Email or Answer" });
    }

    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    return res.status(200).send({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error("Password reset error:", error);
    return res.status(500).send({ success: false, message: "Something went wrong" });
  }
};
*/

// Uncomment for testing controller
/*
export const testController = (req, res) => {
  try {
    return res.send("Protected Route");
  } catch (error) {
    console.error("Test error:", error);
    return res.send({ error });
  }
};
*/

import nodemailer from "nodemailer";
import crypto from "crypto";

// Forgot Password Controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = await hashPassword(resetToken);

    // Save the hashed reset token to the user's document
    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpires = Date.now() + 3600000; // 1-hour expiration
    await user.save();

    // Send reset email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Password Reset",
      text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Reset link sent to email" });
  } catch (error) {
    console.error("Forgot Password error:", error);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
};

// Reset Password Controller
/*export const resetPasswordController = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    // Validate input
    if (!resetToken || !newPassword) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Hash the reset token and find the user
    const user = await userModel.findOne({
      resetPasswordToken: await hashPassword(resetToken),
      resetPasswordExpires: { $gt: Date.now() }, // Ensure token is not expired
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // Update the password
    user.password = await hashPassword(newPassword);
    user.resetPasswordToken = undefined; // Clear the reset token
    user.resetPasswordExpires = undefined;
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset Password error:", error);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
};
*/

// Assuming you're using bcrypt
import bcrypt from "bcrypt";
export const resetPasswordController = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    if (!resetToken || !newPassword) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Find the user based on the expiration time
    const user = await userModel.findOne({
      resetPasswordExpires: { $gt: Date.now() }, // Ensure token hasn't expired
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // Compare the incoming token with the hashed token stored in the database
    const isTokenValid = await bcrypt.compare(
      resetToken,
      user.resetPasswordToken
    );
    if (!isTokenValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // Update the password
    user.password = await hashPassword(newPassword);
    user.resetPasswordToken = undefined; // Clear the token
    user.resetPasswordExpires = undefined;
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset Password error:", error);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
};
