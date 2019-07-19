import React, { Component, Fragment } from "react";



export default class SingleResourceInput extends Component {
  constructor(props) {
    super(props);
    }


    render() {
        return (
          <Fragment>
          <li>
          <input
            placeholder={this.props.placeholder}
            type='text'
            name={this.props.name}
            noValidate
          />
          </li>
          </Fragment>
        )
    }
}
