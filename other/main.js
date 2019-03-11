var count = 5; // type implicitly assigned to number
count = 'a'; // Type '"a"' is not assignable to type 'number'
// still compiles to normal js code.
var a; // type implicitly assigned to any
a = 1;
a = true;
a = 'a';
// No problem with that. Compiles without failing here.
// assign a type explicitly
var b;
b = 1;
b = true;
b = 'b';
// shows errors now.
// assigning types:
var c;
var d;
var e;
var f;
var g = [1, 2, 3];
var f = [1, true, 'a', false];
// this is very verbose
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// so we use enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// enum automatically (implicitly) assigns incremental number values,
// starting from 0.
// strings have to be added explicitly.
// Numbers could be assigned explicitly too.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
// if the values for numbers were not explicitly set
// and someone were to add say, the color purple before blue,
// then we got a problem because blue will now have a value of 3
// instead of 2. This could mess up your application.
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Purple"] = 2] = "Purple";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
// But when we set the values explicitly, they will not change,
// and purple would just take the value 3
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 0] = "Red";
    Color3[Color3["Green"] = 1] = "Green";
    Color3[Color3["Blue"] = 2] = "Blue";
    Color3[Color3["Purple"] = 3] = "Purple";
})(Color3 || (Color3 = {}));
;
var message = 'abc';
// when you type message. you get the intellisense in vscode
// after typing the dot. It can be very useful.
var endsWithC = message.endsWith('c');
// but if you were to declare the variable then assign it,
// something very interesting happens !
var message1;
message1 = 'abc';
var endsWithC1 = message1.endsWith('c');
// have you noticed that after typing the dot, intellisense
// didn't appear ? Why is that you may wonder. Because the
// type of message is any, and type any doesn't have any special methods
// like say a string does.
// but we can still get this to work using type assertions
var message2;
message2 = 'abc';
var endsWithC2 = message2.endsWith('c');
// this is only one way of doing it, so there is another way
var message3;
message3 = 'abc';
var endsWithC3 = message3.endsWith('c');
// this is more readable. But you would see the other way being used
// more often.
