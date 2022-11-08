// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // using .length property to test the length of the string//
    return string.lenght;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // Using .toLowerCase() method to change all letters in the string to lower case//
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // Using .toUpperCase method to change all letters the the input string to upper case//
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // Starting by initializing a variable called new string and setting it equal to the lower case version of the input string
    var newString = string.toLowerCase();
    // Changeing spaces to dashes
    newString.replace(' ', '-');
    // Returning new string
    return newString;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // YOUR CODE BELOW HERE //
    // Changine string and char to uppercase to avoid case sensitivity
    var newString = string.toUpperCase();
    var newChar = char.toUpperCase();
    /*creating an if statement that will evalute if the input       
    string starts with the same letter as input char */
    if (newString[0] === newChar) {
      return true;
    } else {
      return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // Changing string and char to uppercase to avoid case sensitivity
    var newString = string.toUpperCase();
    var newChar = char.toUpperCase();
    // noting the last charecters in strings index
    var i = string.length - 1;
    // creating an if statement that tests if the last character in the input string is the same as the input char
    if (newString[i] == newChar){
      return true;
    } else {
      return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Returning the concatonated strings//
    return stringOne + stringTwo;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // Using .join method to return all items in the args array joined together
    return args.join('');
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // creating an if statement that tests which string is longer
    if (stringOne.length > stringTwo.length){
        return stringOne;
    } else if (stringTwo.length > stringOne.length){
        return stringTwo;
    } else {
        return 'These stringss are the same length';
    }




    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        // putting input argument into an array
        var arg = Array.from(arguments);
        // alphabetizing the array
        arg.sort();
        // creating an if statement that evaluates the alphabetical order of the inputs and returns a number representative of ascending or decending order
        if (stringOne === stringTwo){
            return 0;
        } else if (stringOne === arg[0]){
            return 1;
        } else if (stringTwo === arg[0]) {
            return -1;
        } else {
            return 0;
        }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
       // putting input argument into an array
       var arg = Array.from(arguments);
       // alphabetizing the array
       arg.sort();
       // creating an if statement that evaluates the alphabetical order of the inputs and returns a number representative of ascending or decending order
       if (stringOne === stringTwo){
           return 0;
       } else if (stringOne === arg[0]){
           return -1;
       } else if (stringTwo === arg[0]) {
           return 1;
       } else {
           return 0;
       }
   
 
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
