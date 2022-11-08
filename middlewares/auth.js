const verifyToken = async (req, res, next) => {
  let token = req.headers['auth'];

  if (!token) {
    return res.status(401).json({
      message: "mana tokennya cuy? hadehhh",
    });
  }

  /* Check if token is valid */
  if (token == 'iniadalahtoken') {
    next();
  } else {
    return res.status(500).json({
      message: "tokenmu salah",
    });
  }
};

module.exports = { verifyToken };
