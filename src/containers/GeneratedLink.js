import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class GeneratedLink extends Component {

render(){
    return (
      <Fragment >
      <Link className='text-center' to={{ pathname: `/${this.props.topic}/${this.props.term}`, state: { post:this.props.term} }}>
      Unqiue Link

      </Link>
      </Fragment>
    );
  }
}


export default GeneratedLink;
