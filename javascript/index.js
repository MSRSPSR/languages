"use strict";

const constant = "This is a true constant";
let variable = "This is a true variable";
var global = "This is a global variable";

/* Literal values */

console.log(0o13);      // octal
console.log(0b0100001);	// binary
console.log(0x123);     // hexadecimal

let decimal = 10;

console.log("0b" + decimal.toString(2));   // binary
console.log("0o" + decimal.toString(8));   // octal
console.log("0x" + decimal.toString(16));  // hex

// We may also use parseInt to convert between radixes

console.log(parseInt("0100001", 2));
console.log(parseInt("13", 8));
console.log(parseInt("123", 16));

/* 
 * Number Type:
 * Number Type: JavaScript's primary numeric type, Number, is used to represent
 * integers and to approximate real numbers using the 64-bit floating point format
 */

console.log(Number("333333"));

// Convert String to Number implicitly

console.log(+"3", "3" - 0, parseInt("3"));

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

/*
 * Floats: 
 * Floating point literals may have a decimal point, or represented using
 * exponential notation: [digits][.digits][(E|e)[(+|-)]digits]
 */

// Floating point arithmetic isn't accurate

(0.1 + 0.2 === 0.3) ? true : false; 			// => false
((0.1 * 10 + 0.2 * 10) / 10 === 0.3) ? true : false; 	// => true

// We can also use parseFloat to flexibly convert strings to integer or float

parseFloat("3 honourable ministers"); 	// => 3 
parseFloat("$1853.39"); 		// => NaN: must start with a number

/* 
 * BigInt:
 * A BigInt value is created by appending `n` to the end of an
 * integer literal, or by calling the BigInt() constructor and giving it an
 * integer or string value.
 *
 * All BigInts are signed integers, and whilst loosely equal to Number values,
 * BigInts may not be used with Math object methods, and cannot be mixed with a
 * Number value in operations without being coerced.
 */

let bigDigit = 1n;
console.log(bigDigit === 1); 		// => false

/* Boolean values */

console.log(true, false);

/* 
 * String type:
 * Strings in Javascript is used to represent textual data. It is a set of
 * "elements" of 16-bit unsigned integer values. Each element occupies a 
 * position, and the string's length is the number of elements within it. 
 *
 * NOTE: Strings in Javascript are immutable ordered sequences of 16-bit
 * values: you can access the text at any index of a string, but Javascript
 * provides no way to alter the text of an existing string.
 */

let emptyString = "";             // A string with no characters in it.
let str = "Hello, world!";
let hello = str.substring(0, 5);  // Obtain a substring
let world = str.slice(0, 5);      // The same thing.

str.slice(-3);                    // The last three characters
str.split(", ");                  // ["Hello", "world!"];

String.prototype.concat(hello, ", ", world);
hello.length;                     // No braces.

str.indexOf("l");                 // 2: position of the first letter `l`
str.indexOf("l", 3);              // 3: position of the first `l` at or after 3
str.lastIndexOf("l");             // 10: position of the last letter `l`

str.startsWith("Hell");
str.endsWith("!");
str.includes("or");

str.replace("llo", "ya");
str.toLowerCase();
str.toUpperCase();
str.normalize();                  // Unicode NFC normalisation: ES6
str.normalize("NFD");             // NFD normalisation, also "NFKC", "NFKD"

str.charAt(0);                    // 'H', the first character. Same as str[0];
str.charAt(str.length - 1);       // '!' the last character. Same as str[str.length-1];

/*
 * Template literals:
 * Strings included in `backticks` can embed expressions delimited by ${}
 * The value of the expression is interpolated into the string.
 */

const firstName = "Bill";
const greetWithFistName = `Hello ${firstName}`;

//* The split method splits a string into an array of substrings, returning a new array.

const splitting = greetWithFistName.split(' ');

//* The trim method removes whitespaces from the start and end of a string, returning a new array.

let trimmed = "  Hello   ";
trimmed = trimmed.trim();

// Tagged template literals:
// [ES6] String.raw returns the text within backticks without processing backslashes

String.raw`\n`.length;  // => 2

/*
 * The localCompare method provides a way to compare strings that takes collation
 * order into account, and returns a number indicating whether a reference string
 * comes before, or after, or is the same as the given string in sort order. 
 */

let s = ['d', 'c', 'b', 'a', 'f', 'e', 'g'];
s.sort(function (a, b) {
  return a.localeCompare(b);
});

// Iterating over properties

let obj13 = ['author', 'pages'];
let keys = Object.keys(obj13);

let keys_values = Object.entries(obj13); // All pairs [key, value] are returned as an array

console.log(keys, keys_values);

/* Logical operators */

// OR

console.log(true || false);

// OR finds the first truthy value in a sequence

let result = false || 0 || constant || variable;
console.log(result);

result = false || console.log("This is a true value");
console.log(result);

// AND

console.log(true && false);

// AND finds the first falsy value

console.log(result && nulled);

// If there is none, it returns the rightmost operand.
console.log("3" && "six" && true && {});

// NOT

console.log(!true + " is the same as " + false);

// The double-negation operator is used to convert a value to a boolean type.

console.log(!!constant + " is true, if " + constant + " is truthy.");

// globalThis contains the global `this` object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

console.log(globalThis.global === global ? true : false);	// Global scope

// In NodeJS, files are their own scope. globalThis provides a standard way to
// access the global `this` value across different Javascript environments.

console.log(!(globalThis === this));

/* Equality operators */

console.log(0 == true);
console.log(0 == []);

// Inequality

console.log(1 != false);
console.log(1 != '1');

// Strict equality

console.log(0 === true);
console.log(0 === []);

// Strict inequality

console.log(1 !== false);
console.log(1 !== '1');

/* Null type */

const nulled = null;	        // Reflects the intentional absence of a value
console.log(null == undefined); // null and undefined are loosely equal to eachother

/* Undefined type */

let undef;
console.log(undef); 		// Reflects the default value in absence of one.

/* Functions */

// function declaration
const greeter = "Hello, this is a Javascript function";

function greet() {
	return greeter;
}

// function expression

const greeting = () => greeter;

// function parameters

function greetUser(name) { 	// Optional default values: name="Default User"
	return ("Hello, " + name);
}

// switch-case 

let color = "red";
switch (color) {
	case 'red':
		console.log("red symbolises life, health, vigor, war, courage, anger and love!");
		break;
	case 'blue':
		console.log("blue symbolises serenity, stability, inspiration and wisdom!");
		break;
	case 'green':
		console.log("green symbolises balance, nature, spring, and rebirth!");
		break;
	default:
		console.log("Great color!");
		break;
}

// jump tables
// https://en.wikipedia.org/wiki/Branch_table

const stop = () => console.log("stop");
const go = () => console.log("go");

const branch = {
	'red' : stop,
	'green' : go
}

branch[color]();

// For simple switch-case examples, such as doAction:

const inc = n => n + 1;
const dec = n => n - 1;

// function doAction(action) {
//	switch (action) {
//		case 'inc':
//			n = inc(n)
//			break;
//		case 'dec':
//			n = dec(n)
//			break;
//	}
// }

// We may use object literals to simulate a map lookup

const actionMap = { inc, dec };
const doActionMap = (x, action) => Object.hasOwn(actionMap, action) ? actionMap[action](x) : x;

/* Conditional branching */

let x = 0;
let y = 1;

// if-else

if (x) {
	console.log(true);
} else if (y) {
	console.log(false);
} else {
	console.log("Unreachable code!");
}

// ternary operator

x > 0 ? console.log("true")
	: console.log("false"); // cond ? expr : expr

// conditional chains

const age = 35;

age > 0 && age < 18 ? console.log("minor")
	: age >= 18 && age <= 35 ? console.log("young adult")
	: age >= 36 && age <= 65 ? console.log("middle-aged adult")
	: age >= 65 ? console.log("elderly")
: console.log("unborn");

/* 
 * Symbol type:
 * Introduced with ES6, Symbols are used to add unique property keys to
 * an object that won't collide with the keys from an inherited object, and
 * which are hidden from the mechanisms other code will typically use to
 * access the object, enabling a form of weak encapsulation and information
 * hiding that no other part of the code may access or overwrite. Symbols
 * enable the defintiion of language extensions without harming backward
 * compatibility. 
 *
 * NOTE: By specification, object property keys may be either of string 
 * type, or of symbol type. Symbols do not appear in a for…of enumeration.
 * They are also ignored when using Object.keys.
*/

const sym = Symbol("property");
let ob = {};
ob[sym] = "value";      // [Symbol(property)]: 'value'

// Symbols are unique

console.log(Symbol() == Symbol()); // => false

// Symbol functions

sym.toString();          // => Symbol(property)

// The Symbol's for method searches for existing symbols with a given key
// and returns it if found. Otherwise a new symbol gets created in the 
// global symbol registry. 

let symS = Symbol.for("shared");
let symK = Symbol.for("shared");

symS === symK;                  // true
symK.toString();                // => Symbol(shared)
Symbol.keyFor(symK);            // "shared": retrieve the string passed to Symbol.for()
console.log(symK.description);  // "shared"

// Using Symbol.iterator to iterate over a string.

const okIterator = "ok"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

let stringObject = {
  [toString]() {
    return "this is a string";
  }
};

console.log(stringObject[toString]());

// Information hiding
//
// If we're working with a user object that belongs to third-party code, 
// we shouldn't simply add new fields to it, as that could be unsafe. 
// A symbol cannot be accessed accidentally. Also, if another script wants 
// to have its own `id` inside user, for any other purpose, these two 
// objects never collide.
// 
// This has largely been rendered obsolete with ES2022's class fields.

let user = {
  name: "Muhammed"
};

let id = Symbol('id');

// let user = { name: "Muhammed", [id]: 1 };

user[id] = 1;

/* Classes */
// Class fields:
// [ES22] 
