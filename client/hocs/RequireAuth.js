import React, { Component } from "react";
import { query } from "../lib/graphql";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.user && !nextProps.data.loading) {
        hashHistory.push("/login");
      }
    }

    render() {
      if (this.props.data.loading) {
        return <div>Loading...</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(query)(RequireAuth);
};
