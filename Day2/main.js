let challenge = '30 Days of Javascript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0, 2)) // Substr takes two arguments, the starting index and number of characters to slice.
console.log(challenge.substring(3, 21)) // Substring takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(challenge.includes('String'))
console.log(challenge.split())
console.log(challenge.split(''))

let media = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(media.split(','))
console.log(challenge.replace('30 Days of Javascript', "30 Days Of Python")) //  takes as a parameter the old substring and a new substring
console.log(challenge.charAt(15)) // takes index and returns the value at that index

