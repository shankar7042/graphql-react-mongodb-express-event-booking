const express = require("express");
const graphqlHttp = require("express-graphql");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
const isAuth = require("./middleware/is-auth");

const app = express();
app.use(express.json());
dotenv.config();

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => console.log("Server started"));
    console.log("Mongo db Connected");
  })
  .catch(err => console.log(err));
