
/*Mixed Messages Portfolio Project


1. Randomly select a joke number
2. Have a list of jokes strings (short jokes) x 10
3. Print the selected one to console 
*/


const jokes = [
    "Helvetica and Times New Roman walk into a bar. Get out of here! shouts the bartender. We don’t serve your type.", 
    "Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.",
    "A bear walks into a bar and says, Give me a whiskey and ... cola. Why the big pause? asks the bartender. The bear shrugged. I’m not sure; I was born with them."
    ];

function jokeSelect(input){
    jokenum = Math.floor(Math.random() * input.length); // chooses random number between 0 and number of jokes in array
    console.log(input[jokenum]);
}

jokeSelect(jokes);

