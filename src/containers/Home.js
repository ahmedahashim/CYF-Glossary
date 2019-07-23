import React, { Component } from "react";
import "./Home.css";
import Search from "./Search";
import SingleSearchResult from "./SingleSearchResult"

// import Data from"./Definitions.json"
import Term from "./Term";
class Home extends Component {
  state = { searchData: [] };
  componentDidMount() {
    fetch("https://cyf-glossary-api.glitch.me/api/getall")
      .then(response => response.json())
      .then(data => {
        this.setState({ searchData: data });
        console.log(data); // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>CYF@Glossary</h1>
          <Search />
        </div>
        <div className="flext-container">
        {this.state.searchData.map((result, key) => {
      return (
        <SingleSearchResult
          key={key}
          term={result.term}
          definition={result.definition}
          topic={result.topic}
          termSlug={result.term_slug}
          topicSlug={result.topic_slug}
        />
      )
    
        })}
      </div>
      </div>
    );
  }
}
export default Home;
