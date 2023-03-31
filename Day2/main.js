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

console.log(
  '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
)

let num = '10'
let number = 10
console.log(num == number)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = '9.8'
let parse = 10
console.log(float == parse)

// Check if 'on' is found in both python and jargon

let python = 'python'
let jargon = 'jargon'
console.log(python && jargon.includes('on'))

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let course = 'I hope this course is not full of jargon'
console.log(course.includes('course'))

// Generate a random number between 0 and 100 inclusively.
let rand = Math.floor(Math.random()*100)
console.log(rand)

// Generate a random number between 50 and 100 inclusively.
let random = Math.floor(Math.random()*(100 - 50) + 50)
console.log(random)

// Generate a random number between 0 and 255 inclusively.
let generate = Math.floor(Math.random() * 255)
console.log(generate)

// Access the 'JavaScript' string characters using a random number.
let access = 'JavaScript'
console.log(access[Math.floor(Math.random() * access.length)])

// Use console.log() and escape characters to print the following pattern.
/* 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let slice = "You cannot end a sentence with because because because is a conjunction"
console.log(slice.substr(31, 23 ))

// LEVEL 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(love.match(/Love/gi))

//  Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = "You cannot end a sentence with because because because is a conjunction"
console.log(because.match(/because/gi))

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

  let word = sentence.replace(/[^\w^.;?\s]/g, "")
  console.log(word)
  let wordies = word.split(' ')
  console.log(wordies)
  let result = wordies.reduce((acc, word) => {
                acc[word] = (acc[word] || 0) + 1;
                if (!(acc[word] < acc[acc.$])) acc.$ = word;
                return acc;
            }, {}).$; 
console.log(result)
    
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let extract =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let extractnum  = /\d+/gi
console.log(extract.match(extractnum))
const matchedNumber = extract.match(extractnum);
const totalAnnualIncome = (Number (matchedNumber[0] * 12) + (Number(matchedNumber[2])) *12) + Number(matchedNumber[1])

// const totalAnnualIncome = matchedNumber.reduce((acc,num) =>{
//     return acc + parseInt(num,10)
// },0)
console.log(totalAnnualIncome)
