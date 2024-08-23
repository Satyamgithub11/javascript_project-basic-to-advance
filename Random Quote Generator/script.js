const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', displayQuote);
