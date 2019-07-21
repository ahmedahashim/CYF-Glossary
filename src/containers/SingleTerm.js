import React, { Component, Fragment } from "react";
import "./SingleTerm.css";
import SingleDefinition from "./SingleDefinition";
import SingleResources from "./SingleResources";
import SingleRelated from "./SingleRelated";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { Fetcher } from "./fetcher.js";
const fetcher = new Fetcher();
const code = `function add(a, b) {
  return a + b;
}
`;

class SingleTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: null,
      code: code
    };
  }

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
          <SingleDefinition definition={this.state.term.definition} />
          <h2>Code Example</h2>
          <hr className="term-hr" />
          <Editor
            value={this.state.code}
            onValueChange={code => this.setState({ code })}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              backgroundColor: "#F7F7F7",
              width: "50%"
            }}
          />
          <h2>Additional Resources</h2>
          <hr className="term-hr" />
          <SingleResources
            content={this.state.term.resources}
            name="resources"
            placeholder="Resource URL"
            id={this.state.term._id}
          />
          <h2>Related Terms</h2>
          <hr className="term-hr" />
          <SingleRelated
            content={this.state.term.related_terms}
            name="related_terms"
            placeholder="Related Term"
            id={this.state.term._id}
          />
        </Fragment>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container mb-2">
          {this.state.term === null ? null : this.content()}
        </div>
      </Fragment>
    );
  }
}

export default SingleTerm;
