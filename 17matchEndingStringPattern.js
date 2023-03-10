/*
Match Ending String Patterns
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
The first test call would return true, while the second would return false.

Use the anchor character ($) to match the string caboose at the end of the string caboose.

You should search for caboose with the dollar sign $ anchor in your regex.
Waiting:Your regex should not use any flags.
Waiting:You should match caboose at the end of the string The last car on a train is the caboose

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);



*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

console.log(result);


/*
E:\githubrepo_local\Regex>node 17matchEndingStringPattern.js
true

E:\githubrepo_local\Regex>
*/