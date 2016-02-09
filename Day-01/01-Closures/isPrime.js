Create a function ('isPrime') 

isPrime(100); => run the algo
isPrime(101); => run the algo
isPrime(102); => run the algo

isPrime(100); => do not run the algo
isPrime(101); => do not run the algo
isPrime(102); => do not run the algo


function primeFinderFactory(){
    var cache = {};

    //algo function
    function checkPrime(n){
        console.log('processing ', n);
        if (n <= 3) return true;
        for(var i= 2 ; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }

    function isPrime(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = checkPrime(n);
        return cache[n];
    }
    return isPrime;
}
