/*
Match Characters that Occur Zero or More Times
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

/*
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

Your regex chewieRegex should use the * character to match zero or more a characters.
Waiting:Your regex should match the string A in chewieQuote.
Waiting:Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
Waiting:Your regex chewieRegex should match 16 characters in chewieQuote.
Waiting:Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
Waiting:Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.

// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);


*/

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

console.log(result);


/*

E:\githubrepo_local\Regex>node 13matchZeroOrMoreTimes.js
[
  'Aaaaaaaaaaaaaaaa',
  index: 0,
  input: 'Aaaaaaaaaaaaaaaarrrgh!',
  groups: undefined
]

E:\githubrepo_local\Regex>


*/