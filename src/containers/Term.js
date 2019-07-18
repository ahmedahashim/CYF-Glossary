import React from "react";
import stripHtml from "string-strip-html";
import "./Term.css";
const Data =props=>{
// console.log(props)
    return (
       

    <div id="card" className="ui card">
        <h2 className="header">{props.data.term}
          
          </h2>
        <div className="content">
          <div className="description">{stripHtml(props.data.definition)}</div>
         
        </div>
        <div className='resources'>{props.data.related_terms}</div>
        <div className='resources'> {props.data.resources}</div>

    </div>
  );
};
export default Data;