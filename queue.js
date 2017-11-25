//implementation of a queue using an array

//constructor using object literal notation
function Queue() {
	this.queue = [];
}

//add a val to the end of the queue
Queue.prototype.enqueue = function(value) {
	this.queue.push(value);
}

//pop the first queue and return it
Queue.prototype.dequeue = function(value) {
	return this.queue.shift();
}

//see first
Queue.prototype.peek = function() {
	return this.queue[0]
}

Queue.prototype.length = function() {
	return this.queue.length
}

Queue.prototype.print = function() {
	console.log(this.queue.join(', '));
}

var queue = new Queue();
queue.enqueue('derik')
queue.enqueue('lilian')
queue.enqueue('edwin')
queue.print()
console.log(queue.peek());
console.log(queue.dequeue());
queue.print()

class EsQueue {
	constructor() {
		this.queue = [];
	}

	enqueue(data) {
		this.queue.push(data);
	}

	dequeue() {
		return this.queue.shift()
	}

	peek() {
		return this.queue[0]
	}

	length() {
		return this.queue.length
	}

	print() {
		console.log(this.queue.join(', '));
	}
}

const esqueue = new EsQueue();
esqueue.enqueue('derik')
esqueue.enqueue('lilian')
esqueue.enqueue('edwin')
esqueue.print()
console.log(esqueue.peek());
console.log(esqueue.dequeue());
esqueue.print()