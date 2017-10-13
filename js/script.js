// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Creating an array named quotes containing 5 objects,
//each with atleast two properties
var quotes = [
{
	quote: "Whatever you are, be a good one",
	source: "Abraham Lincoln",

},

{
	quote: "The true sign of intelligence is not knowledge, but imagination",
	source: "Albert Einstein"
},

{
	quote: "The stories we love the best live in us forever",
	source: "J.K.Rowling",
	citation: "Harry Potter"
},

{
	quote: "Don't criticize what you can't understand",
	source: "Bob Dylan"
},

{
	quote: "Get up, stand up, stand up for your rights. Get up, stand up, don't gick up the fight",
	source: "Bob Marley",
	citation: "Bob Marley - Legend",
	year: 1987
}];


//Creating a function to randomly get a object from the array
//Since we want a number between 0-4 (the index of the quotes-array)
// we have to use Math.floor to avoid decimals and multiply by the length of the array (which is 5)
// because the Math.random only selects a random number between 0-1
//We store the random number into a variable and return it. Now the function contains a random number between 0-5

function getRandomQuote () {
	var randomQuoteObject = quotes[Math.floor(Math.random() * quotes.length )];
	return randomQuoteObject;
}

//To get the quote o the page I create a function
//I store the random number from the getRandomQute-function into a new varible
function printQuote() {
	var randomQuote = getRandomQuote();
    console.log(randomQuote); //I print it to the console just to check that i works
    //Now I create a variable, message, that contains the diffrent properties of the quote object,
    // i'm using the HTML template given in the instructions
    var message = '<p class="quote">' + randomQuote.quote + '</p>';
    message += '<p class="source">' + randomQuote.source;

	//I create a if statement to see if the quote object contains citation and year,
	// if so, I add it to the message-variable
	  if (randomQuote.citation && randomQuote.year) {
	    message += '<span class="citation"> ' + randomQuote.citation + '</span>';
	    message += '<span class="year"> ' + randomQuote.year + '</span></p>';
	  }

	  else if (randomQuote.citation) {
	    message += '<span class="citation"> ' + randomQuote.citation + '</span></p>';
	  }

	  else if (randomQuote.year) {
	    message += '<span class="year"> ' + randomQuote.year + '</span></p>';
	  }
		//I print the message-variable to the console, then I use a JS snippet given in the instructions to display it to the page
	  console.log(message);
	  document.getElementById('quote-box').innerHTML = message;

}