import JWT from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      res.json({
        success: false,
        message: "not authorized",
      });
    }
    const decode_token = JWT.verify(token, process.env.JWT_SECRET);
    if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      res.json({ success: false, message: "not authorized" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: message.error }), error;
  }
};
export default adminAuth;
