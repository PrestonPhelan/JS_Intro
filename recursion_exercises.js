const range = function(start, end) {
  //Return array if base case condition
  if (end < start) {
    return [];
  } else {
    let newArray = [];
    newArray.push(start);
    return newArray.concat(range(start + 1, end));
  }
};

const sum = function(array) {
  //Return integer if base case
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1, array.length));
  }
};

const exp1 = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * exp1(base, exponent - 1);
  }
};


const exp2 = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent % 2 === 0) {
    return Math.pow(exp2(base, exponent / 2), 2);
  } else {
    return base * Math.pow(exp2(base, (exponent-1) / 2), 2);
  }
};

const fibRec = function(n) {
  let baseFib = [1,1];
  if (n <= 2) {
    return baseFib.slice(0, n);
  } else {
    let lastFib = fibRec(n-1);
    let length = lastFib.length;
    lastFib.push(lastFib[length-2]+lastFib[length-1]);
    return lastFib;
  }
};

let fibIt = function(n) {
  let newArray = [];

  for(let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      newArray.push(1);
    } else {
      let length = newArray.length;
      newArray.push(newArray[length - 2] + newArray[length - 1]);
    }
  }

  return newArray;
};


let bSearch = function(array, target) {
  if (array.length === 0) {
    return null;
  }
  let middleIndex = Math.floor((array.length-1)/2);
  let middle = array[middleIndex];
  if (middle === target) {
    return middleIndex;
  } else if (middle > target) {
    return bSearch(array.slice(0, middleIndex), target);
  } else {
    return middleIndex + 1  + bSearch(array.slice(middleIndex+1, array.length), target);
  }
};

let makeChange3 = function(amount, array) {
  let result = 0;
  if (amount === 0) {
    return [];
  } else if (array.length === 1) {
    return Array(amount/array[0]).fill(array[0]);
  } else {
    let bestChange = null;
    for (let i = 0; i < array.length; i++) {
      if (amount >= array[i]) {
        result = [array[i]].concat(makeChange3(amount - array[i], array.slice(i,array.length)));
      } else {
        result = makeChange3(amount, array.slice(i+1, array.length));
      }
      if (bestChange === null ) {
        bestChange = result;
      } else if (result.length < bestChange.length) {
        bestChange = result;
      }
    }
    return bestChange;
  }
};


let makeChange4 = function(amount, array) {
  let result = [];
  if (amount === 0) {
    return [];
  } else {
    if (amount < array[0]) {
      return makeChange4(amount, array.slice(1, array.length));
    } else {
      let bestChange = [];
      for (let i = 0; i < array.length; i++) {
        result = [array[i]].concat(makeChange4(amount - array[i], array.slice(i,array.length)));
        if (bestChange === [] || bestChange.length > result.length ) {
          bestChange = result;
        }
      }
      return bestChange;
    }
  }
};
