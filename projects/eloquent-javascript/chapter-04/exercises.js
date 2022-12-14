////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, z = 1) {
  let arr = [];
  if (x === y){
    return arr;
  } else {
    if (z > 0){
      for (let i = x; i <= y; i += z){
        arr.push(i);
      }
    } else {
      for (let i = x; i >= y; i+= z){
        arr.push(i);
      }
    }
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let resultArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    resultArr.push(arr[i]);
  }
  return resultArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  if (arr.length === 0){
    return arr;
  }
  if (arr.length % 2 === 1){
    for (let i = 0; i <= (arr.length / 2); i++) {
      let item = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = item;
    }
  } else {
    for (let i = 0; i <= ((arr.length - 1)/ 2); i++){
      let item = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = item;
    }
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array){
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []){
  // base
  if (list.rest === null){
    output.push(list.value);
    return output;
  }
  // recursion
  output.push(list.value);
  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(num, list) {
  let result = {}
  result.value = num;
  result.rest = list;
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num, i = 0) {
  if (i === num){ 
    return list.value;
  } else if (i > num){
    return undefined;
  } else {
    return nth(list.rest, num, i += 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y){
  // determine if BOTH x and y and NOT OBJECTS
  if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  } 
  // determine if EITHER x or y is not an object
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  // create arrays of each items keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  // determine if xKeys and yKeys have different lengths
  if (xKeys.length !== yKeys.length){
    return false;
  }
  // iterate throughxKeys array
  for (let i = 0; i < xKeys.length; i++){
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
