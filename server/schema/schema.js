const graphql = require("graphql");
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: require("./types/root_query_type"),
  mutation: require("./mutations"),
});
