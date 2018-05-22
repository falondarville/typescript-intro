interface UserInterface {
	name: string;
	email: string;
	age: number;
	register();
	payInvoice();
}

class User implements UserInterface {
	// public variables are available outside of the class
	name: string;
	// protected variables are available those inheriting
	email: string;
	// private variables can only be accessed within the class
	age: number;
	// add private, public, or protected in front of the variable name

	constructor(name: string, email: string, age: number){
		this.name = name;
		this.email = email;
		this.age = age;

		console.log("user created: " + this.name)
	}

	// methods can also be made private
	register(){
		console.log(this.name+ ' is now registered.')
	}

	payInvoice(){
		console.log(this.name + ' paid invoice.')
	}
}

// this class inherits the User class
class Member extends User{
	id: number;

	constructor(id: number, name: string, email: string, age: number){
		super(name, email, age);
		this.id = id;
	}

	payInvoice(){
		super.payInvoice()
	}
}

let mike: User = new Member(1, 'Mike Smith', 'mikesmith@gmail.com', 33);

mike.payInvoice();

let john = new User('John Doe', 'johndoe@gmail.com', 22);

// this age throws an error if the variable age is a private variable. It's for the developer not the user. Check terminal for the error. 
console.log(john.age);

john.register();