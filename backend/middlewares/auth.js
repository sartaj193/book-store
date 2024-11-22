import JWT from "jsonwebtoken";

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
