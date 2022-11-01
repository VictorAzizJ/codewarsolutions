/*Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"*/




function vowelOne(s){
    // ...
    let numbers = s.split('')
    let result = ''
    console.log(numbers)
     for (let i = 0; i< numbers.length; i++){
       if (numbers[i] == 'a' || numbers[i] == 'e' || numbers[i] == 'i' || numbers[i] == 'o' || numbers[i] == 'u' ||
          numbers[i] == 'A' || numbers[i] == 'E' || numbers[i] == 'I' || numbers[i] == 'O' || numbers[i] == 'U'){
         result += 1
         console.log( numbers)
       } else {
         result += 0
       }
  }
    return result
  } 