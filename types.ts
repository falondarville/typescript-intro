let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// this is one way of declaring arrays
// let strArr: String[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

// void can be null and undefined as well 
let myVoid: void = undefined;
let myNull: null = undefined;
let myUndefined: undefined = null;

// concatenation, slicing, and more are all allowed for the string type
myString = 'Hello' + ' ' + 'World';
myNum = 22;
myBool = true;
myVar = 5;

strArr = ['Hello', 'World'];
numArr = [1, 2, 3];
boolArr = [true, false, true]; 
strNumTuple = ['Hello', 4];

console.log(myNum);