/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

 */

function validParentheses(parens) {
    // your code here ..
    
    let parArr = parens.split('')
    console.log(parArr)
    for (let i = 0; i <= parArr.length; i++){
    if (parArr[0] == '(' && parArr.length == ')')
      return true;
    else if(parens == '()' || parArr == '')
      return true;
    else
    return false;
  }}