function newQuote() {
    // Get the quotes array.
    var quotes = [
      "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",
      "I think that if I ever have kids, and they are upset, I won't tell them that people are starving in China or anything like that because it wouldn't change the fact that they were upset. And even if somebody else has it much worse, that doesn't really change the fact that you have what you have.",
      "If you can dream it, you can do it.",
      "And that's the thing about people who mean everything they say. They think everyone else does too",
      "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
      "If you do not tell the truth about yourself you cannot tell it about other people."
    ];
    var randomNumber = Math.floor(Math.random() * quotes.length);
  
    
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
  }
  
  document.getElementById("generateQuote").onclick = newQuote;
      