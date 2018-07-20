import React, { Component } from "react";
import SingleQuote from "./SingleQuote";

const quotesData = {
  leftQuotes: [
    {
      id: 1,
      quote:
        "Experience in different countries and markets makes design:success more creative and with a different vision than other innovation agency.",
      author: "Jesus de Juan – Managing Partner, Boston Consulting Group"
    },
    {
      id: 2,
      quote: "design:success is like a treasure container - 360 degrees.",
      author:
        "Charles Thibaut – Head of creative services, The Coca-Cola Company"
    },
    {
      id: 3,
      quote:
        "design:success is simply amazing - they bring the level of energy on any project up to a level where the seemingly impossible can be achieved.",
      author: "Maxine Birmingham, SVP – Vodafone"
    },
    {
      id: 4,
      quote:
        "The design:success team are superb at creating solutions that work on all business fronts without compromise.",
      author: "Belal Habib, Senior Director – KRAFT Foods"
    },
    {
      id: 5,
      quote: "They amazed me with the methodology”",
      author: "Richard Halbinger – Director of Marketing, Grupo P.I. Mabe"
    },
    {
      id: 6,
      quote:
        "Their deep insight on strategic levels has been part of the foundation for this tremendous successful transformation. We call internally their work ‘The Bible‘",
      author: "Joel Duran, EVP Novo Nordisk"
    },
    {
      id: 7,
      quote:
        "design:success ability to see into the future is what makes them a unique and extraordinary partner in business. Some of the most talented people I ever met!",
      author: "Alex Shchekin, Director – Blue Cross Blue Shield Insurance"
    }
  ],
  rightQuotes: [
    {
      id: 1,
      quote:
        "design:success has assisted in created extraordinary growth for Novo Nordisk.",
      author: "Joel Duran, EVP Novo Nordisk"
    },
    {
      id: 2,
      quote:
        "I feel very confident in recommending Design Success as a consultant company for Corporate Identity Definition, Marketing & Public Relations.",
      author: "Michael Oney, Executive, Intercontinental Hotels & Resorts"
    },
    {
      id: 3,
      quote:
        "With design:success I know that the final product will always be of great quality, on time, and comprehendible.",
      author: "Gustavo Leon, EVP – Pernod Ricard"
    },
    {
      id: 4,
      quote:
        "I can vouch for the extreme efforts the company expend in order to ensure that all bases are covered.",
      author: "Michael Oney, Executive, Intercontinental Hotels & Resorts"
    },
    {
      id: 5,
      quote:
        "design:success is a very unique combination of creativity, out of the box thinking, practical recommendations and smooth process.",
      author: "Jesus de Juan – Managing Partner, Boston Consulting Group"
    },
    {
      id: 6,
      quote: "design:success’ unique selling point is the vision of the future",
      author:
        "Charles Thibaut – Head of creative services, The Coca-Cola Company"
    },
    {
      id: 7,
      quote:
        "we would diffidently choose to work with design:success again – we enjoyed working with them.",
      author: "Patrick Cashman – President & GM, Lundbeck Inc."
    }
  ]
};

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      leftQuoteIndex: 1,
      rightQuoteIndex: 1
    };
    this.rotationTime = 5000;
  }

  changeIndex(index) {
    if (index < 7) {
      return index + 1;
    } else {
      return 1;
    }
  }

  delayQuote() {
    var newIndex = this.changeIndex(this.state.rightQuoteIndex);
    this.halfInterval = setTimeout(
      function() {
        this.setState({ rightQuoteIndex: newIndex });
      }.bind(this),
      this.rotationTime / 3
    );
  }

  changeQuotes() {
    var newIndex = this.changeIndex(this.state.leftQuoteIndex);
    this.setState({ leftQuoteIndex: newIndex }, () => this.delayQuote());
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeQuotes(), this.rotationTime);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.halfInterval);
  }

  render() {
    var leftQuote = quotesData.leftQuotes.find(
      quote => quote.id === this.state.leftQuoteIndex
    );
    var rightQuote = quotesData.rightQuotes.find(
      quote => quote.id === this.state.rightQuoteIndex
    );

    var leftQuotes = quotesData.leftQuotes.map((quote, index) => (
      <SingleQuote quote={quote} key={"quoteLeft" + index} selected={this.state.leftQuoteIndex === quote.id? "selected" : null}/>
    ));
    var rightQuotes = quotesData.rightQuotes.map((quote, index) => (
      <SingleQuote quote={quote} key={"quoteRight" + index} selected={this.state.rightQuoteIndex === quote.id? "selected" : null}/>
    ));
    return (
      <div className="firstColumned">
      <span>
        {leftQuotes}
        </span>
        <span>
        {rightQuotes}</span>
      </div>
    );
  }
}

export default Quotes;
