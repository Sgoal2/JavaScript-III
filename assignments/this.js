/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - 
window binding just defaults to the window whennothing is to the left of the function when being called

* 2. Implicit binding - the one using dot notation, this is when to find out what
 this is referring to you look to the left of the dot to find out as in jay.sayName

* 3. New binding - new binding is when a new object is being created using the new keyword this is bound to the new object being constructed

* 4. Explicit binding
explicit binding is when a function is in the global scope
*
* write out a code example of each explanation above we need to call the function and use call and then 
put the context of what we are calling. We can use .apply if we wannacall an array without individually passing the arguments.
 .bind  makes a new function and then we can just call the new function .
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this.name);
    return name;
  }
  console.log(sayName("Superman"));
// Principle 2

// code example for Implicit Binding

// Principle 3
function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
       return (this.greeting + " " +this.greeter)
    }
  }
  
  const bruce = new CordialPerson('Wayne');
  const clark = new CordialPerson('Kent');
  
  
  bruce.speak(); //?
  clark.speak(); //?

// code example for New Binding

// Principle 4
let me = {
    name: 'Bob',
    age: 33
  };
  
  let sayName = function(skill1, skill2, skill3) {
    console.log('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', ' + skill2 + ', ' + skill3 );
  }
  
  let skills = ['HTML','CSS','JS'];

// code example for Explicit Binding