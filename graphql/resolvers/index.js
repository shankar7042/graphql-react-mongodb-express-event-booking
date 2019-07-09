const authResolver = require("./auth");
const bookingResolver = require("./booking");
const eventResolver = require("./event");

const rooResolver = {
  ...authResolver,
  ...bookingResolver,
  ...eventResolver
};

module.exports = rooResolver;
