const quotes = [
{
    quote:"I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
},



{
    quote:"Do not try to be original, just try to be good.",
    author: "Paul Rand",
},



{
    quote:"Do not be afraid to give up the good to go for the great",
    author: "John D.Rockefeller",
},



{
    quote:"If you can not fly then run.If you can not run,then walk.And, If you cannot walk.then crawl,but whatever you do, you have to keep moving forward",
    author: "Martin Luther King Jr.",
},



{
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",
    author: "Thomas Edison",
},



{
    quote:"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author: "Reid Hoffman",
},



{
    quote:"Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you're not doing a tour of gas stations.",
    author: "Tim O'Reilly",
},



{
    quote:"Some people dream og success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
},



{
    quote:"The only thing worse than starting something and failing...is not starting something.",
    author: "Seth Godin",
},



{
    quote:"If you really want to do something, you'll find a way. If you do not,you'll find an excuse.",
    author: "Jim Rohn",
}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;