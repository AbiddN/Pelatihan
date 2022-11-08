'use strict';
require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = ({ _id, username }) => {
  return jwt.sign(
    {
      _id,
      username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
};

module.exports = { createToken };
