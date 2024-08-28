### 1. challenge Your JavaScript Code

**Summary:**
challenges are used to leave notes in the code and are ignored by the JavaScript engine. There are two types of challenges:

- **Single-line challenges:** Use `//` at the beginning of the challenge.
  ```javascript
  // This is a single-line challenge
  ```
- **Multi-line challenges:** Enclosed in `/* */`.
  ```javascript
  /* This is a
     multi-line challenge */
  ```

### 2. Declare JavaScript Variables

**Summary:**
Variables are containers for storing data values. In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords.

- **var:** Declares a variable, optionally initializing it to a value.
  ```javascript
  var x = 10;
  ```
- **let:** Declares a block-scoped local variable, optionally initializing it to a value.
  ```javascript
  let y = 20;
  ```
- **const:** Declares a block-scoped, read-only named constant.
  ```javascript
  const z = 30;
  ```

### 3. Storing Values with the Assignment Operator

**Summary:**
The assignment operator `=` is used to assign a value to a variable.

```javascript
var a = 5;
let b = 10;
const c = 15;
```

### 4. Assigning the Value of One Variable to Another

**Summary:**
You can assign the value of one variable to another using the assignment operator `=`.

```javascript
let a = 5;
let b = a; // b now has the value of 5
```

### 5. Initializing Variables with the Assignment Operator

**Summary:**
Variables can be declared and assigned values simultaneously.

```javascript
let myVar = 1;
```

### 6. Declare String Variables

**Summary:**
Strings are text and are created by enclosing the text in single or double quotes.

```javascript
let myName = 'John';
let myCity = 'New York';
```

### 7. Understanding Uninitialized Variables

**Summary:**
Variables declared without an initial value have the value `undefined`.

```javascript
let myVar;
console.log(myVar); // Output: undefined
```

### 8. Understanding Case Sensitivity in Variables

**Summary:**
Variable names in JavaScript are case-sensitive.

```javascript
let myVar = 1;
let myvar = 2;
console.log(myVar); // Output: 1
console.log(myvar); // Output: 2
```

### 9. Explore Differences Between var and let Keywords

**Summary:**

- **var:** Function-scoped or globally-scoped and can be re-declared.
  ```javascript
  var x = 1;
  var x = 2; // No error
  ```
- **let:** Block-scoped and cannot be re-declared within the same block.
  ```javascript
  let y = 1;
  // let y = 2; // Error: Identifier 'y' has already been declared
  ```

### 10. Declare a Read-Only Variable with the const Keyword

**Summary:**
`const` declares a block-scoped, read-only named constant. The value of a `const` variable cannot be changed through reassignment, and it cannot be re-declared.

```javascript
const pi = 3.14;
// pi = 3.15; // Error: Assignment to constant variable.
```

### 11. Add Two Numbers with JavaScript

**Summary:**
The `+` operator adds two numbers.

```javascript
let sum = 5 + 10; // sum is 15
```

### 12. Subtract One Number from Another Number with JavaScript

**Summary:**
The `-` operator subtracts one number from another.

```javascript
let difference = 10 - 5; // difference is 5
```

### 13. Multiply Two Numbers with JavaScript

**Summary:**
The `*` operator multiplies two numbers.

```javascript
let product = 4 * 5; // product is 20
```

### 14. Divide One Number by Another with JavaScript

**Summary:**
The `/` operator divides one number by another.

```javascript
let quotient = 20 / 4; // quotient is 5
```

### 15. Increment a Number with JavaScript

**Summary:**
The `++` operator increments a number by one.

```javascript
let myVar = 5;
myVar++; // myVar is now 6
```

### 16. Decrement a Number with JavaScript

**Summary:**
The `--` operator decrements a number by one.

```javascript
let myVar = 5;
myVar--; // myVar is now 4
```

### 17. Create Decimal Numbers with JavaScript

**Summary:**
Decimal numbers (also known as floating-point numbers) can be created by including a decimal point.

```javascript
let myDecimal = 5.7;
let anotherDecimal = 0.3;
```

### Lesson 18: Multiply Two Decimals with JavaScript

#### Summary

In JavaScript, you can perform arithmetic operations on decimal numbers (also known as floating-point numbers). Multiplication of decimals is done using the `*` operator.

#### Syntax

```javascript
let product = decimal1 * decimal2;
```

#### Examples

```javascript
let a = 5.5;
let b = 2.2;
let product = a * b;
console.log(product); // 12.1
```

#### Practice

Multiply the decimals `4.5` and `3.3` and store the result in a variable `result`.

### Lesson 19: Divide One Decimal by Another with JavaScript

#### Summary

Division of decimal numbers in JavaScript is done using the `/` operator.

#### Syntax

```javascript
let quotient = decimal1 / decimal2;
```

#### Examples

```javascript
let a = 5.5;
let b = 2.2;
let quotient = a / b;
console.log(quotient); // 2.5
```

#### Practice

Divide the decimal `9.9` by `3.3` and store the result in a variable `result`.

### Lesson 20: Finding a Remainder in JavaScript

#### Summary

The remainder operator (`%`) returns the remainder of the division of two numbers.

#### Syntax

```javascript
let remainder = dividend % divisor;
```

#### Examples

```javascript
let a = 11;
let b = 3;
let remainder = a % b;
console.log(remainder); // 2
```

#### Practice

Find the remainder of `25` divided by `7` and store it in a variable `remainder`.

### Lesson 21: Compound Assignment With Augmented Addition

#### Summary

Compound assignment operators allow you to perform an arithmetic operation and assignment in a single step. The augmented addition operator (`+=`) adds a value to a variable and assigns the result to that variable.

#### Syntax

```javascript
variable += value;
```

#### Examples

```javascript
let a = 5;
a += 3; // a = a + 3
console.log(a); // 8
```

#### Practice

Add `10` to the variable `score` using the `+=` operator.

### Lesson 22: Compound Assignment With Augmented Subtraction

#### Summary

The augmented subtraction operator (`-=`) subtracts a value from a variable and assigns the result to that variable.

#### Syntax

```javascript
variable -= value;
```

#### Examples

```javascript
let a = 10;
a -= 4; // a = a - 4
console.log(a); // 6
```

#### Practice

Subtract `5` from the variable `balance` using the `-=` operator.

### Lesson 23: Compound Assignment With Augmented Multiplication

#### Summary

The augmented multiplication operator (`*=`) multiplies a variable by a value and assigns the result to that variable.

#### Syntax

```javascript
variable *= value;
```

#### Examples

```javascript
let a = 4;
a *= 2; // a = a * 2
console.log(a); // 8
```

#### Practice

Multiply the variable `points` by `3` using the `*=` operator.

### Lesson 24: Compound Assignment With Augmented Division

#### Summary

The augmented division operator (`/=`) divides a variable by a value and assigns the result to that variable.

#### Syntax

```javascript
variable /= value;
```

#### Examples

```javascript
let a = 20;
a /= 5; // a = a / 5
console.log(a); // 4
```

#### Practice

Divide the variable `total` by `4` using the `/=` operator.

### Lesson 25: Escaping Literal Quotes in Strings

#### Summary

To include quotes inside a string, you need to escape them using the backslash (`\`) character.

#### Syntax

```javascript
let str = 'He said, "Hello, world!"';
```

#### Examples

```javascript
let quote = 'She said, "JavaScript is awesome!"';
console.log(quote); // She said, "JavaScript is awesome!"
```

#### Practice

Create a string variable `dialogue` with the value `He said, "It's a beautiful day!"`.

### Lesson 26: Quoting Strings with Single Quotes

#### Summary

You can use single quotes to define strings, especially useful when the string itself contains double quotes.

#### Syntax

```javascript
let str = 'He said, "Hello, world!"';
```

#### Examples

```javascript
let quote = 'She said, "JavaScript is awesome!"';
console.log(quote); // She said, "JavaScript is awesome!"
```

#### Practice

Create a string variable `sentence` with the value `It's a great day!`.

### Lesson 27: Escaping Sequences in Strings

#### Summary

Escape sequences allow you to include special characters in strings. Common escape sequences include:

- `\'` for single quote
- `\"` for double quote
- `\\` for backslash
- `\n` for newline
- `\t` for tab

#### Syntax

```javascript
let str = 'First line\nSecond line';
```

#### Examples

```javascript
let multiLine = 'First line\nSecond line';
console.log(multiLine);
/*
First line
Second line
*/
```

#### Practice

Create a string variable `path` with the value `C:\\Program Files\\JavaScript`.

### Lesson 28: Concatenating Strings with Plus Operator

#### Summary

The `+` operator is used to concatenate (combine) two or more strings.

#### Syntax

```javascript
let str = 'Hello, ' + 'world!';
```

#### Examples

```javascript
let greeting = 'Hello, ' + 'world!';
console.log(greeting); // Hello, world!
```

#### Practice

Concatenate the strings `"Hello, "` and `"JavaScript!"` and store the result in a variable `message`.

### Lesson 29: Concatenating Strings with Plus Equals Operator

#### Summary

The `+=` operator can be used to concatenate strings and assign the result to the original string variable.

#### Syntax

```javascript
let str = 'Hello';
str += ', world!';
```

#### Examples

```javascript
let greeting = 'Hello';
greeting += ', world!';
console.log(greeting); // Hello, world!
```

#### Practice

Start with the variable `sentence` set to `"Learning"`. Use `+=` to add `" JavaScript is fun!"`.

### Lesson 30: Constructing Strings with Variables

#### Summary

You can build strings using variables and concatenation.

#### Syntax

```javascript
let name = 'John';
let greeting = 'Hello, ' + name + '!';
```

#### Examples

```javascript
let firstName = 'John';
let lastName = 'Doe';
let fullName = 'Hello, ' + firstName + ' ' + lastName + '!';
console.log(fullName); // Hello, John Doe!
```

#### Practice

Create variables `firstName` and `lastName`, then construct a greeting message `"Hello, firstName lastName!"`.

### Lesson 31: Appending Variables to Strings

#### Summary

Variables can be appended to strings using the `+=` operator.

#### Syntax

```javascript
let str = 'Hello';
let name = 'John';
str += ', ' + name + '!';
```

#### Examples

```javascript
let sentence = 'My favorite color is ';
let color = 'blue';
sentence += color;
console.log(sentence); // My favorite color is blue
```

#### Practice

Create a string variable `statement` with `"I am learning "`. Append the variable `language` with the value `"JavaScript"`.

### Lesson 32: Find the Length of a String

#### Summary

The `.length` property is used to find the number of characters in a string.

#### Syntax

```javascript
let length = str.length;
```

#### Examples

```javascript
let name = 'JavaScript';
console.log(name.length); // 10
```

#### Practice

Find the length of the string `"Hello, world!"` and store it in a variable `length`.

### Lesson 33: Use Bracket Notation to Find the First Character in a String

#### Summary

Bracket notation is used to access characters in a string by their index. The first character is at index `0`.

#### Syntax

```javascript
let firstChar = str[0];
```

#### Examples

```javascript
let word = 'JavaScript';
console.log(word[0]); // J
```

#### Practice

Find the first character of the string `"Hello"` and store it in a variable `firstCharacter`.

### Lesson 34: Understand String Immutability

#### Summary

Strings in JavaScript are immutable, meaning their individual characters cannot be changed. You must create a new string to make modifications.

#### Examples

```javascript
let str = 'Hello';
str[0] = 'J'; // This will not work
str = 'Jello'; // This creates a new string
console.log(str); // Jello
```

#### Practice

Explain why the following code doesn't change the first character:

```javascript
let str = 'JavaScript';
str[0] = 'Y';
console.log(str); // JavaScript
```

### Lesson 35: Use Bracket Notation to Find the Nth Character in a String

#### Summary

Bracket notation can be used to access any character in a string by its index.

#### Syntax

```javascript
let nthChar = str[n];
```

#### Examples

```javascript
let word = 'JavaScript';
console.log(word[4]); // S
```

#### Practice

Find the third character of the string `"Programming"` and store it in a variable `thirdCharacter`.

### Lesson 36: Use Bracket Notation to Find the Last Character in a String

#### Summary

You can use the `.length` property and bracket notation to find the last character of a string.

#### Syntax

```javascript
let lastChar = str[str.length - 1];
```

#### Examples

```javascript
let word = 'JavaScript';
console.log(word[word.length - 1]); // t
```

#### Practice

Find the last character of the string `"Learning"` and store it in a variable `lastCharacter`.

### Lesson 37: Use Bracket Notation to Find the Nth-to-Last Character in a String

#### Summary

You can use the `.length` property and bracket notation to find any character relative to the end of the string.

#### Syntax

```javascript
let nthToLastChar = str[str.length - n];
```

#### Examples

```javascript
let word = 'JavaScript';
console.log(word[word.length - 2]); // p
```

#### Practice

Find the second-to-last character of the string `"JavaScript"` and store it in a variable `secondToLastCharacter`.

### Lesson 38: Word Blanks

#### Summary

"Word Blanks" is a simple game where you create sentences using variables and strings. This helps practice string concatenation and variable usage.

#### Syntax

```javascript
let sentence = 'My ' + adjective + ' ' + noun + ' ' + verb + ' quickly.';
```

#### Examples

```javascript
let adjective = 'quick';
let noun = 'fox';
let verb = 'jumps';
let adverb = 'quickly';
let sentence =
	'The ' +
	adjective +
	' ' +
	noun +
	' ' +
	verb +
	' over the lazy dog ' +
	adverb +
	'.';
console.log(sentence); // The quick fox jumps over the lazy dog quickly.
```

#### Practice

Create a sentence using variables for `myNoun`, `myAdjective`, `myVerb`, and `myAdverb` and concatenate them into a full sentence.

### Lesson 39: Store Multiple Values in one Variable using JavaScript Arrays

#### Summary

Arrays are used to store multiple values in a single variable. Each value in an array has an index, starting from `0`.

#### Syntax

```javascript
let arrayName = [value1, value2, value3];
```

#### Examples

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

#### Practice

Create an array `myArray` with the values `"one"`, `"two"`, and `"three"`.

### Lesson 40: Nest One Array within Another Array

#### Summary

Arrays can contain other arrays, creating a multi-dimensional array.

#### Syntax

```javascript
let nestedArray = [
	[value1, value2],
	[value3, value4],
];
```

#### Examples

```javascript
let numberPairs = [
	[1, 2],
	[3, 4],
	[5, 6],
];
console.log(numberPairs); // [[1, 2], [3, 4], [5, 6]]
```

#### Practice

Create a nested array `nestedArray` with two sub-arrays: `[1, 2]` and `[3, 4]`.

### Lesson 41: Access Array Data with Indexes

#### Summary

You can access elements in an array using their index.

#### Syntax

```javascript
let element = arrayName[index];
```

#### Examples

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]); // Banana
```

#### Practice

Access the second element of the array `myArray = [10, 20, 30]` and store it in a variable `secondElement`.

### Lesson 42: Modify Array Data with Indexes

#### Summary

You can change an element in an array using its index.

#### Syntax

```javascript
arrayName[index] = newValue;
```

#### Examples

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
fruits[1] = 'Blueberry';
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
```

#### Practice

Change the first element of the array `myArray = [1, 2, 3]` to `99`.

### Lesson 43: Access Multi-Dimensional Arrays with Indexes

#### Summary

You can access elements in a multi-dimensional array using multiple indexes.

#### Syntax

```javascript
let element = arrayName[index1][index2];
```

#### Examples

```javascript
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(matrix[1][2]); // 6
```

#### Practice

Access the element `4` in the array `myArray = [[1, 2], [3, 4], [5, 6]]` and store it in a variable `element`.

### Lesson 44: Manipulate Arrays With push Method

#### Summary

The `push` method adds one or more elements to the end of an array.

#### Syntax

```javascript
arrayName.push(element1, element2);
```

#### Examples

```javascript
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

#### Practice

Add the element `4` to the array `myArray = [1, 2, 3]` using the `push` method.

### Lesson 45: Manipulate Arrays With pop Method

#### Summary

The `pop` method removes the last element from an array and returns it.

#### Syntax

```javascript
let lastElement = arrayName.pop();
```

#### Examples

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit); // Cherry
console.log(fruits); // ["Apple", "Banana"]
```

#### Practice

Remove the last element from the array `myArray = [1, 2, 3]` and store it in a variable `lastElement`.

### Lesson 46: Manipulate Arrays With shift Method

#### Summary

The `shift` method removes the first element from an array and returns it.

#### Syntax

```javascript
let firstElement = arrayName.shift();
```

#### Examples

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruits.shift();
console.log(firstFruit); // Apple
console.log(fruits); // ["Banana", "Cherry"]
```

#### Practice

Remove the first element from the array `myArray = [1, 2, 3]` and store it in a variable `firstElement`.

### Lesson 47: Manipulate Arrays With unshift Method

#### Summary

The `unshift` method adds one or more elements to the beginning of an array.

#### Syntax

```javascript
arrayName.unshift(element1, element2);
```

#### Examples

```javascript
let fruits = ['Banana', 'Cherry'];
fruits.unshift('Apple');
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

#### Practice

Add the element `0` to the beginning of the array `myArray = [1, 2, 3]` using the `unshift` method.

### Lesson 48: Shopping List

#### Summary

A shopping list is a great way to practice working with arrays. Create an array to hold multiple sub-arrays, each representing an item and its quantity.

#### Syntax

```javascript
let shoppingList = [
	['item1', quantity1],
	['item2', quantity2],
];
```

#### Examples

```javascript
let shoppingList = [
	['Apples', 3],
	['Bananas', 2],
	['Milk', 1],
];
console.log(shoppingList);
/*
[
  ["Apples", 3],
  ["Bananas", 2],
  ["Milk", 1]
]
*/
```

#### Practice

Create a shopping list with at least three items and their quantities.

### Lesson 49: Write Reusable JavaScript Functions

#### Summary

Functions are reusable blocks of code that perform a specific task. You can define a function once and call it multiple times.

#### Syntax

```javascript
function functionName() {
	// code to be executed
}
```

#### Examples

```javascript
function greet() {
	console.log('Hello, world!');
}
greet(); // Hello, world!
```

#### Practice

Write a function `sayHello` that logs `"Hello!"` to the console.

### Lesson 50: Passing Values to Functions With Arguments

#### Summary

Functions can accept inputs called arguments, which are used within the function to perform actions.

#### Syntax

```javascript
function functionName(arg1, arg2) {
	// code to be executed
}
```

#### Examples

```javascript
function greet(name) {
	console.log('Hello, ' + name + '!');
}
greet('Alice'); // Hello, Alice!
```

#### Practice

Write a function `add` that takes two arguments and returns their sum.

### Lesson 51: Return a Value from a Function with Return

#### Summary

The `return` statement is used to return a value from a function.

#### Syntax

```javascript
function functionName() {
	return value;
}
```

#### Examples

```javascript
function add(a, b) {
	return a + b;
}
let sum = add(2, 3);
console.log(sum); // 5
```

#### Practice

Write a function `multiply` that takes two arguments and returns their product.

### Lesson 52: Global Scope and Functions

#### Summary

Variables declared outside of any function have global scope, meaning they can be accessed from anywhere in the code.

#### Examples

```javascript
let globalVar = "I'm global!";

function logGlobalVar() {
	console.log(globalVar);
}

logGlobalVar(); // I'm global!
```

#### Practice

Declare a global variable `myGlobal` and write a function `logMyGlobal` that logs `myGlobal` to the console.

### Lesson 53: Local Scope and Functions

#### Summary

Variables declared within a function have local scope, meaning they can only be accessed within that function.

#### Examples

```javascript
function myFunction() {
	let localVar = "I'm local!";
	console.log(localVar);
}

myFunction(); // I'm local!
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
```

#### Practice

Write a function `myLocalScope` and declare a variable `myLocal` inside it. Log `myLocal` to the console inside the function.

### Lesson 54: Global vs. Local Scope in Functions

#### Summary

Global and local variables can have the same name. When this happens, the local variable takes precedence within the function.

#### Examples

```javascript
let someVar = 'Global';

function myFunction() {
	let someVar = 'Local';
	console.log(someVar); // Local
}

myFunction();
console.log(someVar); // Global
```

#### Practice

Declare a global variable `outerWear` with the value `"T-Shirt"`. Create a function `myOutfit` and declare a local variable `outerWear` with the value `"Sweater"`. Return the value of `outerWear` from the function and log it.

### Lesson 55: Understanding Undefined Value returned from a Function

#### Summary

A function without a `return` statement returns `undefined` by default.

#### Examples

```javascript
function doNothing() {
	// no return statement
}

let result = doNothing();
console.log(result); // undefined
```

#### Practice

Write a function `noReturn` that logs a message but does not return a value. Log the result of calling `noReturn`.

### Lesson 56: Assignment with a Returned Value

#### Summary

You can assign the result of a function to a variable.

#### Examples

```javascript
function add(a, b) {
	return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8
```

#### Practice

Write a function `subtract` that takes two arguments and returns their difference. Assign the result of calling `subtract(10, 4)` to a variable `difference`.

### Lesson 57: Stand in Line

#### Summary

In this exercise, you will simulate a queue using an array. You'll use `push` to add elements to the end of the array and `shift` to remove elements from the front of the array.

#### Examples

```javascript
function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6)); // 1
console.log(testArr); // [2, 3, 4, 5, 6]
```

#### Practice

Create a function `nextInQueue` that takes an array and an item as arguments, adds the item to the end of the array, and returns the item removed from the front.

### Lesson 58: Understanding Boolean Values

#### Summary

Booleans represent one of two values: `true` or `false`.

#### Examples

```javascript
let isTrue = true;
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse); // false
```

#### Practice

Create two variables `yes` and `no`, assigning them the values `true` and `false` respectively. Log both variables to the console.

### Lesson 59: Use Conditional Logic with If Statements

#### Summary

`if` statements execute a block of code if a specified condition is `true`.

#### Syntax

```javascript
if (condition) {
	// code to be executed if the condition is true
}
```

#### Examples

```javascript
let num = 10;
if (num > 5) {
	console.log('Number is greater than 5');
}
```

#### Practice

Write an `if` statement that logs `"Number is positive"` if the variable `num` is greater than `0`.

### Lesson 60: Comparison with the Equality Operator

#### Summary

The equality operator (`==`) compares two values for equality, converting their types if necessary.

#### Syntax

```javascript
if (value1 == value2) {
	// code to be executed if the values are equal
}
```

#### Examples

```javascript
let num = 5;
if (num == '5') {
	console.log('Equal');
}
```

#### Practice

Write an `if` statement that checks if the variable `x` is equal to `"10"` and logs `"Equal"` if true.

### Lesson 61: Comparison with the Strict Equality Operator

#### Summary

The strict equality operator (`===`) compares two values for equality without type conversion.

#### Syntax

```javascript
if (value1 === value2) {
	// code to be executed if the values and types are equal
}
```

#### Examples

```javascript
let num = 5;
if (num === 5) {
	console.log('Strictly equal');
}
```

#### Practice

Write an `if` statement that checks if the variable `x` is strictly equal to `10` and logs `"Strictly equal"` if true.

### Lesson 62: Practice Comparing Different Values

#### Summary

Practice using equality and strict equality operators to compare different values.

#### Examples

```javascript
let num = 5;
let str = '5';
console.log(num == str); // true
console.log(num === str); // false
```

#### Practice

Write code that compares the variable `y` to `"10"` using both `==` and `===` and logs the results.

### Lesson 63: Comparison with the Inequality Operator

#### Summary

The inequality operator (`!=`) compares two values for inequality, converting their types if necessary.

#### Syntax

```javascript
if (value1 != value2) {
	// code to be executed if the values are not equal
}
```

#### Examples

```javascript
let num = 5;
if (num != '6') {
	console.log('Not equal');
}
```

#### Practice

Write an `if` statement that checks if the variable `x` is not equal to `"5"` and logs `"Not equal"` if true.

### Lesson 64: Comparison with the Strict Inequality Operator

#### Summary

The strict inequality operator (`!==`) compares two values for inequality without type conversion.

#### Syntax

```javascript
if (value1 !== value2) {
	// code to be executed if the values and types are not equal
}
```

#### Examples

```javascript
let num = 5;
if (num !== '5') {
	console.log('Strictly not equal');
}
```

#### Practice

Write an `if` statement that checks if the variable `x` is strictly not equal to `10` and logs `"Strictly not equal"` if true.

### Lesson 65: Comparison with the Greater Than Operator

#### Summary

The greater than operator (`>`) compares two values and returns `true` if the first is greater than the second.

#### Syntax

```javascript
if (value1 > value2) {
	// code to be executed if value1 is greater than value2
}
```

#### Examples

```javascript
let num = 10;
if (num > 5) {
	console.log('Greater');
}
```

#### Practice

Write an `if` statement that checks if the variable `a` is greater than `b` and logs `"a is greater"` if true.

### Lesson 66: Comparison with the Greater Than Or Equal To Operator

#### Summary

The greater than or equal to operator (`>=`) compares two values and returns `true` if the first is greater than or equal to the second.

#### Syntax

```javascript
if (value1 >= value2) {
	// code to be executed if value1 is greater than or equal to value2
}
```

#### Examples

```javascript
let num = 10;
if (num >= 10) {
	console.log('Greater or equal');
}
```

#### Practice

Write an `if` statement that checks if the variable `a` is greater than or equal to `b` and logs `"a is greater or equal"` if true.

### Lesson 67: Comparison with the Less Than Operator

#### Summary

The less than operator (`<`) compares two values and returns `true` if the first is less than the second.

#### Syntax

```javascript
if (value1 < value2) {
	// code to be executed if value1 is less than value2
}
```

#### Examples

```javascript
let num = 5;
if (num < 10) {
	console.log('Less');
}
```

#### Practice

Write an `if` statement that checks if the variable `a` is less than `b` and logs `"a is less"` if true.

### Lesson 68: Comparison with the Less Than Or Equal To Operator

#### Summary

The less

than or equal to operator (`<=`) compares two values and returns `true` if the first is less than or equal to the second.

#### Syntax

```javascript
if (value1 <= value2) {
	// code to be executed if value1 is less than or equal to value2
}
```

#### Examples

```javascript
let num = 10;
if (num <= 10) {
	console.log('Less or equal');
}
```

#### Practice

Write an `if` statement that checks if the variable `a` is less than or equal to `b` and logs `"a is less or equal"` if true.

### Lesson 69: Comparisons with the Logical And Operator

#### Summary

The logical AND operator (`&&`) returns `true` if both operands are `true`.

#### Syntax

```javascript
if (condition1 && condition2) {
	// code to be executed if both conditions are true
}
```

#### Examples

```javascript
let num = 10;
if (num > 5 && num < 15) {
	console.log('In range');
}
```

#### Practice

Write an `if` statement that checks if the variable `a` is greater than `b` and less than `c` and logs `"a is in range"` if true.

### Lesson 70: Comparisons with the Logical Or Operator

#### Summary

The logical OR operator (`||`) returns `true` if either operand is `true`.

#### Syntax

```javascript
if (condition1 || condition2) {
	// code to be executed if either condition is true
}
```

#### Examples

```javascript
let num = 10;
if (num < 5 || num > 15) {
	console.log('Out of range');
}
```

#### Practice

Write an `if` statement that checks if the variable `a` is less than `b` or greater than `c` and logs `"a is out of range"` if true.

### Lesson 71: Introducing Else Statements

#### Summary

`else` statements execute a block of code if the `if` condition is `false`.

#### Syntax

```javascript
if (condition) {
	// code to be executed if the condition is true
} else {
	// code to be executed if the condition is false
}
```

#### Examples

```javascript
let num = 10;
if (num > 15) {
	console.log('Greater');
} else {
	console.log('Not greater');
}
```

#### Practice

Write an `if...else` statement that checks if the variable `a` is greater than `b` and logs `"a is greater"` if true, otherwise logs `"a is not greater"`.

### Lesson 72: Introducing Else If Statements

#### Summary

`else if` statements allow multiple conditions to be checked in sequence.

#### Syntax

```javascript
if (condition1) {
	// code to be executed if condition1 is true
} else if (condition2) {
	// code to be executed if condition2 is true
} else {
	// code to be executed if neither condition1 nor condition2 is true
}
```

#### Examples

```javascript
let num = 10;
if (num > 15) {
	console.log('Greater');
} else if (num < 5) {
	console.log('Less');
} else {
	console.log('In range');
}
```

#### Practice

Write an `if...else if...else` statement that checks if the variable `a` is greater than `b`, if `a` is equal to `b`, and if `a` is less than `b`, logging appropriate messages for each condition.

### Lesson 73: Logical Order in If Else Statements

#### Summary

The order of `if...else if...else` statements is important. Conditions are checked in sequence, and the first condition that evaluates to `true` executes its block of code.

#### Examples

```javascript
let num = 10;
if (num > 15) {
	console.log('Greater');
} else if (num > 5) {
	console.log('In range');
} else {
	console.log('Less');
}
```

#### Practice

Write an `if...else if...else` statement to check if the variable `num` is greater than `20`, if `num` is greater than `10`, and if `num` is less than or equal to `10`, logging appropriate messages for each condition.

### Lesson 74: Chaining If Else Statements

#### Summary

Chaining `if...else` statements allows multiple conditions to be checked, with each `else` providing an alternative outcome if the previous conditions are not met.

#### Examples

```javascript
let num = 10;
if (num > 20) {
	console.log('Greater than 20');
} else if (num > 10) {
	console.log('Greater than 10');
} else {
	console.log('10 or less');
}
```

#### Practice

Write an `if...else if...else` statement to check if the variable `age` is greater than `18`, if `age` is greater than `13`, and if `age` is `13` or less, logging appropriate messages for each condition.

### Lesson 75: Golf Code

#### Summary

In this exercise, you will write a function that returns different strings based on the number of strokes a golfer takes to complete a hole compared to the par of the hole.

#### Examples

```javascript
function golfScore(par, strokes) {
	if (strokes === 1) {
		return 'Hole-in-one!';
	} else if (strokes <= par - 2) {
		return 'Eagle';
	} else if (strokes === par - 1) {
		return 'Birdie';
	} else if (strokes === par) {
		return 'Par';
	} else if (strokes === par + 1) {
		return 'Bogey';
	} else if (strokes === par + 2) {
		return 'Double Bogey';
	} else {
		return 'Go Home!';
	}
}
```

#### Practice

Write the `golfScore` function as described above, using appropriate `if...else` statements.

### Lesson 76: Selecting from Many Options with Switch Statements

#### Summary

`switch` statements evaluate an expression and execute code based on the matching `case`.

#### Syntax

```javascript
switch (expression) {
	case value1:
		// code to be executed if expression === value1
		break;
	case value2:
		// code to be executed if expression === value2
		break;
	// more cases...
	default:
	// code to be executed if expression doesn't match any case
}
```

#### Examples

```javascript
let num = 2;
switch (num) {
	case 1:
		console.log('One');
		break;
	case 2:
		console.log('Two');
		break;
	default:
		console.log('Other');
}
```

#### Practice

Write a `switch` statement that checks the value of the variable `fruit` and logs different messages for `"Apple"`, `"Banana"`, and `"Orange"`, with a default message for other values.

### Lesson 77: Adding a Default Option in Switch Statements

#### Summary

The `default` case in a `switch` statement provides code to be executed if no matching `case` is found.

#### Examples

```javascript
let num = 3;
switch (num) {
	case 1:
		console.log('One');
		break;
	case 2:
		console.log('Two');
		break;
	default:
		console.log('Other');
}
```

#### Practice

Write a `switch` statement that checks the value of the variable `weather` and logs different messages for `"Sunny"`, `"Rainy"`, and `"Cloudy"`, with a default message for other values.

### Lesson 78: Multiple Identical Options in Switch Statements

#### Summary

You can group multiple `case` statements that share the same code by omitting the `break` statement until the last `case`.

#### Examples

```javascript
let num = 1;
switch (num) {
	case 1:
	case 2:
	case 3:
		console.log('One, Two, or Three');
		break;
	default:
		console.log('Other');
}
```

#### Practice

Write a `switch` statement that checks the value of the variable `day` and logs `"Weekday"` for `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, and `"Friday"`, and `"Weekend"` for `"Saturday"` and `"Sunday"`.

### Lesson 79: Replacing If Else Chains with Switch

#### Summary

`switch` statements can be used as a more readable alternative to long `if...else if...else` chains.

#### Examples

```javascript
let num = 2;
if (num === 1) {
	console.log('One');
} else if (num === 2) {
	console.log('Two');
} else {
	console.log('Other');
}

// Equivalent switch statement
switch (num) {
	case 1:
		console.log('One');
		break;
	case 2:
		console.log('Two');
		break;
	default:
		console.log('Other');
}
```

#### Practice

Rewrite the following `if...else` chain as a `switch` statement:

```javascript
if (grade === "A") {
  console.log("Excellent");
} else if (grade === "B") {
  console.log("Good");
} else if (grade === "C") {
  console.log("Average");
} else if (grade === "

D") {
  console.log("Below Average");
} else {
  console.log("Fail");
}
```

### Lesson 80: Returning Boolean Values from Functions

#### Summary

Functions can return boolean values directly from expressions.

#### Examples

```javascript
function isGreater(a, b) {
	return a > b;
}

console.log(isGreater(5, 3)); // true
console.log(isGreater(2, 4)); // false
```

#### Practice

Write a function `isEqual` that takes two arguments and returns `true` if they are equal, otherwise returns `false`.

### Lesson 81: Return Early Pattern for Functions

#### Summary

Returning early from a function can simplify code by avoiding unnecessary processing.

#### Examples

```javascript
function checkAge(age) {
	if (age < 18) {
		return 'Too young';
	}
	return 'Old enough';
}

console.log(checkAge(15)); // Too young
console.log(checkAge(20)); // Old enough
```

#### Practice

Write a function `isPositive` that takes a number as an argument and returns `"Positive"` if the number is greater than `0`, otherwise returns `"Not positive"`.

### Lesson 82: Counting Cards

#### Summary

In this exercise, you will write a function that keeps track of a count based on card values and returns a string with the current count and an action ("Bet" or "Hold").

#### Examples

```javascript
let count = 0;

function cc(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
			break;
	}

	if (count > 0) {
		return count + ' Bet';
	} else {
		return count + ' Hold';
	}
}

console.log(cc(2)); // 1 Bet
console.log(cc(10)); // 0 Hold
```

#### Practice

Write the function as described above, using appropriate `switch` statements and `if...else` logic.

### Lesson 83: Build JavaScript Objects

#### Summary

Objects in JavaScript are used to store data in key-value pairs. This lesson covers how to create and work with objects.

#### Syntax

```javascript
let objectName = {
	key1: value1,
	key2: value2,
	// more key-value pairs
};
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};
```

#### Practice

Create an object `person` with properties `firstName`, `lastName`, and `age`.

### Lesson 84: Accessing Object Properties with Dot Notation

#### Summary

Dot notation is used to access properties of an object.

#### Syntax

```javascript
objectName.propertyName;
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

console.log(car.make); // Toyota
```

#### Practice

Access the `firstName` property of the `person` object created in the previous lesson.

### Lesson 85: Accessing Object Properties with Bracket Notation

#### Summary

Bracket notation is another way to access properties of an object, especially useful when property names are dynamic or contain special characters.

#### Syntax

```javascript
objectName['propertyName'];
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

console.log(car['model']); // Camry
```

#### Practice

Access the `lastName` property of the `person` object using bracket notation.

### Lesson 86: Accessing Object Properties with Variables

#### Summary

Properties of an object can be accessed using variables with bracket notation.

#### Syntax

```javascript
let propertyName = 'key';
objectName[propertyName];
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

let prop = 'year';
console.log(car[prop]); // 2020
```

#### Practice

Create a variable `prop` with the value `"age"` and use it to access the `age` property of the `person` object.

### Lesson 87: Updating Object Properties

#### Summary

Object properties can be updated using dot or bracket notation.

#### Syntax

```javascript
objectName.propertyName = newValue;
objectName['propertyName'] = newValue;
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

car.year = 2021;
console.log(car.year); // 2021
```

#### Practice

Update the `age` property of the `person` object to a new value.

### Lesson 88: Add New Properties to a JavaScript Object

#### Summary

New properties can be added to objects using dot or bracket notation.

#### Syntax

```javascript
objectName.newProperty = value;
objectName['newProperty'] = value;
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

car.color = 'blue';
console.log(car.color); // blue
```

#### Practice

Add a new property `address` to the `person` object.

### Lesson 89: Delete Properties from a JavaScript Object

#### Summary

Properties can be deleted from objects using the `delete` operator.

#### Syntax

```javascript
delete objectName.propertyName;
delete objectName['propertyName'];
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

delete car.year;
console.log(car.year); // undefined
```

#### Practice

Delete the `age` property from the `person` object.

### Lesson 90: Using Objects for Lookups

#### Summary

Objects can be used as lookup tables to map keys to values.

#### Syntax

```javascript
let lookup = {
	key1: value1,
	key2: value2,
	// more key-value pairs
};

let value = lookup[key];
```

#### Examples

```javascript
let phoneticLookup = {
	alpha: 'A',
	bravo: 'B',
	charlie: 'C',
};

let result = phoneticLookup['bravo'];
console.log(result); // B
```

#### Practice

Create a `lookup` object for days of the week where the keys are short forms like "Mon" and values are full forms like "Monday".

### Lesson 91: Testing Objects for Properties

#### Summary

The `hasOwnProperty` method checks if an object has a specific property.

#### Syntax

```javascript
objectName.hasOwnProperty('property');
```

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
};

console.log(car.hasOwnProperty('model')); // true
console.log(car.hasOwnProperty('color')); // false
```

#### Practice

Check if the `person` object has the property `address`.

### Lesson 92: Manipulating Complex Objects

#### Summary

Objects can contain complex data including nested objects and arrays.

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
	features: ['Bluetooth', 'Backup Camera'],
	owner: {
		name: 'John',
		age: 30,
	},
};

console.log(car.owner.name); // John
```

#### Practice

Create a `student` object with properties `name`, `age`, and `subjects` (an array of subjects).

### Lesson 93: Accessing Nested Objects

#### Summary

Nested objects can be accessed using multiple dot or bracket notations.

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
	owner: {
		name: 'John',
		age: 30,
	},
};

console.log(car.owner.name); // John
```

#### Practice

Access the `name` property of the nested `owner` object in the `car` object.

### Lesson 94: Accessing Nested Arrays

#### Summary

Nested arrays can be accessed using multiple bracket notations.

#### Examples

```javascript
let car = {
	make: 'Toyota',
	model: 'Camry',
	year: 2020,
	features: ['Bluetooth', 'Backup Camera'],
};

console.log(car.features[1]); // Backup Camera
```

#### Practice

Access the second subject in the `subjects` array of the `student` object.

### Lesson 95: Record Collection

#### Summary

In this exercise, you will write a function that updates a record collection based on specific rules.

#### Examples

```javascript
let collection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name'],
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette'],
	},
};

function updateRecords(records, id, prop, value) {
	if (value === '') {
		delete records[id][prop];
	} else if (prop === 'tracks') {
		records[id][prop] = records[id][prop] || [];
		records[id][prop].push(value);
	} else {
		records[id][prop] = value;
	}

	return records;
}

console.log(updateRecords(collection, 2548, 'artist', ''));
```

#### Practice

Write the `updateRecords` function as described above, using appropriate conditions and operations.

### Lesson 96: Iterate with JavaScript While Loops

#### Summary

`while` loops execute code as long as the condition is `true`.

#### Syntax

```javascript
while (condition) {
	// code to be executed
}
```

#### Examples

```javascript
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}
```

#### Practice

Write a `while` loop that logs the numbers from `1` to `10`.

### Lesson 97: Iterate with JavaScript For Loops

#### Summary

`for` loops are used to run code a specific number of times.

#### Syntax

```javascript
for (initialization; condition; final - expression) {
	// code to be executed
}
```

#### Examples

```javascript
for (let i = 0; i < 5; i++) {
	console.log(i);
}
```

#### Practice

Write a `for` loop that logs the numbers from `1` to `10`.

### Lesson 98: Iterate Odd Numbers with a For Loop

#### Summary

`for` loops can be used to iterate over specific sequences, like odd numbers.

#### Examples

```javascript
for (let i = 1; i < 10; i += 2) {
	console.log(i);
}
```

#### Practice

Write a `for` loop that logs all odd numbers from `1` to `20`.

### Lesson 99: Count Backwards with a For Loop

#### Summary

`for` loops can also iterate backwards by decrementing the counter.

#### Examples

```javascript
for (let i = 10; i > 0; i--) {
	console.log(i);
}
```

#### Practice

Write a `for` loop that logs the numbers from `10` to `1`.

###

Lesson 100: Iterate Through an Array with a For Loop

#### Summary

`for` loops can be used to iterate through the elements of an array.

#### Examples

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

#### Practice

Write a `for` loop that logs each element of an array `numbers`.

### Lesson 101: Nesting For Loops

#### Summary

`for` loops can be nested to iterate over multi-dimensional arrays.

#### Examples

```javascript
let arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
```

#### Practice

Write nested `for` loops to iterate over a 3x3 matrix.

### Lesson 102: Iterate with JavaScript Do…While Loops

#### Summary

`do...while` loops execute code at least once before checking the condition.

#### Syntax

```javascript
do {
	// code to be executed
} while (condition);
```

#### Examples

```javascript
let i = 0;
do {
	console.log(i);
	i++;
} while (i < 5);
```

#### Practice

Write a `do...while` loop that logs the numbers from `1` to `5`.

### Lesson 103: Replace Loops using Recursion

#### Summary

Recursion is a technique where a function calls itself to perform iterative tasks.

#### Examples

```javascript
function countDown(n) {
	if (n < 1) {
		return [];
	} else {
		let arr = countDown(n - 1);
		arr.unshift(n);
		return arr;
	}
}

console.log(countDown(5)); // [5, 4, 3, 2, 1]
```

#### Practice

Write a recursive function that returns the first `n` even numbers.

### Lesson 104: Profile Lookup

#### Summary

In this exercise, you will write a function that looks up profile information in a collection of objects.

#### Examples

```javascript
let contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
];

function lookUpProfile(name, prop) {
	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {
			return contacts[i][prop] || 'No such property';
		}
	}
	return 'No such contact';
}

console.log(lookUpProfile('Akira', 'likes')); // ["Pizza", "Coding", "Brownie Points"]
```

#### Practice

Write the `lookUpProfile` function as described above.

### Lesson 105: Generate Random Fractions with JavaScript

#### Summary

The `Math.random()` function generates a random decimal number between `0` and `1`.

#### Examples

```javascript
function randomFraction() {
	return Math.random();
}

console.log(randomFraction()); // a random decimal between 0 and 1
```

#### Practice

Write a function that returns a random decimal number between `0` and `1`.

### Lesson 106: Generate Random Whole Numbers with JavaScript

#### Summary

The `Math.floor()` and `Math.random()` functions can generate random whole numbers.

#### Examples

```javascript
function randomWholeNumber() {
	return Math.floor(Math.random() * 10);
}

console.log(randomWholeNumber()); // a random whole number between 0 and 9
```

#### Practice

Write a function that returns a random whole number between `0` and `100`.

### Lesson 107: Generate Random Whole Numbers within a Range

#### Summary

Random whole numbers within a specific range can be generated using `Math.random()`, `Math.floor()`, and arithmetic.

#### Examples

```javascript
function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(5, 15)); // a random whole number between 5 and 15
```

#### Practice

Write a function that returns a random whole number between `50` and `100`.

### Lesson 108: Use the parseInt Function

#### Summary

The `parseInt` function converts a string to an integer.

#### Examples

```javascript
let a = parseInt('007');
console.log(a); // 7
```

#### Practice

Write a function that takes a string and returns it as an integer.

### Lesson 109: Use the parseInt Function with Radix

#### Summary

The `parseInt` function can take a second argument to specify the radix (base) of the string number.

#### Examples

```javascript
let a = parseInt('11', 2);
console.log(a); // 3
```

#### Practice

Write a function that takes a binary string and converts it to an integer.

### Lesson 110: Use the Conditional (Ternary) Operator

#### Summary

The ternary operator is a shorthand for `if...else` statements.

#### Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

#### Examples

```javascript
let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Yes
```

#### Practice

Write a function that takes a number and returns `"Even"` if it is even, otherwise returns `"Odd"`.

### Lesson 111: Use Multiple Conditional (Ternary) Operators

#### Summary

Multiple ternary operators can be chained for complex conditions.

#### Examples

```javascript
let num = 4;
let type = num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';
console.log(type); // Positive
```

#### Practice

Write a function that takes a number and returns `"Positive"`, `"Negative"`, or `"Zero"` based on its value.

### Lesson 112: Use Recursion to Create a Range of Numbers

#### Summary

Recursion can be used to generate a range of numbers.

#### Examples

```javascript
function rangeOfNumbers(start, end) {
	if (start > end) {
		return [];
	} else {
		let numbers = rangeOfNumbers(start, end - 1);
		numbers.push(end);
		return numbers;
	}
}

console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5]
```

#### Practice

Write a recursive function that returns an array of numbers from `n` to `1`.
