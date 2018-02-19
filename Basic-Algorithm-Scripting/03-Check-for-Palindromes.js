
function palindrome(str) {


// First we lowercase the string and remove all non-alphanumeric characters

  var newStr = str.toLowerCase().replace(/[\W_\s]/g, "");


// We make a new instance of the string in reverse, borrowed from 1st task

  var revStr = newStr.split("").reverse().join("");


// We use comparison operator on first halves of strings to return true or false

  return newStr.substr(0, Math.floor(newStr.length / 2)) === revStr.substr(0, Math.floor(newStr.length / 2));

}



palindrome("2_A3* 4#A2");



/*

Advanced Code Solution (most performant):



// this solution performs at minimum 7x better, at maximum infinitely better.

// read the explanation for the reason why. I just failed this in an interview.


function palindrome(str) {
  

// assign a front and a back pointer

  let front = 0;

  let back = str.length - 1;



// back and front pointers won't always meet in the middle, so use (back > front)

  while (back > front) {


// increments front pointer if current character doesn't meet criteria
    
    while ( str[front].match(/[\W_]/) ) {

      front++;

      continue;

    }


// decrements back pointer if current character doesn't meet criteria

    while ( str[back].match(/[\W_]/) ) {

      back--;

      continue;

    }


// finally does the comparison on the current character

    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) 
      return false;

    front++;

    back--;
  }


// if the whole string has been compared without returning false, it's a palindrome!

return true;


}



Code Explanation:


I was given this problem in an interview (spoiler: I wasn’t hired :( ) 
I quickly arrived at the basic solution, and the interviewer told me to make it better. 
The algorithm would take way too long if he passed the Bible as the string. He wanted it to be instant.


The simpler solutions perform very poorly on long strings because they operate on the whole string multiple times (toLowerCase(), replace(), split(), reverse(), join()) before comparing the whole string twice.


The beauty of this solution is it never needs to read through the whole string, even once, to know that it’s not a palindrome. Why read through the whole string if you can tell that it’s not a palindrome just by looking at two letters?


Uses a while loop instead of a for loop as a best practice - because we are using two variables, one is the index starting from the beginning of the string, and the other starts at the end of the string.

*/
