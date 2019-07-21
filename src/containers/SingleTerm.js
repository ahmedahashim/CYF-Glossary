import React, { Component, Fragment } from "react";
import "./SingleTerm.css";

import { Fetcher } from './fetcher.js';
const fetcher = new Fetcher()

class SingleTerm extends Component {
  constructor(props) {

    super(props);
    this.state = {
      term: null

    }
  }

async componentDidMount(){
  const term = await fetcher.fetchTermByPath(this.props)
  this.setState({
       term: term
     })

}

content = () => {
  if(this.state.term !== null){
      return(
        <Fragment>
        <h2>{this.state.term.term}</h2>
        <hr className='term-hr'/>
        <p>{this.state.term.definition}</p>
        <h2>Code Example</h2>
        <hr className='term-hr'/>
        <p>{this.state.term.code_example}</p>
        <h2>Additional Resources</h2>
          <hr className='term-hr'/>
          <ul>
          {this.state.term.resources.map((link, index) => {
            return(
            <li key={index}><a href={link}>{link} </a></li>
            )
          })}

        </ul>
        <h2>Related Terms</h2>
          <hr className='term-hr'/>
          <ul>
          {this.state.term.related_terms.map((related, index) => {
            return(
                <li key={index}>{related}</li>

            )

          })}
          </ul>
          </Fragment>



      )
  }
}

render(){
  console.log(this.props)
  console.log(this.state.term)
    return (
      <Fragment >
      <div className="term-wrapper container">
      {(this.state.term === null) ? null:this.content() }
      </div>
      </Fragment>
    );
  }
}


export default SingleTerm;
