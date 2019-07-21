import React, { Component, Fragment } from "react";
import SingleResourceInput from "./SingleResourceInput";

export default class SingleRelated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      terms: this.props.content
    };
  }

  addContent = () => {
    return this.state.count.map((single, key) => {
      return (
        <SingleResourceInput
          name={this.props.name}
          placeholder={this.props.placeholder}
          key={key}
          id={this.props.id}
        />
      );
    });
  };

  HandleClick = e => {
    this.setState(prevState => ({
      count: [...prevState.count, "add"]
    }));
  };

  ResourceContent = () => {
    if (this.state.terms) {
      return (
        <Fragment>
          {this.state.terms.map((related, index) => {
            return <li key={index}>{related}</li>;
          })}
        </Fragment>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.ResourceContent()}
          {this.state.count.length > 0 ? this.addContent() : null}
        </ul>
        <span>
          <button onClick={this.HandleClick}>Add</button>
        </span>
      </Fragment>
    );
  }
}
