// Constructing Strings with Variables ~ 29:02 Start

// var ourName = "freeCodeCamp";
// var ourString = "Hello, our name is " + ourName + ", how are you?";
// console.log(ourString);

// //

// var myName = "Beau";
// var myStr = "My name is " + myName + " and I am well!";
// console.log(myStr);

// Appending Variables to Strings ~ 30:14

// var anAdjective = "awesome!";
// var ourString = "freeCodeCamp is ";
// ourString += anAdjective;
// console.log(ourString);

// //

// var someAdjective = "worthwhile.";
// var myStr = "Learning to code is ";
// myStr += someAdjective;
// console.log(myStr);

// Find Length of String ~ 31:11

// var firstNameLength = 0;
// var firstName = "Ada";

// firstNameLength = firstName.length;
// console.log(firstNameLength);

// //Setup

// var lastNameLength = 0;
// var lastName = "Lovelace";
// lastNameLength = lastName.length;
// console.log(lastNameLength);

// Bracket Notation to find First Character in String

// Example

// var firstLetterOfFirstName = "";
// var firstName = "Ada";

// firstLetterOfFirstName = firstName[0];

// console.log(firstLetterOfFirstName);

// //Setup

// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
// firstLetterOfLastName = lastName[0];

// console.log(firstLetterOfLastName);

// String Immutability ~ 33:26

// var myStr = "Jello World";
// // myStr[0] = "H" // Wont work as individual characters in a string cannot be changed
// myStr = "Hello World";
// // will work because you are overwriting the previous value with a new one, not modifying a character
// console.log(myStr); 

// Bracket Notation to find Nth Character in String ~ 34:23

// var firstName = "Ada";
// var secondLetterOfName = firstName[1];

// // Setup
// var lastName = "Lovelace";

// // 

// var thirdLetterOfName = lastName[2];

// Bracket Notation to Find Last Character in String ~ 34:53

// var firstName = "Ada";
// var lastLetterOfFirstName = firstName[firstName.length - 1];

// var lastName = "Lovelace";

// var lastLetterOfLastName = lastName[lastName.length - 1];

// console.log(lastLetterOfFirstName);
// console.log(lastLetterOfLastName);

// Bracket Notation to find Nth-to-Last Character in String ~ 35:50

// var firstName = "Ada";
// var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// var lastName = "Lovelace";

// var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// console.log(thirdToLastLetterOfFirstName);
// console.log(secondToLastLetterOfLastName);

//  Word Blanks ~ 36:30
/*
function wordBlanks (myNoun, myAdjective, myVerb, myAdverb)
{
    //Your code below this line
    var result = "";
    result += "The " + myAdjective+ " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    // Your code above this line
    
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("hippos", "huge", "hopped", "happily"));
console.log(wordBlanks("dragon", "shiny", "laughed", "maliciously"));
*/
/*
In a madlib game you are provided sentences with some missing words
like nouns, verbs, adjectives, and adverbs and then you fill in the missing pieces
with words of your choice to make a sentence that could be funny and hopefully
makes a little bit of sense.
*/

// Store Multiple Values with Arrays ~ 40:44

// var ourArray = ["John", 23];
// // elements in the array can have different data types

// var myArray = ["Quincy", 1];

// console.log(myArray);

// Nested Arrays ~ 41:45
// var ourArray = [["the universe", 42],["everything", 101010]];

// var myArray = [["Bulls", 23], ["White", 45]];

// Access Array Data with Indexes 43:33

// var ourArray = [50,60,70];
// var ourData = [ourArray[0]];

// console.log(ourData);

// var myArray = [50,60,70];

// var myData = [myArray[0]];
// console.log(myData);

// // Modify Array Data with Indexes ~ 43:35

// var ourArray = [18, 64, 99];
// ourArray[1] = 45;
// console.log(ourArray);

// var myArray = [18,64,99];
// myArray[0] = 45;
// console.log(myArray);

// Access Multi-Dimensional Arrays With Indexes 44:49

// var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

// var myData = myArray[2][1]; 
/* 
>>[2][1] Third Element in the overarching Array
In this case the second element is also an array, 
so we double bracket notation
[2]>>[1] Second Index of the array within the array
The console should output 1 when you output the value of myData
*/
// console.log(myData);

// Manipulate Arrays with push() ~ 46:30
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy","joy"]);
// // ourArray now equals ["Stimspon", "J", "cat", ["happy", "joy"]]
// console.log(ourArray[3][1]);

// var myArray = [["John", 23],["cat",2]];
// myArray.push(["dog", 3]);

// console.log(myArray[2][1]);

// Manipulate Arrays with pop () ~ 47:30
// var ourArray = [1,2,3];
// var removedFromOurArray = ourArray.pop();
// //removedFromOurArray now equals 3, and ourArray now equals [1,2]
// //
// var myArray = [["John", 23],["cat",2]];

// var removedFromMyArray = myArray.pop();
// console.log(myArray);
// console.log(removedFromMyArray);

// Manipulate Arrays with shift ()
// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// //removedFromOurArray now equals "Stimpson" and ourArray
// // now equals ["J", ["cat"]]
// var myArray = [["John", 23], ["dog", 3]];

// var removedFromMyArray =  myArray.shift();

// console.log(myArray);

// Manipulate Arrays with unshift () ~ 49:23
var ourArray = ["Stimpson", "J", "cat"]; 
ourArray.shift(); // ourArray now equals ["J","cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])
console.log(myArray);