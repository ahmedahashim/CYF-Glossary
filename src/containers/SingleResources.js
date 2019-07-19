import React, { Component, Fragment } from "react";
import SingleResourceInput from "./SingleResourceInput"



export default class SingleResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: []
    }
    }

addContent = () => {
return this.state.count.map(single => {
return(
<SingleResourceInput name={this.props.name} placeholder={this.props.placeholder} />
)

})




}

HandleClick = e =>{
  this.setState((prevState) => ({
  count: [...prevState.count, 'add'],
}));
}


ResourceContent = () => {
  if(this.props.content){
    return(
      <Fragment>
      {this.props.content.map((link, index) => {
        return(
        <li key={index}><a href={link}>{link} </a></li>
        )
      })}
</Fragment>



    )

  }


}



    render() {
        return (
          <Fragment>
          <ul>
          {this.ResourceContent()}
          {(this.state.count.length > 0) ? this.addContent(): null}
          </ul>
          <span><button onClick={this.HandleClick}>Add</button></span>
          </Fragment>
        )
    }
}
