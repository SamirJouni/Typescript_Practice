let count = 5;// type implicitly assigned to number
count = 'a'; // Type '"a"' is not assignable to type 'number'
// still compiles to normal js code.

let a; // type implicitly assigned to any
a = 1;
a = true;
a = 'a';
// No problem with that. Compiles without failing here.

// assign a type explicitly
let b: number;
b = 1;
b = true;
b = 'b';
// shows errors now.

// assigning types:
let c: number;
let d: boolean;
let e: string;
let f: any;
let g: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

// this is very verbose
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// so we use enums
enum Color {Red, Green, Blue};
let backgroundColor = Color.Red;

// enum automatically (implicitly) assigns incremental number values,
// starting from 0.
// strings have to be added explicitly.
// Numbers could be assigned explicitly too.
enum Color1 {Red = 0, Green = 1, Blue = 2};

// if the values for numbers were not explicitly set
// and someone were to add say, the color purple before blue,
// then we got a problem because blue will now have a value of 3
// instead of 2. This could mess up your application.
enum Color2 {Red = 0, Green = 1, Purple = 2, Blue = 3};

// But when we set the values explicitly, they will not change,
// and purple would just take the value 3
enum Color3 {Red = 0, Green = 1, Blue = 2, Purple = 3};

let message = 'abc';
// when you type message. you get the intellisense in vscode
// after typing the dot. It can be very useful.
let endsWithC = message.endsWith('c');

// but if you were to declare the variable then assign it,
// something very interesting happens !
let message1;
message1 = 'abc';
let endsWithC1 = message1.endsWith('c');
// have you noticed that after typing the dot, intellisense
// didn't appear ? Why is that you may wonder. Because the
// type of message is any, and type any doesn't have any special methods
// like say a string does.

// but we can still get this to work using type assertions
let message2;
message2 = 'abc';
let endsWithC2 = (<string>message2).endsWith('c');

// this is only one way of doing it, so there is another way
let message3;
message3 = 'abc';
let endsWithC3 = (message3 as string).endsWith('c');
// this is more readable. But you would see the other way being used
// more often.

let drawPoint = (x, y) => {
	// ...
}
// while working with functions like this, you may end up
// having to work with many variables. Avoid doing the following
// at all costs:
let drawPoint1 = (x, y, a, b, c, d, e) => {
	// ...
}
// instead, we'll just incapsulate them into one object
// and pass that instead.

let drawPoint2 = (point) => {
	// ...
}
drawPoint2({
	x: 1,
	y: 2
});

// but there is a problem with this approach. Since the
// function is expecting an x and y property but nothing is stopping
// anyone from passing this to the function. You won't see any errors
// at compile time.

let drawPoint3 = (point) => {
	// ...
}
drawPoint3({
	name: 'Samir'
});

// To fix this, we will add types using inline annotation.
let drawPoint4 = (point: {x: number, y: number}) => {
	// ...
}
drawPoint4({
	x: 1,
	y: 2
});

// But that above is too verbose, and only works well for simple cases,
// so let's fix this using Interfaces.

interface Point {
	x: number,
	y: number
}
// When naming interfaces, always use pascal case. i.e. uppercase all
// initials of every word.

let drawnPoint5 = (point: point) => {
	// ...
}

drawPoint ({
	x: 1,
	y: 2
})


// if we created a point function, we are likely to also
// create a getDistance function for example.

let getDistance = (pointA: Point, PointB: Point) => {
	// ...
}

// But this violates the concept of cohesion, which says that things
// that are related should be part of one unit. And since the interface,
// the drawPoint, and getDistance functions are separate, we have violated
// the principle explained above. Unfortunately, we cannot move these
// functions into the interface, since it's only for declaration
// and not implementation. But instead, we could use a class.

class Point1 {
	x: number;
	y: number;

	draw() {
		//..
	}

	getDistance(another: Point1){
		//...
	}
}

// let's use this class:

class Point2 {
	x: number;
	y: number;

	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}
}

let point: Point2;
point.draw(); // calling draw method

// Our point object is undefined ! Why is that ?
// Unlike the basic types we have in typescript, here we
// are dealing with a custom type. This means that we have to
// explicitly allocate memory to it. We do that using the new keyword.

let point1 = new Point2(); // We don't need the point type declaration
// typescript knows it implicitly, which makes the code cleaner.

// Well, that worked, but X and Y are undefined.
// Here is how we give them values.
point1.x = 1;
point1.y = 2;

// but this method of setting values can get very verbose

point1.x = 1;
point1.y = 2;
point1.z = 3;
// ...
// ...

// So how do we fix this ? Constructors!

class Point3 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}
}
let point3 = new Point3();
// but we get an error, that's because we didn't supply any parameters
// we fix it like this:
let point4 = new Point3(1, 2);

// but what if I want to create a point object without setting those values ?
// Well, You can do that! By making the parameters optional like this.
class Point4 {
	x: number;
	y: number;

	constructor(x?: number, y?: number) {
		this.x = x;
		this.y = y;
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}
}
// the question marks before the colons makes it optional.
// but be aware that the convention is that when you set
// parameters to optional, every parameter to the right of it
// should be optional as well.

// let's create a point now.

let point5 = new Point4(1, 2);
// but there is a problem. What if we want to be able to set arguments
// to those parameters only upon creating the new object ?
// We still can edit them using this method:
point5.x = 3;

// But first, let's ask the question, why would you want that ?
// Well, to make the program more predictable of course, and to reduce
// the chances of bugs creeping in.

// Let's use access modifiers, to limit access from the outside
// to the members inside of a class. There are 3 modifiers in TS:
// public, private, and protected.
// public and private are the most common. And by default, all members
// are public.

class Point4 {
	private x: number;
	private y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}
}

// now we can't access x and y from the outside anymore.
// we can only call the draw method.

// Now if you look at our code, you can see that there
// is some redundant code in the constructor for example.
// Like setting x and y to their values and then at the top of the class itself.
// Let's fix that.

class Point5 {

	constructor(private x: number, private y: number) {
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}
}

// we could prefix x and y with the access modifiers, and TS
// would implicitly assign them for us when we explicitly set those
// access modifiers. So no need of the this.x = x; stuff.

// Now we have another problem. We can set values to the points and
// draw them, but we can't see their values. How can we fix that you ask ?
// Well, with getters of course. A getter would allow us to
// see the value.

class Point6 {

	constructor(private x: number, private y: number) {
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}

	get X(){
		return this.x;
	} // getter
}

let point6 = new Point6(1, 2);
let x = point6.X;
point.draw();

// good. now we can see the values. But what if we wanted the
// user to be able to set values to x, only if the value is within a
// certain range ? Well, we do that with setters of course.

class Point7 {

	constructor(private x: number, private y: number) {
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this.x, ', Y: ', this.y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}

	get X(){
		return this.x;
	} // getter

	set X(value){
		if(value < 0) {
			throw new Error('value cannot be less than 0.');
		}
		this.x = value;
	}// setter
}

let point7 = new Point7(1, 2);
let x1 = point7.X; // it automatically uses the getter for x.
point7.X = 10; // it automatically uses the setter for x.
point.draw();


// The X for the getter and setter are upercase, but the
// naming convention with JS is to use camelCase.
// but if we used the lower-case x, it would have clashed with the
// field x. So how do we fix that ? We prefix the field with an underscore.
class Point8 {

	constructor(private _x: number, private _y: number) {
		// setting x and y in the class to the values received by the
		// constructor.
	}
	draw() {
		console.log('X: ', this._x, ', Y: ', this._y);
		// this referring to this field in this class
	}

	getDistance(another: Point2){
		//...
	}

	get x(){
		return this._x;
	} // getter

	set x(value){
		if(value < 0) {
			throw new Error('value cannot be less than 0.');
		}
		this.x = value;
	}// setter
}

let point8 = new Point8(1, 2);
let x3 = point8.x; // We can now simply use the lower case x.
point8.x = 10;
point.draw();

// a property is a either a method that exposes a field
// or a combination of methods that expose a field. Like getters
// and setters. While a field is for example x and y. Fields
// should almost always be private.

