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
var drawPoint = function (x, y) {
    // ...
};
// while working with functions like this, you may end up
// having to work with many variables. Avoid doing the following
// at all costs:
var drawPoint1 = function (x, y, a, b, c, d, e) {
    // ...
};
// instead, we'll just incapsulate them into one object
// and pass that instead.
var drawPoint2 = function (point) {
    // ...
};
drawPoint2({
    x: 1,
    y: 2
});
// but there is a problem with this approach. Since the
// function is expecting an x and y property but nothing is stopping
// anyone from passing this to the function. You won't see any errors
// at compile time.
var drawPoint3 = function (point) {
    // ...
};
drawPoint3({
    name: 'Samir'
});
// To fix this, we will add types using inline annotation.
var drawPoint4 = function (point) {
    // ...
};
drawPoint4({
    x: 1,
    y: 2
});
// When naming interfaces, always use pascal case. i.e. uppercase all
// initials of every word.
var drawnPoint5 = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
// if we created a point function, we are likely to also
// create a getDistance function for example.
var getDistance = function (pointA, PointB) {
    // ...
};
// But this violates the concept of cohesion, which says that things
// that are related should be part of one unit. And since the interface,
// the drawPoint, and getDistance functions are separate, we have violated
// the principle explained above. Unfortunately, we cannot move these
// functions into the interface, since it's only for declaration
// and not implementation. But instead, we could use a class.
var Point1 = /** @class */ (function () {
    function Point1() {
    }
    Point1.prototype.draw = function () {
        //..
    };
    Point1.prototype.getDistance = function (another) {
        //...
    };
    return Point1;
}());
// let's use this class:
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point2.prototype.getDistance = function (another) {
        //...
    };
    return Point2;
}());
var point;
point.draw(); // calling draw method
// Our point object is undefined ! Why is that ?
// Unlike the basic types we have in typescript, here we
// are dealing with a custom type. This means that we have to
// explicitly allocate memory to it. We do that using the new keyword.
var point1 = new Point2(); // We don't need the point type declaration
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
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point3.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point3.prototype.getDistance = function (another) {
        //...
    };
    return Point3;
}());
var point3 = new Point3();
// but we get an error, that's because we didn't supply any parameters
// we fix it like this:
var point4 = new Point3(1, 2);
// but what if I want to create a point object without setting those values ?
// Well, You can do that! By making the parameters optional like this.
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point4.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point4.prototype.getDistance = function (another) {
        //...
    };
    return Point4;
}());
// the question marks before the colons makes it optional.
// but be aware that the convention is that when you set
// parameters to optional, every parameter to the right of it
// should be optional as well.
// let's create a point now.
var point5 = new Point4(1, 2);
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
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point4.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point4.prototype.getDistance = function (another) {
        //...
    };
    return Point4;
}());
// now we can't access x and y from the outside anymore.
// we can only call the draw method.
// Now if you look at our code, you can see that there
// is some redundant code in the constructor for example.
// Like setting x and y to their values and then at the top of the class itself.
// Let's fix that.
var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point5.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point5.prototype.getDistance = function (another) {
        //...
    };
    return Point5;
}());
// we could prefix x and y with the access modifiers, and TS
// would implicitly assign them for us when we explicitly set those
// access modifiers. So no need of the this.x = x; stuff.
// Now we have another problem. We can set values to the points and
// draw them, but we can't see their values. How can we fix that you ask ?
// Well, with getters of course. A getter would allow us to
// see the value.
var Point6 = /** @class */ (function () {
    function Point6(x, y) {
        this.x = x;
        this.y = y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point6.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point6.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(Point6.prototype, "X", {
        get: function () {
            return this.x;
        } // getter
        ,
        enumerable: true,
        configurable: true
    });
    return Point6;
}());
var point6 = new Point6(1, 2);
var x = point6.X;
point.draw();
// good. now we can see the values. But what if we wanted the
// user to be able to set values to x, only if the value is within a
// certain range ? Well, we do that with setters of course.
var Point7 = /** @class */ (function () {
    function Point7(x, y) {
        this.x = x;
        this.y = y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point7.prototype.draw = function () {
        console.log('X: ', this.x, ', Y: ', this.y);
        // this referring to this field in this class
    };
    Point7.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(Point7.prototype, "X", {
        get: function () {
            return this.x;
        } // getter
        ,
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this.x = value;
        } // setter
        ,
        enumerable: true,
        configurable: true
    });
    return Point7;
}());
var point7 = new Point7(1, 2);
var x1 = point7.X; // it automatically uses the getter for x.
point7.X = 10; // it automatically uses the setter for x.
point.draw();
// The X for the getter and setter are upercase, but the
// naming convention with JS is to use camelCase.
// but if we used the lower-case x, it would have clashed with the
// field x. So how do we fix that ? We prefix the field with an underscore.
var Point8 = /** @class */ (function () {
    function Point8(_x, _y) {
        this._x = _x;
        this._y = _y;
        // setting x and y in the class to the values received by the
        // constructor.
    }
    Point8.prototype.draw = function () {
        console.log('X: ', this._x, ', Y: ', this._y);
        // this referring to this field in this class
    };
    Point8.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(Point8.prototype, "x", {
        get: function () {
            return this._x;
        } // getter
        ,
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this.x = value;
        } // setter
        ,
        enumerable: true,
        configurable: true
    });
    return Point8;
}());
var point8 = new Point8(1, 2);
var x3 = point8.x; // We can now simply use the lower case x.
point8.x = 10;
point.draw();
// a property is a either a method that exposes a field
// or a combination of methods that expose a field. Like getters
// and setters. While a field is for example x and y. Fields
// should almost always be private.
