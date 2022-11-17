/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating a variable named animal and assigning to an empty object
var animal = {};
// add a key of species and a value of an animals species to animal object using dot notation
animal.species = 'Canine';
// add a key of name and a value of a name to the animal object using bracket notation
animal['name'] = 'Rolo';
// add a key of noises with a value of an empty array to the animal object
animal.noises = [];
// print animal object to the console usinging console.log
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named noises and assigning it to an empty array
var noises = [];
// use bracket notation to add a string of the noise the animal makes
noises[0] = 'Roof';
// using a function add a noise to the end of noise
function addNoise(noise){
  noises.push(noise);
};
// calling the function
addNoise('Bark');
// add an element to the begining of noises
noises.unshift('Woof');
// using bracket notation to add to the end of the noises array 
noises[noises.length] = 'Bowow';
// console log the length of noises
console.log(noises.length);
// console log the last element in noises array
console.log(noises[noises.length - 1]);
// console log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// using bracket syntax to assign the noises array to the noises property on animal
animal['noises'] = noises;
// adding another value to noises
animal.noises.push('Howl');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable called animals and assign it to an empty array
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var cat = { species: 'feline', name: 'Maisey', noises: ['meow', 'hiss', 'purr'] };
var panda = { species: 'bear', name: 'Sake', noises: ['roar', 'chomp'] };
animals.push(cat, panda);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating an array called friends
var friends = [];
// We chose to use an array as you will not need a key value pair for what we are attempting to do
function getRandom(arr){
  let max = arr.length;
  return Math.floor(Math.random() * max);
}








//animal[getRandom(animals)].name.push(friends);
//console.log(friends);
//animals[getRandom(animals)].friends.push(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}