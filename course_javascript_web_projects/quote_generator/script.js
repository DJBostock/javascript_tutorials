let apiQuotes = [];

// Show New Quote
function newQuote() {
    choice = Math.floor(Math.random() * apiQuotes.length);
    currentQuote = apiQuotes[choice];
    document.getElementById('quote').innerText = currentQuote.text;
    document.getElementById('author').innerText = currentQuote.author;

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

document.getElementById('new-quote').addEventListener('click', newQuote);