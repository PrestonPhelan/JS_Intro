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
