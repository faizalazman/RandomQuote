import React from "react";
import Quotes from "./components/quotes";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  state = { quotes: [] };

  getQuote = async () => {
    if (window.localStorage.length === 1) {
      const response = await axios.get("https://type.fit/api/quotes");
      this.setState({
        quotes:
          response.data[
            Math.floor(Math.random() * Object.keys(response.data).length)
          ]
      });
      localStorage.setItem("quotesObject", JSON.stringify(response));
    } else {
      const jsonString = localStorage.getItem("quotesObject");
      const response = JSON.parse(jsonString);
      this.setState({
        quotes:
          response.data[
            Math.floor(Math.random() * Object.keys(response.data).length)
          ]
      });
    }
  };

  render() {
    return (
      <div className="main">
        <h1>Your Random Quote of The Day</h1>
        {Object.keys(this.state.quotes).length > 0 ? (
          <Quotes quotes={this.state.quotes} />
        ) : null}
        <br />
        <div>
          <button className="positive ui button" onClick={this.getQuote}>
            More Random Quotes ?
          </button>
        </div>
      </div>
    );
  }
}

export default App;
