import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token contains the correct admin credentials
    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.password !== process.env.ADMIN_PASSWORD) {
      return res.status(403).json({ success: false, message: "Access Denied. Unauthorized." });
    }

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("Error verifying admin token:", error);
    return res.status(401).json({ success: false, message: "Invalid token. Please log in again." });
  }
};

export default adminAuth;
