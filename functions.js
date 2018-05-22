// this function must take two numbers as parameters and return one number
function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(1,4))
// this function accepts any type of parameter, but can only return a number. String numbers are parse into integers
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum(3, 5));
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// console.log(getName('John', 'Doe'))
// you can also make parameters optional by adding a ? at the end of the variable name. Note that we add an if statement that accounts for the missing parameters. If the if statement was not there, you would get undefined. 
function yourName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(yourName('John'));
// this does not have to return anything since we set it to void
function myVoid() {
    return;
}
