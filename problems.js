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
// 25164150

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
// 104743
