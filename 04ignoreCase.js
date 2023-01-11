/*
Ignore Case While Matching
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

Your regex should match the string freeCodeCamp
Passed:Your regex should match the string FreeCodeCamp
Passed:Your regex should match the string FreecodeCamp
Passed:Your regex should match the string FreeCodecamp
Passed:Your regex should not match the string Free Code Camp
Passed:Your regex should match the string FreeCOdeCamp
Passed:Your regex should not match the string FCC
Passed:Your regex should match the string FrEeCoDeCamp
Passed:Your regex should match the string FrEeCodECamp
Passed:Your regex should match the string FReeCodeCAmp

let myString = "freeCodeCamp";
//let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
console.log(result);

*/

let myString = "freeCodeCamp";
//let fccRegex = /change/; // Change this line
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);



console.log();


/*
E:\githubrepo_local\Regex>node 04ignoreCase.js
true

E:\githubrepo_local\Regex>

*/