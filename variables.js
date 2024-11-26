/*Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names. 
Semicolons are Optional.It is a good programming practice to use semicolons.
Pascal Case - SmartWatch, MobileDevice,
Lower Camel Case - smartwatch, mobileDevice
Underscore - smart_watch
*/


//Using let keyword
let x=5;
let y=6;
z=x+y;
console.log(z);
//Using const keyword
const a = 10;
const b = 20;
//const c = 30; Throws TypeError: Assignment to constant variable, if the c is assigned to any operation
const c = a+b;
console.log(c);
