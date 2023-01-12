/*
Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

You should find all 25 vowels.
Passed:Your regex vowelRegex should use a character class.
Passed:Your regex vowelRegex should use the global flag.
Passed:Your regex vowelRegex should use the case insensitive flag.
Passed:Your regex should not match any consonants.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[change]/; // Change this line
let result = vowelRegex; // Change this line

*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

let count = result.length; //This will count the outcome of the variable result.
console.log(result);
console.log(count); //This will give the count of the string matches.


/*

E:\githubrepo_local\Regex>node 08matchSingleWithMultiple.js
[
  'e', 'a', 'e', 'o', 'u', 'i',
  'e', 'a', 'o', 'e', 'o', 'e',
  'I', 'a', 'e', 'o', 'o', 'e',
  'i', 'o', 'e', 'o', 'i', 'e',
  'i'
]

E:\githubrepo_local\Regex>

The next challenge would be to create a function to count the number of results as the problem seeks to find all 25 vowels.

E:\githubrepo_local\Regex>node 08matchSingleWithMultiple.js
[
  'e', 'a', 'e', 'o', 'u', 'i',
  'e', 'a', 'o', 'e', 'o', 'e',
  'I', 'a', 'e', 'o', 'o', 'e',
  'i', 'o', 'e', 'o', 'i', 'e',
  'i'
]
25

E:\githubrepo_local\Regex>

*/