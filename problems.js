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
function getLargest() {
  var a=999,
      b,
      c,
      q=1;

  while (a => 900) {
    b = a;

    while (b => 900) {
      c = (a * b);

      if (ifPali(c.toString())) {
        console.log("a="+ a + " b="+ b + " Here comes Pali: " + c);
        (c > q) && (q = c);
      }
      b--
    }

    a--
  }
  return q;
}



  for (a=999; a<=100; a--) {
    for (b=a; b<=100; b--) {
      c = (a * b);

      if (ifPali(c.toString())) {
        console.log("a="+ a + " b="+ b + " Here comes Pali: " + c);
        (c > q) && (q = c);
      }
    }
    console.log("a=" + a)
  }
  





