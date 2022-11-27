//how do you write a function that checks if a string is a isogram?
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/


function isIsogram(str){
    //...
   str = str.toLowerCase();
    console.log(str)
  let ans = str.split('');
    console.log(ans)
    for (i = 0; i < ans.length; i++){
     if ( ans.indexOf(ans[i]) !== ans.lastIndexOf(ans[i]))
         return false
      
    }
    return true
  }


