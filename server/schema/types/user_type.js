const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const userType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: {
      type: GraphQLID,
      resolve: (parent) => parent?._id,
    },
    email: { type: GraphQLString },
  },
});

module.exports = userType;
