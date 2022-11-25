/*There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

Let's see: */

function nextPal(val) {
    do {
      val++;
    } while(!isPalindrome(val))
    return val;
  }
  
  function isPalindrome(num) {
    return num === reverseNum(num);
  }
  
  function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }

