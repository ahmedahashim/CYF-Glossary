import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SingleSearchResult.css";

export default class SingleSearchResult extends Component {
  render() {
    return (
      <div className="col-sm-12 single-result" key={this.props.key}>
        <Link className='single-result-link' to={`/${this.props.topicSlug}/${this.props.termSlug}`} >
          {this.props.term}
        </Link>
        <div className="content">
          <p>{this.props.definition}</p>
        </div>
        <Link to={`/search/${this.props.topic}`}>
        <span className="badge result-badge-topic result-badge-margin">
        {this.props.topic}
        </span>
        </Link>
          
       
      </div>
    );
  }
}
