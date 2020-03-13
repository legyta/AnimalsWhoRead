import React from "react";
import "./stylesheets/TickerItem.scss";
import TickerItem from "./TickerItem";

const texts = [
  {
    text: "Stand up!"
  },
  {
    text: "Fight back!"
  },
  {
    text: "No Humans"
  }
];

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

const Ticker = () => (
  <main className="ticker-wrap w-100">
    <div className="ticker">
      {texts.map(item => (
        <TickerItem key={item.text} text={item.text} />
      ))}
    </div>
  </main>
);

export default Ticker;
