// Shopping List ~ 50:37

// var myList = [["cereal", 3]["milk", 2]["bananas", 3]["juice", 2]["eggs", 12]];

// Write Reusable Code with Functions ~ 51:42
// function ourReusableFunction()
// {
//     console.log("Heyya, World");
// }
// ourReusableFunction();

// function reusableFunction()
// {
//     console.log("Hi World");
// }
// reusableFunction(); 

// Passing Values to Functions with Arguments

// function ourFunctionWithArgs(a,b)
// {
//     console.log(a - b);
// }
// ourFunctionWithArgs(10,5);

// function functionWithArgs (a,b)
// {
//     console.log(a + b);
// }
// functionWithArgs(10,5);

// Global Scope and Functions

// var myGlobal = 10;

// function fun1()
// {
//     oopsGlobal = 5;
//     // By not putting the var keyword, this variable is global by default
//     // var will make the variable limited to its scope
// }

// function fun2()
// {
//     var output = "";
//     if (typeof myGlobal != "undefined")
//     {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined")
//     {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();

// Local Scope and Functions ~ 59:32

function myLocalScope()
    {
        var myVar = 5;
        console.log(myVar);
    }
    myLocalScope();

