/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

// Variables for DOM interaction
//*****************************************

const quoteBox = document.getElementById('quote-box"');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('tweet-quote');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// End of Variables for DOM interaction
//*****************************************

// Array for Get the Quotes from an external API function
//*****************************************

let apiQuotes = [];


// Getting Quotes Section
//*****************************************


// Showing the new Quote

function newQuote() {

  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  
  // Verify if author name is blank and replace it whit "Author: unknown";
  if (!quote.author) {
    authorText.textContent = 'Author: unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Verify Quote length to determine font styling
  if (quote.text.length > 120) {
    quoteText.classList.toggle('long-quote');
  }

  // Set Quote
   quoteText.textContent = quote.text;
  
} 

// Get the Quotes from an external API
async function getQuotes() {
  
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
   newQuote();
  } catch (error) {
    // To  Catch the log error 
  }
}

// For Tweet the current Quote 
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners interaction
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Loading 
getQuotes();

// End of Getting Quotes Section //
//*****************************************





