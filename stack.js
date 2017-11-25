//assert funtion

function assert(condition, message) {
	if (!condition){
		console.log(message);
	}
	else {
		console.log('pass');
	}
}

//function object literal noation?
function Stack() {
	this.stack = [];
}

//use js proto methods for push, pop
Stack.prototype.push = function(val) {
	this.stack.push(val);
}

Stack.prototype.pop = function() {
	return this.stack.pop()
}

//get the last element of the array using length
Stack.prototype.peek = function() {
	return this.stack[this.stack.length -1]
}

Stack.prototype.length = function() {
	return this.stack.length
}

Stack.prototype.print = function() {
	console.log(this.stack.join(', '));
}

//es6 impelementation
class EsStack {
	constructor() {
		this.stack = [];
	}

	push(val) {
		this.stack.push(val)
	}

	pop() {
		return this.stack.pop()
	}

	peek() {
		return this.stack[this.stack.length - 1]
	}

	length() {
		return this.stack.length
	}

	print() {
		console.log(this.stack.join(', '));
	}
}

const friends = new Stack
friends.push('derik');
friends.push('lilian');
friends.push('edwin');
assert(friends.stack === ['derik', 'lilian', 'edwin'], 'stack did not push elements correctly');
assert(false, 'asdf')



















