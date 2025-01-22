/*import JWT from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "not autherized" });
  }
  try {
    const token_decode = JWT.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message }), error;
  }
};
*/

/*mport JWT from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not authorized. Token is missing or invalid.",
    });
  }

  try {
    const token = authHeader.split(" ")[1]; // Extract the token from the "Bearer" scheme
    const decoded = JWT.verify(token, process.env.JWT_SECRET); // Verify the token

    req.body.userId = decoded.userId; // Attach the userId to the request body
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      success: false,
      message: "Not authorized. Invalid or expired token.",
    });
  }
};
*/
import JWT from "jsonwebtoken";
export const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("Authorization Header Missing or Invalid");
    return res.status(401).json({
      success: false,
      message: "Not authorized. Token is missing or invalid.",
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    console.log("Extracted Token:", token);

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized. Invalid or expired token.",
    });
  }
};
