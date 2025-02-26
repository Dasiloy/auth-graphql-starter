import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/App";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  networkInterface: createNetworkInterface({
    uri: "/graphql",
    opts: {
      credentials: "same-origin",
    },
  }),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='login' component={Login} />
          <Route path='signup' component={Signup} />
          <Route path='dashboard' component={Dashboard} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
