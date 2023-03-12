const quotes = [
    {
        "author": "Steve Jobs",
        "quote": "Stay Hungry. Stay Foolish."
    },
    {
        "author": "Pablo Picasso",
        "quote": "Good Artists Copy, Great Artists Steal."
    },
    {
        "author": "Paul Graham",
        "quote": "Argue with idiots, and you become an idiot."
    },
    {
        "author": "Oscar Wilde",
        "quote": "Be yourself; everyone else is already taken."
    },
    {
        "author": "Leonardo Da Vinci",
        "quote": "Simplicity is the ultimate sophistication."
    },
    {
        "author": "Nelson Mandela",
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        "author": "Walt Disney",
        "quote": "The way to get started is to quit talking and begin doing."
    },
    {
        "author": "Eleanor Roosevelt",
        "quote": "If life were predictable it would cease to be life, and be without flavor."
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you're busy making other plans."
    },
    {
        "author": "Anne Frank",
        "quote": "Whoever is happy will make others happy too."
    },
    {
        "author": "Abraham Lincoln",
        "quote": "In the end, it's not the years in your life that count. It's the life in your years."
    },
    {
        "author": "Helen Keller",
        "quote": "Life is either a daring adventure or nothing at all."
    }
];

function randomSelector(length){
    return Math.floor(Math.random() * length);
}

function getQuote(){
    // storing random number
    const index = randomSelector(quotes.length);

    document.getElementById('quote').innerHTML = '"' + quotes[index].quote + '"';
    document.getElementById('author').innerHTML = '- ' + quotes[index].author;
}