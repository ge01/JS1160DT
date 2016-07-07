/* The typeof Operator
You can use the JavaScript typeof operator to find the type of a
JavaScript variable::
*/
document.getElementById("demo").innerHTML =
typeof "john" + "<br>" +
typeof 3.14 + "<br>" +
typeof false + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof {name:'john', age:34};

/* Undefined
In JavaScript, a variable without a value, has the
value undefined. The typeof is also undefined.
*/
var person;
document.getElementById("undi").innerHTML =
person + "<br>" + typeof person;
