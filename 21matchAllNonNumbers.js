/*
Match All Non-Numbers
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for 
non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a 
single character that is not a number between zero and nine.

Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

Your regex should use the shortcut character to match non-digit characters
Waiting:Your regex should use the global flag.
Waiting:Your regex should find no non-digits in the string 9.
Waiting:Your regex should find 6 non-digits in the string Catch 22.
Waiting:Your regex should find 11 non-digits in the string 101 Dalmatians.
Waiting:Your regex should find 15 non-digits in the string One, Two, Three.
Waiting:Your regex should find 12 non-digits in the string 21 Jump Street.
Waiting:Your regex should find 17 non-digits in the string 2001: A Space Odyssey.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;


*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result);

/*
E:\githubrepo_local\Regex>node 21matchAllNonNumbers.js
17

E:\githubrepo_local\Regex>
*/