const jwt = require("jsonwebtoken");

const authBusiness = (req, res, next) => {
  try {
    // Get token from headers (common practice)
    const token = req.header("Authorization")

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token provided, authorization denied"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded payload to request
    req.business = decoded;

    // Continue to next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token"
    });
  }
};

module.exports = authBusiness;
