const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const jwtKey = require('../_secrets/keys').jwtKey;

const saltRounds = 10;

// quickly see what this file exports
module.exports = {
  authenticate,
  hashPass
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

function hashPass(req, res, next) {
  req.body.password = bcrypt.hashSync(req.body.password, 14);
  next();
}