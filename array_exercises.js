Array.prototype.myUniq = function() {
  let new_array = [];
  for (var i = 0; i < this.length; i++) {
    if (new_array.includes(this[i])) {
      continue;
    } else {
      new_array.push(this[i]);
    }
  }

  return new_array;
};

Array.prototype.twoSum = function() {
  let new_array = [];
  // let that = this;
  for (var i = 0; i < this.length-1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        new_array.push([i, j]);
      }
    }
  }

  return new_array;
};

Array.prototype.myTranspose = function() {
  let finalArray = [];
  for(let i = 0; i < this[0].length; i++) {
    let tempArray = [];
    for(let j = 0; j < this.length; j++) {
      tempArray.push(this[j][i]);
    }
    finalArray.push(tempArray);
  }
  return finalArray;
};


Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const printMe = function(item) {
  console.log(item);
};


Array.prototype.myMap = function(callback) {
  let newArray = [];
  this.myEach(el => {
    newArray.push(callback(el));
  });
  return newArray;
};

const addOne = function(item) {
  return item + 1;
};

Array.prototype.myInject = function(callback) {
  let acc = this[0];
  this.slice(1, this.length).myEach(el => {
    acc = callback(acc, el);
  });
  return acc;
};

function multiply(x, y) { return x * y; }

function bubbleSort(array) {
  let switched = true;
  while (switched) {
    switched = false;
    for (let i = 0; i < array.length-1; i++) {
      let j = i + 1;
      let x = array[i];
      let y = array[j];

      if (x > y) {
        let temp = x;
        array[i] = y;
        array[j] = temp;
        switched = true;
      }
    }
  }
}

function substrings(string) {
  newArray = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + i; )
  }
}
