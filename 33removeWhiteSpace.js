/*
Remove Whitespace from Start and End
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

result should be equal to the string Hello, World!
Waiting:Your solution should not use the String.prototype.trim() method.
Waiting:The result variable should not directly be set to a string
Waiting:The value of the hello variable should not be changed.

let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

console.log(result);


/*
E:\githubrepo_local\Regex>node 33removeWhiteSpace.js
Hello, World!

E:\githubrepo_local\Regex>
*/