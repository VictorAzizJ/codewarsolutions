/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str){
    var arr = str.split('')
    var results = []
 
    for(let i = 0; i<arr.length; i+=2){
      if(arr[i+1]) results.push(arr[i]+arr[i+1])
      else results.push(arr[i]+'_')
    }
 
   return results }