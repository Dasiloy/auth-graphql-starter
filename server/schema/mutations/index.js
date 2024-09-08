const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = graphql;

const authService = require("../../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: require("../types/user_type"),
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        password: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, { email, password }, req) {
        return authService.signup({
          email,
          password,
          req,
        });
      },
    },
    logout: {
      type: require("../types/user_type"),
      resolve(_, __, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
    login: {
      type: require("../types/user_type"),
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        password: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(_, { email, password }, req) {
        return authService.login({
          email,
          password,
          req,
        });
      },
    },
  },
});

module.exports = mutation;
