const quoteContainer = document.getElementById('quote generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton  = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

// let apiQuotes = [];

// Show new quote
function newQuote() {
// Pick a random quote from apiQuotes Array
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// Check if Author field is blank and replace it with 'Unknown'
 if (!quote.author) {
    authorText.textContent = 'Unknown';

 } else {
    authorText.textContent = quote.author;
 }
 // Check the Quote length to determine styling

 if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
 } else {
    quoteText.classList.remove('long-quote')
 }
quoteText.textContent = quote.text;
} 


// We are going to get some quotes from an API
// We can do this by using an asynchronus fetch request within a try catch statement
// Asynchrnous functions can run at any time independently.

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
     
//     } catch (error) {
//         // Catches error here
//     }

// }

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}



// // On load
// getQuotes();

newQuote();

// Event Listeners
newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);