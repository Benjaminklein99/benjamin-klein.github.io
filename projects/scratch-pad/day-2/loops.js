// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // starting at the 0th index, loop over the array until there aren't amymore items
  for (var i = 0; i < array.length; i++){
    //console log the value at the index
    console.log(array[i]);  
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // starting at the end of the array (at the index of length -1) loop backwards through the array until the 0th index is reached
  for (var i = array.length - 1; i >= 0; i--){
    // console log the value at the index
    console.log(array[i]);
  } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //creating an array to save the object keys to
  var keys = []
  // loop over the object for all keys
  for (var key in object){
    // add the object key to the keys array
    keys.push(key);
  }
  return keys;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // loop over each key in the object
  for (var key in object){
    // log the key name to the console
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // using Object.values() method which creates an array for of the values from a given object to return an array
  return Object.values(object);

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // looping over the keys in object
  for (var key in object){
    // logging the values to the console
    console.log(object[key]);
    }
    
    

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // creating a variable to store the count of keys in object
  var count = 0
  // Looping over each key in object
  for (var key in object){
    // Incrementing count by 1
    count++;
  }
  // returning the count
  return count
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //finding the keys in the object and entering them to an array in reverse
  var keys = Object.keys(object).reverse()
  // looping over the array
  for (var i = 0; i < keys.length; i++){
    // logging the value of the of the object referencing keys stroed in the array
    console.log(object[keys[i]]);
  };
    
    
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
