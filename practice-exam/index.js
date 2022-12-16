// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
// creating a function called greeting that takes three parameters and concatonates them
// into a mesage
var greeting = function(greeting, location, time){
    // concatonatinge the inputs and storing them in the result variable
    let result = greeting + ' ' + location + ' ' + time;
    // console logging the result
    console.log(result);
};



// 2.
// creating a function called contestants that takes an array and counts the amount
// of items in the array
var contestants = function(arr){
    // creating a variable called count to store the count
    let count = 0
    // looping over the input array
    for (let i = 0; i < arr.length; i++){
        // incrementing the value stored in the count variable by 1
        count++;
    }
    // after the loop is complete, the count is returned
    return count;
};



// 3.
// using the filter method to loop over the dogs array and create a new array that 
// contains only the contestands that are dogs. this array will be stored under the 
// filterSpecies variable
var filterSpecies = dogs.filter(function(item){
    // testing if the current item in the array is a dog
    if (item.species === 'dog'){
        // if it is, add it to out new array by returning true
        return true;
    }
});



// 4. 
// creating a copy of the filterSpecies array using the rest operator and storing
// the new array in dogContestants
var dogContestants = [...filterSpecies];



// 5. 
// using map to add a new key and value to each contestant in the dogContestants
// variable base of the contestants weight
var dogsWithClasses = dogContestants.map(function(item){
    // if the current dogs weight is less than or equal to 10
    if (item.weight <= 10){
        // give it a key called class and assign it a value of red
        item.class = 'red';
    // if the current dogs weight is greater than ten or less then or equal to 20
    } else if (item.weight <= 20){
        // give it a key called class and assign it a value of yellow
        item.class = 'yellow';
    // if the current dogs weight is greater than 20
    } else {
        // give it a key called class and assign it a value of green
        item.class = 'green';
    }
    // returning the item
    return item;
});
    


// 6.
// creating a function called firstInClass that copies the key value pairs from multiple
// objects into a single object
var firstInClass = function(arr, obj = {}, i = 0){
    if (i === arr.length){
        return obj;
    }
    for (var key in arr[i]){
        obj[key] = arr[i][key];
    }
    return firstInClass(arr, obj, i + 1);
};



// 7.
// using reduce to count up the total votes in the dogs array
var votes = dogs.reduce(function(acc, curr){
    // incrementing the accumulator by the current contestants votes
    acc += curr.votes;
    // returning the accumulator
    return acc;
// setting the accumulator to start at 0
}, 0);