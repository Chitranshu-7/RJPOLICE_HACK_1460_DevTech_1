const jwt = require("jsonwebtoken");
const { constData } = require("../config");
const { errors } = require("../utils");
const loggerDao = require('../data-access-object/logger.dao');


verifyToken = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    throw new errors.UnAuthorized("Empty Token");
  }
  try {
    const decoded = jwt.verify(token, constData.SECRET_KEY);
    req.user = decoded.user;
    console.log('Token Verified');
    next();
  } catch (e) {
    let errorMessage;
    if (e instanceof jwt.TokenExpiredError) {
      errorMessage = "Un authenticate request";
      const loggerData = {
        "reqURL" : req.protocol + '://' + req.get('host') + req.originalUrl,
        "reqBody" : ' ',
        "method" : e.message,
        "apiMethod" : "auth",
        "type" : "Error",
        "message" : 'Un authenticate request'
      }
       loggerDao.create(loggerData);
    } else {
      const loggerData = {
        "reqURL" : req.protocol + '://' + req.get('host') + req.originalUrl,
        "reqBody" : ' ',
        "method" : e.message,
        "apiMethod" : "auth",
        "type" : "Error",
        "message" : 'Invalid Token'
      }
      loggerDao.create(loggerData);
      errorMessage = "Invalid Token";
    }
    throw new errors.UnAuthorized(errorMessage);
  }
};

isAdmin = (req, res, next) => {
  if (req.user.role == constData.ADMIN) {
    next();
  } else {
    throw new errors.Forbidden("Require Admin Role!");
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
};
module.exports = authJwt;
