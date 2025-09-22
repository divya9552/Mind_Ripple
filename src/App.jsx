import React, { useState, useEffect } from "react";
import "./index.css";
import QuoteBox from "./components/QuoteBox";

export default function App() {
  const [quote, setQuote] = useState(null);

  // Fetch from Quotable API (free, no key required)
  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <h1 className="title">✨ MindRipple ✨</h1>
      <p className="subtitle">Voices echoing from the world</p>
      <QuoteBox quote={quote} onNewQuote={fetchQuote} />
    </div>
  );
}
