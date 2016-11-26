var x = "1";
var y = 1;
if (x==y) {
	console.log("x is equal to y");
}else {
	console.log("NOT the same type");
}
if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line will not show up");
}else {
	console.log("all false");
}
	function a()
{
		return{
			name:"??"
		}
}
console.log(a());

b();
function b(){
	console.log(
		false||"Hello")
}
// //Object creation
var company = new Object();
company.name = "FACEBOOK";
company["$stock of company"] = 110;
console.log(company);
// //Better way for object literal
var company2 = {
	name:"Twitter",
	ceo: {
		firstName:"Ben",
		favColor:"red"
	},
	"Stock of company":120
};
console.log(company2);
// //Function are object
function multiply(x,y) {
	return x*y;
}
multiply.version = "X * Y";
console.log(multiply(2,3));
console.log(multiply.version);
// //Function factory
function makeMutiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier * x;
	};

	return myFunc;
}
var multiplyBy3 = makeMutiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMutiplier(2);
console.log(doubleAll(10));
// //Passing function as arguments
function doOperationOn(x,operation) {
	return operation(x);
}
var result = doOperationOn(3, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
// //Copy by REFERENCE vs by VALUE
// object are copy by reference
var a = { x:7 };
var b = a;
console.log(a);
console.log(b);

b.x = 10;
console.log("after b.x update:");
console.log(a);
console.log(b); 


function changeObject(objValue) {
	console.log("in changing");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = { x: 7 };
changeObject(value); //objValue = value
console.log("after changeObject, origin value:");
console.log(value);


// //Function constructiors
function Circle (radius) {
	this.radius = radius;

	this.getArea = 
	function(){
		return Math.PI * Math.pow(this.radius,2);
	};
}
var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());
// //Function constructiors 2
function Square (length) {
	this.length = length;
}
Square.prototype.getArea =
	function() {
		return this.length*this.length;
	};

var mySquare = new Square(4);
console.log(mySquare.getArea());
var myOtherSquare = new Square(10);
console.log(myOtherSquare);
// //object literal and "this"
var literalCircle = {
	radius: 20,

	getArea: function() {
		console.log(this);
//start of the bug	
		var incereaseRadius = function() {
			this.radius = 50;
		};
		incereaseRadius();
		console.log(this.radius);
//end of the bug
//when a inner function inside a function, "this" will pointing to GLOBAL object
//start of correction
		var self = this;
		var incereaseRadius = function() {
			self.radius = 50;
		};
		incereaseRadius();
		console.log(this.radius);
//end of correction
		return Math.PI * Math.pow(this.radius, 2);
	}
};
console.log(literalCircle.getArea());