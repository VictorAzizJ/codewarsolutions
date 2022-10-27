/*Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]*/

function squares(x, n) {
    if (n<=0) return []
    //Guard cause (protective if statment)
      let arrJawn = [x]
      //declares first variable in array while making a array
      let previousNum = x
      //decalres variable that allows for storage of x value
      for (let i = 1; i < n; i++){
        //traditional loop that starts at index of 1 increments by 1 using i++ and runs until for as long i is less than n
        let newNum = previousNum * previousNum
        // delclares a variable to that multiples previous number by itself
        arrJawn.push(newNum)
        //using the method of .push to push variable into array Element
       previousNum = newNum
       //reassigns value of variable to product of equation for the loop to run again
       
      }
      return arrJawn
      //returns variable once loop is done
      console.log(arrJawn)
    }
