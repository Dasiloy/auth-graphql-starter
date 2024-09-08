import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { signup as mutation } from "../lib/graphql";
import { graphql } from "react-apollo";
import { query } from "../lib/graphql";
import { hashHistory } from "react-router";

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm errors={[]} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignupForm));
