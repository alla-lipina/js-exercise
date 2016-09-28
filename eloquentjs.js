/*
We’ve seen that % (the remainder operator) can be used to test whether a 
number is even or odd by using % 2 to check whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of 
a way to fix this?
*/

function isEven(number) {
  if (number === 0) {
    return true
  } else if (number === 1 || number === -1) {
    return false
  } else {
    return isEven(number > 1 ? number - 2 : number + 2)
  }
}


/*
You can get the Nth character, or letter, from a string by writing 
"string".charAt(N), similar to how you get its length with "s".length. 
The returned value will be a string containing only one character (for example, "b" ).
The  first character has position zero, which causes the last one to be 
found at position string.length - 1. In other words, a two-character string 
has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument 
and returns a number that indicates how many uppercase “B” characters are 
in the string.
Next, write a function called countChar that behaves like countBs, except 
it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of
 this new function.
*/

function countChar(str, letter) {
  var i = 0, n = 0;
  while (i < str.length) {
    str.charAt(i) == letter && n++
    i++
  }
  return n
}


/*
*/
function range(start, end, step) {
  var i = start
      j = end, 
      array = [];

  if (start < end) {
    while (i <= j) {
      array.push(i)
      step !== undefined ? i = i + step : i++
    }
  } else if (step !== undefined && start > end) {
    while (i >= j) {
      array.push(i)
      i = i + step;
    }
  }

  return array;
}

function sum(arr) {
  return arr.reduce(function(prev, next) {return prev+next})
}


/*
Arrays have a method reverse, which changes the array by inverting 
the order in which its elements appear. For this exercise, write 
two functions, reverseArray and reverseArrayInPlace. The  rst, reverseArray, 
takes an array as argument and produces a new array that has the same 
elements in the inverse order. 
The second, reverseArrayInPlace, does what 
the reverse method does: it modi es the array given as argument in order 
to reverse its elements. Neither may use the standard reverse method.
*/
function reverseArray(arr) {
  var newArr = [];

  for (var i=0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }

  return newArr;
}


function reverseArrayInPlace(arr) {
  var co,
      totalEl = arr.length;

  for (var i=totalEl-1; i >= 0; i--) {
    arr.push(arr[i])
  }

  return arr.slice(totalEl)
}

/*
Write a function arrayToList that builds up a data structure 
like the previous one when given [1, 2, 3] as argument, and 
write a listToArray function that produces an array from a list. 
Also write the helper functions prepend, which takes an element 
and a list and creates a new list that adds the element to the 
front of the input list, and nth, which takes a list and a number 
and returns the element at the given position
in the list, or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/


