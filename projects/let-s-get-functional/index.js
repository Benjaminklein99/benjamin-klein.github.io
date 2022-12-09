// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./benjamin-klein.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array){
    return _.reduce(array, function(accumulator, current){
        if (current.gender === 'female'){
            return accumulator + 1;
        } else {
            return accumulator;
        }
    }, 0);
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (accumulator.age > current.age){
            return accumulator;
        } else {
            return current;
        }
    });
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (accumulator.age < current.age){
            return accumulator;
        } else {
            return current;
        }
    });
    return youngest.name;
};

var averageBalance = function(array){
    var sum = _.reduce(array, function(acc, curr){
        var bal = curr['balance'].replace(/[$,]/g, '');
        var flt = parseFloat(bal);
        return acc + flt;
    }, 0)
    var avg = sum / array.length;
    return avg;
};

var firstLetterCount = function(arr, letter){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name[0].toUpperCase() === letter.toUpperCase()){
            count++;
        }
    }
    return count;
};

var friendFirstLetterCount = function(arr, customer, letter){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name === customer){
            for (let x = 0; x < arr[i].friends.length; x++){
                if (arr[i].friends[x].name[0].toUpperCase() === letter.toUpperCase()){
                    count++;
                }
            }
        }
    }
    return count;
};

var friendsCount = function(arr, name){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let friendsArr = arr[i].friends;
        for (let x = 0; x < friendsArr.length; x++){
            if (friendsArr[x].name === name){
                result.push(arr[i].name);
            }
        }
    }
    return result;
};

var topThreeTags = function(arr){
    let stor = [];
    for (let i = 0; i < arr.length; i++){
        let tags = arr[i].tags
        for (let x = 0; x < tags.length; x++){
            stor.push(tags[x]);
        }
    }
    let countObj = {};
    for (let i = 0; i < stor.length; i++){
        if (countObj[stor[i]]){
            countObj[stor[i]] += 1;
        } else {
            countObj[stor[i]] = 1
        }
    }
    // determine what key in count obj has the highest value;
    let stor2 = [];
    for (let key in countObj){
        stor2.push([key, countObj[key]]);
    }
    stor2.sort(function(a, b){
      return b[1] - a[1];
    })
    let stor3 = stor2.slice(0, 3);
    let stor4 = [];
    for (let i = 0; i < stor3.length; i++){
      stor4.push(stor3[i][0]);
    }
    return stor4;
};

var genderCount = function(array){
    let countObj = {female: 0, male: 0, 'non-binary': 0};
    _.reduce(array, function(accumulator, current){
        if (current.gender === 'female'){
            countObj.female += 1;
        } else if (current.gender === 'male'){
            countObj.male += 1;
        } else if (current.gender === 'non-binary'){
            countObj['non-binary'] += 1;
        }
    }, 0);
    return countObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
