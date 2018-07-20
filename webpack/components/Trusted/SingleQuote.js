import React from "react";

const SingleQuote = props => {
    return (
        <div className={props.selected}>
          <p>{props.quote.quote}</p>
          <label>- {props.quote.author}</label>
        </div>
    );
}

export default SingleQuote;
