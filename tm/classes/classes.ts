interface UserInterface {
	name: string;
	email: string;
	age: number;
	payInvoice();
}

class User implements UserInterface{
	// private name: string;
	// protected email: string;
	// public age: number;

	name: string;
	email: string;
	age: number;

	constructor(name: string, email: string, age: number) {
		this.name = name;
		this.email = email;
		this.age = age;

		console.log("User Created: " + this.name);
	}

	private register (){
		console.log(this.name + ' has been registered.');
	}

	payInvoice(){
		console.log(this.name + ' paid his invoice.')
	}
}

class Member extends User{
	id: number;

	constructor(id: number, name: string, email: string, age: number){
		super(name, email, age);
		this.id = id;
	}
	payInvoice(){
		super.payInvoice();
	}

}

let mike = new Member(1, 'Mike Smith', 'mikes@tsmail.com', 29);
mike.payInvoice();

// let john = new User("John Doe", "jdoe@tsmail.com", 37);

// console.log(john.age);

// john.register();
