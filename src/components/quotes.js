import React from "react";

const Quotes = props => {
  return (
    <div className="ui centered card">
      <div className="content">
        <div className="header">
          {props.quotes.author ? props.quotes.author : "Anonymous"}
        </div>
        <div className="description">
          <p>{props.quotes.text}</p>
        </div>
      </div>
      <button className="ui circular twitter icon button">
        <i className="twitter icon" />
      </button>
    </div>
  );
};

export default Quotes;
