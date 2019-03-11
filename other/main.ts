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

