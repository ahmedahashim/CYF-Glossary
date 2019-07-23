import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SingleSearchResult.css";

export default class SingleSearchResult extends Component {
  render() {
    return (
      <div className="col-sm-12 single-result mb-2" key={this.props.key}>
        <Link to={`/${this.props.topicSlug}/${this.props.termSlug}`} />
        <a href="https://developer.mozilla.org/en-US/docs/Web">
          {this.props.term}
        </a>
        <div className="content">
          <p>{this.props.definition}</p>
        </div>

        <span className="badge result-badge-topic result-badge-margin">
          {this.props.topic}
        </span>
      </div>
    );
  }
}
