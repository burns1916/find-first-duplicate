function findFirstDuplicate(arr) {
  // type your code here
  let elements = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (elements.has(arr[i])) return arr[i]
      elements.add(arr[i])
  }

  return -1

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
  // Create a new Set where i can store values from my array
  // Loop through my arrays and store them in my new Set while checking if they are already in the Set
  // return the element if they are in the Set
  // return -1 if no duplicate found.
// And a written explanation of your solution
