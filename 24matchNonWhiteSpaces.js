/*
Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
The value returned by the .length method would be 32.

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

Your regex should use the global flag.
Waiting:Your regex should use the shorthand character \S to match all non-whitespace characters.
Waiting:Your regex should find 35 non-spaces in the string Men are from Mars and women are from Venus.
Waiting:Your regex should find 23 non-spaces in the string Space: the final frontier.
Waiting:Your regex should find 21 non-spaces in the string MindYourPersonalSpace

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);



*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

console.log (result);


/*

E:\githubrepo_local\Regex>node 24matchNonWhiteSpaces.js
[
  'W', 'h', 'i', 't', 'e', 's', 'p',
  'a', 'c', 'e', 'i', 's', 'i', 'm',
  'p', 'o', 'r', 't', 'a', 'n', 't',
  'i', 'n', 's', 'e', 'p', 'a', 'r',
  'a', 't', 'i', 'n', 'g', 'w', 'o',
  'r', 'd', 's'
]

E:\githubrepo_local\Regex>

*/