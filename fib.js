/// FIBONACCI RECURSIVE 
///  0, 1, 2, 3, 5, 8, 13, 21, 34

/*const fib = (n) => {
    if (n <= 2)
        return 1
    return fib (n-1) + fib (n-2) 
}*/

//save in memory and pass in arg { 5: 5, 6 : 8, 7 : 13 }

const fib  = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n<=2) return 1
    
    memo[n] = fib(n-1,memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(50))