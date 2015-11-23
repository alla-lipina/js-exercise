// Problem 2 - https://projecteuler.net/problem=2
function getFibonacci() {
  var i = 1,
      j = 2,
      sum = 0;

  while (j < 4000000) {
    if (j%2 == 0) {
      sum +=j      
    }
    var k = i
    
    i = j
    j = k + j
  }
}


// Problem 3 - https://projecteuler.net/problem=3
// What is the largest prime factor of the number 600851475143 ?
function isPrime(a) {
  var n = 2;
  
  while ( n <= Math.sqrt(a) ) {
    if ( (a%n === 0) ) {
      return false
    }
    n++
  }

  return true;
}

function primeFactor(number) {
  // The prime factors of 13195 are 5, 7, 13 and 29.
  var a = 3,
      b;

  while ( a <= Math.sqrt(number) ) {
    // check if "a" is natural
    if ( isPrime(a) && (number%a === 0) ) { 
      b = a;
    }
    a++;
  }

  console.log(b)
}


/* 
  Problem 4 - https://projecteuler.net/problem=4
  A palindromic number reads the same both ways. 
  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  
  Find the largest palindrome made from the product of two 3-digit numbers. 
*/

function ifPali(num) {
  var paliArr = num.split(""),
      length  = paliArr.length;

  for (i=0; i < length/2; i++) {
    if (paliArr[i] === paliArr[length-(i + 1)]) {
      console.log("gut!");
    } else {
      console.log("oops!");
      return false;
    }
  }
  return true;
}

// JOPA
// function getLargest() {
//   var a=999,
//       b,
//       c,
//       q=1;

//   while (a => 900) {
//     b = a;

//     while (b => 900) {
//       c = (a * b);

//       if (ifPali(c.toString())) {
//         console.log("a="+ a + " b="+ b + " Here comes Pali: " + c);
//         (c > q) && (q = c);
//       }
//       b--
//     }

//     a--
//   }
//   return q;
// }

// for (a=999; a<=100; a--) {
//   for (b=a; b<=100; b--) {
//     c = (a * b);

//     if (ifPali(c.toString())) {
//       console.log("a="+ a + " b="+ b + " Here comes Pali: " + c);
//       (c > q) && (q = c);
//     }
//   }
//   console.log("a=" + a)
// }

/* 
  Problem 5
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? 
*/

// found analitically = 232792560

/*
  Problem 6
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
function findDifference() {
  var sum_1 = 0,
      sum_2 = 0;

  for (i=1; i<=100; i++) {
    sum_1 += Math.pow(i,2);
    sum_2 += i;
  };

  var result = Math.pow(sum_2, 2) - sum_1;

  console.log(result);
}


/*
  Problem 7
  What is the 10001st prime number?
*/
function find10001Prime() {
  var arr = [2,3,5,7,11,13],
      nextNum = 15;

  while (arr.length <= 10001) {
    checkIfPrime(nextNum, arr) && arr.push(nextNum);
    nextNum = nextNum + 2;
  }

  console.log(arr[10000]);
}

function checkIfPrime(num, arr) {
  Math.sqrt(num)
  for (i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      return false;
    }
  }
  return true;
}


function productOf13() {
  var number = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450",
      smallArray = [],
      arrayProduct,
      answer = 0;

  for (var i=0; i<1000; i++) {
    smallArray = number.substring(i, i+13).split("");
    
    arrayProduct = smallArray.reduce(function(a, b) {
      return a * b;
    });

    if (arrayProduct >= answer) { answer = arrayProduct };
  }

  return answer;
}


/*
  Problem 9.
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/

function getPythagorean() {
  var a,b,c;

  // a = 1000 - b - c

  for (c=3; c<1000; c++) {  
    for (b=2; b<c; b++) {
      a = 1000 - b - c;
      if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) {
        console.log( a, b, c);
        return a*b*c;
      }
    }
  }
}

/*
  Problem 10
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
*/