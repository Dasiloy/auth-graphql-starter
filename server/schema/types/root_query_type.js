const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: require("./user_type"),
      resolve(_, __, req) {
        return req.user;
      },
    },
  },
});

module.exports = RootQueryType;
