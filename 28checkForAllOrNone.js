/*
Check for All or None
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Both uses of the test method would return true.

Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

Your regex should use the optional symbol, ?.
Waiting:Your regex should match the string favorite
Waiting:Your regex should match the string favourite
Waiting:Your regex should not match the string fav

let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);



*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result);

/*

E:\githubrepo_local\Regex>node 28checkForAllOrNone.js
true

E:\githubrepo_local\Regex>

*/