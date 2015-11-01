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