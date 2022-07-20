const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

// https://twitter.com/intent/tweet

let apiQuotes = [];

// Show New Quote
function newQuote() {
    choice = Math.floor(Math.random() * apiQuotes.length);
    currentQuote = apiQuotes[choice];
    quoteText.innerText = currentQuote.text;

    if (currentQuote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    if (currentQuote.author == '') {
        quoteAuthor.innerText = 'Unknown';
    } else {
        quoteAuthor.innerText = currentQuote.author;
    }
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();

newQuoteBtn.addEventListener('click', newQuote);

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`;
    window.open(twitterUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);