const userRoutes = require("./user.route");

const ROUTES = {
  USER: "/user"
};

module.exports = (router) => {
  userRoutes(router, ROUTES.USER);
};
