import React, { Component, Fragment } from "react";
import SingleResources from "./SingleResources";
import SingleRelated from "./SingleRelated";
import "./SingleTerm.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SingleSearchResult.css";
import "./Grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Fetcher } from "./fetcher.js";
const fetcher = new Fetcher();
export default class SingleTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: null
    };
  }

  HandleUpdate = data => {
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

  SingleTermContent = () => {
    if (this.state.term === null) {
      return;
    }

    const term = this.state.term;

    return (
      <div className="results-wrapper">
        <div className="sm-col-12 single-result">
          <h1 className="term-heading">
            <span className="term-icon">
              <FontAwesomeIcon icon={faBook} size="1x" />{" "}
            </span>
            <span className="term-heading-decoration">{term.term}</span>
          </h1>
          <div className="content">
            <p className="text-muted">
              Added by: <b>Guest</b>
            </p>
            <p>{term.definition}</p>
          </div>
          <div className="term-heading">
            <span className="term-icon">
              <FontAwesomeIcon icon={faGlobe} size="1x" />{" "}
            </span>
            <span className="term-heading-decoration">Learn more</span>
          </div>
          <SingleResources
            content={term.resources}
            links={term.resources_url}
            url="resources_url"
            name="resources"
            placeholderURL="Resource URL"
            placeholderName="Resource Name"
            id={term._id}
            handleUpdate={this.HandleUpdate}
          />
          <div className="term-heading">
            <span className="term-icon">
              <FontAwesomeIcon icon={faLink} size="1x" />{" "}
            </span>
            <span className="term-heading-decoration">Related Terms</span>
          </div>
          <SingleRelated
            content={term.related_terms}
            name="related_terms"
            placeholder="Related Term"
            id={term._id}
            handleUpdate={this.HandleUpdate}
          />
        </div>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        {this.state.term !== null ? this.SingleTermContent() : null}
      </Fragment>
    );
  }
}
