/*Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14*/


function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  Math.floor(integer).toString();
  console.log(digits)
    for(var i = 0; i < digits.length; i++) {
      sum += Number(digits[i]);
    }
    console.log(sum)
    return sum;
  }
