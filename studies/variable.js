/**
 * 
 * 0: Variables are named containers in Javascript. To declare variables you can use one of the var, let, and const key words. Declaring a variable is essentially
 *   creating a name that you can later refrence.  A variable declariation is automatically assigned to undefined until the variable is assigned using the assignment 
 *   operator (=). Since variables cannot have spaces in their names, it is important to use snake case when a variable name has multiple words. ie: multipleWordNameVariable.
 * 
 * 1. Declaration and Assignment
 *      a. Declaration happens when either var, let or const is called and followed by your variables name. ie: var variableName, let variableName, or const varibaleName
 *      b. Assignment occurs when you set your variable equal to it intended value or data. ie: variableName = 0, variableName = 'string', variableName = [].
 * 
 * 2: Var, Let, Const
 *      a. Var:    The var keyword creates a globaly scoped variable. At run time, the variable declaration will be hoisted. Variables declared using the var key word can be 
 *                 re-assigned the same way they were originally assinging using the assignment operator(=).
 *  
 *      b. Let:    The let keyword creates a block scoped variable and will not be hoisted at run time.  Varibale declared using the let keyword can also be re-assigned the 
 *                 same way the were originally assigned using the assignment operator(=).
 * 
 *      c. Const:  The const key word also creates a block scoped variable that will not be hoisted at run time.  Variable declared using the const keyword cannot be re-assigned.
 * 
 * 
 * 
 * 
 * 
 * 
 */

// 1 // Declaration
var age; //declares a variable called age
age = 23; //assigns age to a value that represents my age
age = 24; //re-assignts age to a new value

let name; // declares a variable called name
name = 'Benjamin'; //assigns name to a string that represents my name
name = 'Klein'; //re-assigns name to a new string

const gender; // declares a variable called gender
gender = 'male'; // assigns gender to my gender
gender = 'female'; // throws an error because const variables cannot be re-assigned
