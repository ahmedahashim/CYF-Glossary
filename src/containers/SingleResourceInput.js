import React, { Component, Fragment } from "react";
import { Fetcher } from "./fetcher.js";
const fetcher = new Fetcher();

export default class SingleResourceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    };
  }

  HandlePushNewRelated = e => {
    const input = e.target.value;
    this.setState({
      input: input
    });
  };

  HandleSubmitNewRelated = e => {
    const reqBody = {
      id: this.props.id,
      field: this.props.name,
      value: this.state.input
    };
    console.log(reqBody);
  };

  render() {
    return (
      <Fragment>
        <li>
          <input
            placeholder={this.props.placeholder}
            type="text"
            name={this.props.name}
            noValidate
            onChange={this.HandlePushNewRelated}
          />
          <span
            className="add-margin-left"
            onClick={this.HandleSubmitNewRelated}
          >
            X
          </span>
        </li>
      </Fragment>
    );
  }
}
