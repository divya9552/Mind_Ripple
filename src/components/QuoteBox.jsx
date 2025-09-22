import React from "react";

export default function QuoteBox({ quote, onNewQuote }) {
  if (!quote) return <p className="loading">Loading...</p>;

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.content}" — ${quote.author}`
  )}`;

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    `https://api.quotable.io/random?quote="${quote.content}"&author=${quote.author}`
  )}`;

  return (
    <div className="quote-box">
      <p className="quote">“{quote.content}”</p>
      <p className="author">— {quote.author}</p>

      <div className="buttons">
        <button onClick={onNewQuote} className="btn">🔄 New Quote</button>
        <a href={tweetUrl} target="_blank" rel="noreferrer" className="btn social twitter">
          🐦 Tweet
        </a>
        <a href={linkedInUrl} target="_blank" rel="noreferrer" className="btn social linkedin">
          🔗 Share
        </a>
      </div>
    </div>
  );
}
