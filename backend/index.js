import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./route/auth.route.js"; // Ensure this path is correct
import productRoutes from "./route/product.route.js"; // Ensure this path is correct
import { connectDB } from "./lib/db.js"; // Ensure this path is correct
//import cartRoutes from "./route/CartRoute.js"
//import ordersroute from "./route/ordersroute.js";
//import orderRoute from "./route/orderRoute.js";
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";
import productdetail from "./route/productdetail.js";
import categoryroute from "./route/category.route.js";
import section from "./route/sectionroute.js";
import addBooks from "./route/addBookroute.js";
import addAuthor from "./route/AddAuthor.js";
import authorSection from "./route/AuthorSection.js";
import authorboook from "./route/authorbook.js";
import bookdemand from "./route/BookDemand.js";
dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads")); // Uncommented line
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
//app.use("/api/cart",cartRoutes)
//app.use("/api/order", ordersroute);
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
app.use("/api/detail", productdetail);
app.use("/api/category", categoryroute);
app.use("/api/section", section);
app.use("/api/books", addBooks);
app.use("/api/author", addAuthor);
app.use("/api/authors", authorboook);
app.use("/api/bookdemand", bookdemand);
app.use("/api/authorsection", authorSection);

//app.use("/api/cart", cartRoute);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import authRoutes from "./route/auth.route.js";
import productRoutes from "./route/product.route.js";
import { connectDB } from "./lib/db.js";
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";
import productdetail from "./route/productdetail.js";
import categoryroute from "./route/category.route.js";
import section from "./route/sectionroute.js";
import addBooks from "./route/addBookroute.js";
import addAuthor from "./route/AddAuthor.js";
import authorSection from "./route/AuthorSection.js";
import authorboook from "./route/authorbook.js";
import User from "./models/user.model.js";
import googleAuthRoutes from "./route/auth.route.js";

dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Check for required environment variables
if (!process.env.SESSION_SECRET) {
  console.error("SESSION_SECRET is not set in the environment variables");
  process.exit(1);
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error(
    "GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is not set in the environment variables"
  );
  process.exit(1);
}

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Passport configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            address: "Not provided", // Default value
            phone: "Not provided", // Default value
            password: "GoogleOAuth", // Default value (avoid real passwords)
            role: 0, // Default role
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/auth", googleAuthRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
app.use("/api/detail", productdetail);
app.use("/api/category", categoryroute);
app.use("/api/section", section);
app.use("/api/books", addBooks);
app.use("/api/author", addAuthor);
app.use("/api/authors", authorboook);
app.use("/api/authorsection", authorSection);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
*/

/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import JWT from "jsonwebtoken";
import authRoutes from "./route/auth.route.js";
import productRoutes from "./route/product.route.js";
import { connectDB } from "./lib/db.js";
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";
import productdetail from "./route/productdetail.js";
import categoryroute from "./route/category.route.js";
import section from "./route/sectionroute.js";
import addBooks from "./route/addBookroute.js";
import addAuthor from "./route/AddAuthor.js";
import authorSection from "./route/AuthorSection.js";
import authorboook from "./route/authorbook.js";
import User from "./models/user.model.js";

dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Passport configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            address: "Not provided",
            phone: "Not provided",
            password: "GoogleAuth",
            role: 0,
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Google Auth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = JWT.sign(
      { userId: req.user._id, email: req.user.email, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.redirect(
      `${process.env.FRONTEND_URL}/auth/google/success?token=${token}`
    );
  }
);

// Routes
app.use("/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
app.use("/api/detail", productdetail);
app.use("/api/category", categoryroute);
app.use("/api/section", section);
app.use("/api/books", addBooks);
app.use("/api/author", addAuthor);
app.use("/api/authors", authorboook);
app.use("/api/authorsection", authorSection);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
*/
/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import JWT from "jsonwebtoken";
import authRoutes from "./route/auth.route.js";
import productRoutes from "./route/product.route.js";
import { connectDB } from "./lib/db.js";
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";
import productdetail from "./route/productdetail.js";
import categoryroute from "./route/category.route.js";
import section from "./route/sectionroute.js";
import addBooks from "./route/addBookroute.js";
import addAuthor from "./route/AddAuthor.js";
import authorSection from "./route/AuthorSection.js";
import authorboook from "./route/authorbook.js";
import User from "./models/user.model.js";

dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Check for required environment variables
if (!process.env.SESSION_SECRET || !process.env.JWT_SECRET) {
  console.error(
    "SESSION_SECRET or JWT_SECRET is not set in the environment variables"
  );
  process.exit(1);
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error(
    "GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is not set in the environment variables"
  );
  process.exit(1);
}

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Passport configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            address: "Not provided",
            phone: "Not provided",
            password: "GoogleOAuth",
            role: 0,
          });
          await user.save();
        } else if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Google Auth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = JWT.sign(
      { userId: req.user._id, email: req.user.email, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.redirect(
      `${process.env.FRONTEND_URL}/auth/google/success?token=${token}`
    );
  }
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
app.use("/api/detail", productdetail);
app.use("/api/category", categoryroute);
app.use("/api/section", section);
app.use("/api/books", addBooks);
app.use("/api/author", addAuthor);
app.use("/api/authors", authorboook);
app.use("/api/authorsection", authorSection);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
*/
/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import JWT from "jsonwebtoken";
import { connectDB } from "./lib/db.js";
import User from "./models/user.model.js";
import authRoutes from "./route/auth.route.js";

dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Environment variables check
if (!process.env.SESSION_SECRET || !process.env.JWT_SECRET) {
  console.error(
    "SESSION_SECRET or JWT_SECRET is not set in environment variables"
  );
  process.exit(1);
}
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error(
    "GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is not set in environment variables"
  );
  process.exit(1);
}

// Middlewares
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user already exists
        let user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
          // Update Google ID if not set
          if (!user.googleId) {
            user.googleId = profile.id;
            await user.save();
          }
        } else {
          // Create new user
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 0, // Default role
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Routes
app.use("/auth", authRoutes);

// Google OAuth callback route
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    try {
      // Create JWT token
      const token = JWT.sign(
        { userId: req.user._id, email: req.user.email, role: req.user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      // Redirect to frontend with token
      res.redirect(
        `${process.env.FRONTEND_URL}/auth/google/success?token=${token}`
      );
    } catch (error) {
      console.error("Error in Google Callback:", error);
      res.redirect(`${process.env.FRONTEND_URL}/auth/google/error`);
    }
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "An unexpected error occurred" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import authRoutes from "./route/auth.route.js";
import productRoutes from "./route/product.route.js";
import { connectDB } from "./lib/db.js";
import ordersroute from "./route/ordersroute.js";
import cartsRoute from "./route/cartsroute.js";
import productdetail from "./route/productdetail.js";
import categoryroute from "./route/category.route.js";
import section from "./route/sectionroute.js";
import addBooks from "./route/addBookroute.js";
import addAuthor from "./route/AddAuthor.js";
import authorSection from "./route/AuthorSection.js";
import authorboook from "./route/authorbook.js";

import User from "./models/user.model.js";
import googleAuthRoutes from "./route/auth.route.js";
dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Passport configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 0, // Default role
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", googleAuthRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", ordersroute);
app.use("/api/cart", cartsRoute);
app.use("/api/detail", productdetail);
app.use("/api/category", categoryroute);
app.use("/api/section", section);
app.use("/api/books", addBooks);
app.use("/api/author", addAuthor);
app.use("/api/authors", authorboook);
app.use("/api/authorsection", authorSection);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});*/

/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./route/auth.route.js"; // Authentication routes
import productRoutes from "./route/product.route.js"; // Product routes
import ordersRoute from "./route/ordersroute.js"; // Orders routes
import cartsRoute from "./route/cartsroute.js"; // Cart routes
import productDetailRoute from "./route/productdetail.js"; // Product details routes
import { connectDB } from "./lib/db.js"; // Database connection function

dotenv.config(); // Load environment variables

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// API Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/product", productRoutes); // Product-related routes
app.use("/api/order", ordersRoute); // Orders-related routes
app.use("/api/cart", cartsRoute); // Cart-related routes
app.use("/api/detail", productDetailRoute); // Product details routes

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
*/
