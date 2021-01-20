/* write a function that takes in  a target sum and an array of numbers as arguments 
the function should return a boolean indicating wheter or not it is possible to generate the targetSum using numbers from the array
you may use an element of the array as many times as needed
example: cansum(7,[5,3,4,7])
                                         7
                
            -5 = (2) = F        |      -3 = (4) = T     |       -4 = (3) = T        |       -7 = (0) T

                            -3 = (1) = F | -4 = (0) = T             -3 = (0) = T


base case when last node = 0 = T

*/

const canSum = (targetSum,numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0 ) return false

    for (let num of numbers){

        const remainder = targetSum - num

        if (canSum(remainder,numbers,memo) === true) {
            memo[targetSum] = true
            return true
        }

    }

    memo[targetSum] = false
    return false

}

console.log(canSum(7,[2,3])) // true 
console.log(canSum(7,[5,3,4,7])) // true
console.log(canSum(7,[2,4])) // false
console.log(canSum(8,[2,3,5])) // true
console.log(canSum(300,[7,14])) // false