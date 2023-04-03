// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


describe("whatsYaOccupation", () => {
    it("returns an array with a sentence about each person with their name capitalized", () => {
      const people = [
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
      ]
      expect(whatsYaOccupation(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// // ReferenceError: whatsYaOccupation is not defined

// // b) Create the function that makes the test pass.

// Pseudo Code:
  // Create a function named whatsYaOccupation that takes in an array of objects as an argument
  // Input: array of objects with parameter named array
  // Iterate over the array using HOF .map with parameter object and set to a variable called arrayOfPpl since we will be deconstructing the objects within the array
  // Use object deconstruction to access name values and both accessor and mutator methods to capitalize the first names and last names. 
  // object.name.charAt(0).toUpperCase to capitalize the first letter concatenated to the remainder of the letters up until the first ' ' using object.name.slice(1, object.name.indexOf(' ')) which is then concatenated to a ' '  between the first/last names then use .indexOf(' ' + 1) to find the first letter that comes after the space and capitalize the last name, then concat to remainder of string
  // Use string interpolation to make a sentence with the capitalized name and object.occupation 
  // Set string interpolated and capitalized sentence to a variable called sentence
  // Use mutator method .split() to convert the sentence into an array and return it
  // return arrayOfPpl which is an array of arrays of sentences, and use the .flat() method to convert all nested arrays into one array of 3 sentences 
  // Output: array with a sentence about each person and their name capitalized ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

const whatsYaOccupation = (array) => {
  arrayOfPpl = array.map(object => {
    sentence = (`${(object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.indexOf(' ')) + ' ' + object.name.charAt(object.name.indexOf(' ') + 1).toUpperCase() + object.name.slice(object.name.indexOf(' ') + 2))} is ${object.occupation}.`)
    return sentence.split()
  }) 
  return arrayOfPpl.flat()
}
console.log(whatsYaOccupation(people))

// whatsYaOccupation
//   ✓ returns an array with a sentence about each person with their name capitalized (2 ms)
// Test Suites: 1 passed, 1 total



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remaindersOnly", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    expect(remaindersOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remaindersOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//  ReferenceError: remaindersOnly is not defined

// b) Create the function that makes the test pass.

// Pseudo Code:
  // Create a function named remaindersOnly that takes in an array as an argument
  // Input: Array of mixed data, parameter: array
  // Iterate over the array using HOF .map and set to a variable called remainders
  // Use conditional state if to find values in the array that have the data type number using typeof method
  // For all numbers, apply % 3 to find the remainders after dividing by 3 
  // Use HOF .filter on the mapped array called remainders and only return the remainder values using typeof method again since the original array had mixed data types
  // Output: Array of only the remainders of the numbers when divided by 3

const remaindersOnly = (array) => {
  const remainders = array.map(value => {
    if(typeof value === "number"){
      return value % 3
    }
  })
  return remainders.filter(value => typeof value === "number")
}


console.log(remaindersOnly(hodgepodge1)) // ->    [ 2, 0, -1, 0 ]
console.log(remaindersOnly(hodgepodge2)) // -> [ 2, 1, -1 ]

//   remaindersOnly
// ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// Test Suites: 1 passed, 1 total



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumCubes", () => {
  it("returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    expect(sumCubes(cubeAndSum1)).toEqual(99)
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubes(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: sumCubes is not defined


// b) Create the function that makes the test pass.

// Pseudo Code:
  // Create a function named sumCubes that takes in an array as an argument
  // Input: array of numbers with parameter called array
  // Set variable named sum = 0 as our initial sum value
  // Iterate over the array using a for loop starting at index of 0, until the array's last index, and incrementing by 1
  // For every iteration we wanted to get the cube of the value and add it to sum 
  // Return sum to get all the cubed values in the array added together
  // Output: sum of all values cubed

const sumCubes = (array) => {
  let sum = 0
  for(i=0; i<array.length; i++) {
  sum += Math.pow(array[i], 3)
 }
 return sum
}

console.log(sumCubes(cubeAndSum1)) // -> 99
console.log(sumCubes(cubeAndSum2)) // -> 1125

// sumCubes
// ✓ returns the sum of all the numbers cubed (1 ms)
// Test Suites: 1 passed, 1 total
