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