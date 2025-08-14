/*Given an array of integers, count how many times the sign of the numbers changes. A change occurs when a positive number is followed by a negative number, or a negative number is followed by a non-negative number (zero or positive). The count should not include the first element as it doesn't have a preceding element to compare its sign with. An empty array should return 0. */

fun catchSignChange(arr: Array<Int>): Int  {
    if (arr.isEmpty()) {
        return 0
    }
    
    var signChanges = 0
    //// Iterate from the second element to compare with the previous
    for (i in 1 until arr.size) {
        val prevSignPositive = arr[i - 1] >= 0
        val currentSignPositive = arr[i] >= 0
        //// Check if the sign changes
        if(prevSignPositive != currentSignPositive){
            signChanges++
        }
    }
    return signChanges
}