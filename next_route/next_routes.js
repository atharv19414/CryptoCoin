const routes = require("next-routes")();

routes
  .add("/projects/view/:address", "/projects/view/viewProject")
  .add("/projects/view/requests/:address", "/projects/view/viewRequests")
  .add("/projects/create/requests/:address", "/projects/create/newRequest");

module.exports = routes;
