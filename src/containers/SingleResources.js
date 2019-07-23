import React, { Component, Fragment } from "react";
import SingleResourceInput from "./SingleResourceInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";

export default class SingleResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      resources: this.props.content,
      addResource: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.content !== prevProps.content) {
      this.setState({
        resources: this.props.content
      });
      const newState = this.state.count.slice(0, this.state.count.length - 1);
      this.setState(prevState => ({
        count: newState
      }));
    }
  }

  addContent = () => {
    return this.state.count.map((single, key) => {
      return (
        <SingleResourceInput
          name={this.props.name}
          placeholder={this.props.placeholder}
          key={key}
          id={this.props.id}
          handleUpdate={this.props.handleUpdate}
        />
      );
    });
  };

  HandleClick = e => {
    this.setState(prevState => ({
      count: [...prevState.count, "add"],
      addResource: true
    }));
  };

  HandleRemove = e => {
    const currentState = this.state.count;
    const newState = currentState.slice(0, currentState.length - 1);
    this.setState(prevState => ({
      count: newState,
      addResource: false
    }));
  };

  ResourceContent = () => {
    if (this.state.resources) {
      return (
        <Fragment>
          {this.state.resources.map((link, index) => {
            return (
              <li key={index}>
                <a className="link" href={link}>
                  {link}{" "}
                </a>
              </li>
            );
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
        <div>
          <span className="icon">
            <FontAwesomeIcon
              icon={faPlusSquare}
              onClick={this.HandleClick}
              size="2x"
            />{" "}
          </span>
          {!this.state.addResource ? null : (
            <span className="icon">
              <FontAwesomeIcon
                icon={faMinusSquare}
                onClick={this.HandleRemove}
                size="2x"
              />{" "}
            </span>
          )}
        </div>
      </Fragment>
    );
  }
}
