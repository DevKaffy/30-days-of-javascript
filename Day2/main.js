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
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a')) // takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(challenge.lastIndexOf('a'))

let title = "You cannot end a sentence with because because because is a conjunction";
console.log(title.indexOf('because'))
console.log(title.search('because'))
console.log(challenge.trim(' 30 Days of Javascript '))
console.log(challenge.startsWith('30')) // takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(challenge.endsWith("Javascript"))
console.log(challenge.match('a'))
console.log(challenge.concat(' 30 Days and ', 'Javascript'))
console.log(challenge.repeat(2))

// LEVEL 2
console.log("'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
