/*function accum(s) {
	// your code
  let gibberish = []
  let sim = s.split('')
  for ( let i = sim.length -1; i >= 0 ; i--){
    gibberish.push(sim[i])* i;
    console.log(gibberish)
    
  }

}
Wrong but instersting approach

*/




function accum(s) {
 let arr = []
 //create array
 for (let i = 0; i < s.length; i++) {
//loop through string
 arr.push(format(s[i], i + 1))
 }
 //use push method on format function that properly calls function to create Uppercase and lowerCase approatie time
 return arr.join('-')
 //use join method to seperate by -
 }
function format(s, num) {
    // create function that takes in two parameters (s and num) s will be the letter and num will be index +1 to keep count will s.length to make sure we arent on the first letter in loop
 let letter = s.toUpperCase()
 //with the first variable being letter turning the string in UpperCase
 //then
while (letter.length !== num) {
    //running while loop to compare the index + 1 to length adding lower cases then returning
 letter += s.toLowerCase()
 }
 return letter
 }