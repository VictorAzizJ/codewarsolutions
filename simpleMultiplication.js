//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.//
function simpleMultiplication(number) {
    // your code........
  let ans = 0
    if (number % 2 == 0){
      let ans = number * 8
      return ans
    } else{
      let ans = number * 9
      return ans
    }
  
}