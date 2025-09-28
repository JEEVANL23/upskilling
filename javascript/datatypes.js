// JavaScript's most important datatype is the object.

// An object is a collection of name/value pairs, or a string to value map.

let book = { // Objects are enclosed in curly braces.
topic: "JavaScript", // The property "topic" has value "JavaScript."
edition: 7 // The property "edition" has value 7
}; // The curly brace marks the end of the object.
// Access the properties of an object with . or []:
console.log(book.topic) // => "JavaScript"
console.log(book["topic"]) // => 7: another way to access property values.
console.log(book["edition"]) // => 7: another
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.
// Conditionally access properties with ?. (ES2020):
console.log(book.contents?.ch01?.sect1)  // => undefined: book.contents has no ch01 property.
console.log(book.author)
console.log(book)


// JavaScript also supports arrays (numerically indexed lists) of values:

let sample_array = [2,5,1,6]
console.log(sample_array)

console.log(sample_array.length)
console.log(sample_array[sample_array.length-1])
console.log(sample_array[2])
console.log(sample_array[4] = 10)

sample_array[4] = 12

console.log(sample_array[4])
