import React, { Component, Fragment } from "react";
import { Fetcher } from "./fetcher.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
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
    this.sendFetch(reqBody);
  };



  sendFetch(obj) {
    return fetch(
      `https://cyf-glossary-api.glitch.me/api/pushOne/${this.props.id}`,
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        if(response._id){
          this.props.handleUpdate(response)
        }
      });
  }


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
                <span className="add-margin-left icon">
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    onClick={this.HandleSubmitNewRelated}
                  />{" "}
                </span>
                
        </li>
      </Fragment>
    );
  }
}
