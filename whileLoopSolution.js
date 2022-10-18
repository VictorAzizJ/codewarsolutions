//loop solution for Task
/*Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.*/



function padIt(str,n){
    //declaring function passing in parameters
    while(n>0){
        //while statement that "while" variable "n" is more than 0 function will run//
      if(n%2 === 0) {
        str = str + "*";
        //if "n" is divisible by 2 and equals 0 string gets a "*" added to the right
      }else{
        str = "*" + str;
      }//else string add to left
      n --;
      //confused about this one
    }
    return str;
    //return string to orginal postion (able to be ran again)
  }