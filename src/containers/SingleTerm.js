import React, { Component, Fragment } from "react";
import SingleResources from "./SingleResources";
import SingleRelated from "./SingleRelated";
import "./SingleTerm.css";

import { Fetcher } from "./fetcher.js";
const fetcher = new Fetcher();

class SingleTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: null
    };
  }

  HandleUpdate = data => {
    // console.log("running");
    return this.setState({
      term: data
    });
  };

  async componentDidMount() {
    const term = await fetcher.fetchTermByPath(this.props);
    this.setState({
      term: term
    });
  }

  content = () => {
    if (this.state.term !== null) {
      return (
        <Fragment>
          <h2>{this.state.term.term}</h2>
          <hr className="term-hr" />
          <p>{this.state.term.definition}</p>
          <h2>Additional Resources</h2>
          <hr className="term-hr" />
          <SingleResources
            content={this.state.term.resources}
            name="resources"
            placeholder="Resource URL"
            id={this.state.term._id}
            handleUpdate={this.HandleUpdate}
          />

          <h2>Related Terms</h2>
          <hr className="term-hr" />
          <SingleRelated
            content={this.state.term.related_terms}
            name="related_terms"
            placeholder="Related Term"
            id={this.state.term._id}
            handleUpdate={this.HandleUpdate}
          />
        </Fragment>
      );
    }
  };

  render() {
    // console.log(this.props);
    // console.log(this.state.term);
    return (
      <Fragment>
        <div className="term-wrapper single-term-container">
          {this.state.term === null ? null : this.content()}
        </div>
      </Fragment>
    );
  }
}

export default SingleTerm;
