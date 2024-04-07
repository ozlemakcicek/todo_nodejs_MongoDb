import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const headerAuth = req.headers["authorization"];

  const token = headerAuth.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized User..." });
    }
    next();
  });
};
