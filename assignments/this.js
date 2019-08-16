/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. this will refer to whatever was "to the left of the dot" when the function was invoked - implicit
 * 2. the object that "this" refers to is explicitly defined in function invocation - explicit.
 * Objects or arrays can be sent as arguments and passed through a function where "this" will refer to these arguments.
 * 3. When the new keyword is used, a new object is created and named by the pointer it is tied to.
 * 4. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding

// Principle 3
Banana(params){

    this.name = params.name;
}


let banana = new Banana({name: "Myself"});
// code example for New Binding
console
// Principle 4

// code example for Explicit Binding

ourFunction.call(explicitInvocation);