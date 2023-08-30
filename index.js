function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; //found? return true
      }
    }
  }
  return false; //no pair? return false
}



if (require.main === module) {
  
  console.log("Expecting: false");
  console.logg("=>", hasTargetSum([5,8,1,4,8,], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
