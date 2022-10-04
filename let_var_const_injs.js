console.log('hello world');
let a = 0;
let b = 0;
let c = 0;
let d = 0;

d = 1+2+3
console.log(d)
// var is a global variable 
// let is the local variable whose scopes works only within the scope of the block

var globalvar = 'hi'
var globalvar = 'hu'
let localvar = 'hello'
// let localvar = 'hello' let can't be redeclare within the same block
{
  let localvar = 't'
  var globalvar  = 'this' //value of globalvar is changed because decalared as var not let
  console.log(globalvar+ '   var inside the block')
  console.log(localvar+ '      let variable ')
}
console.log(globalvar + '   var outside the block with the changed value from inside the block because it was decalared as VAR not LET')
console.log(localvar + '  let variable values scope is within the block only')

//CONSTANTS
const x = 3; // constant variables should always be initialised
