## Typescript

TypeScript is a superset of JavaScript, meaning that it's JavaScript with added abilities. It was developed by Microsoft and designed for larger applications. 

### What does it do?

1. Uses Static Type Checking (String, Array, Integer, etc...)
	We can check and assign types. This is an optional ability. Defining types makes the code more readable to other developers. The types accepted by TypeScript are: String, Number, Boolean, Array, Any, Void (no type returned), Null, Tuple (an array with a fixed number of elements), Enum, Generics (the type of constraint)
2. Uses Class Based Objects (PHP used this)
	We don't have to use prototypes. It's OOP. 
3. Makes JavaScript more modular

TypeScript files need to be compiled using tsc, a node package. This takes a .ts file and compiles it into a .js file. Install tsc globally. Manually compile by typing 'tsc filename' into your terminal. Or run 'tsc filename -w' so that the program watches and compiles when you make changes. 

Sublime has a package called TypeScript that will show an error when the wrong type is added to a variable with a type defined. 