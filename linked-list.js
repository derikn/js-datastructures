//linked list implementation

//node structure
function Node(data) {
	this.data = data;
	this.next = null;
}

//list of nodes.
function SinglyLinkedlist() {
	this.head = null;
	this.tail = null;
	this.numberOfValues = 0;
}

//insret into list
SinglyLinkedlist.prototype.add = function(data) {
	//create a new node to be added to the list
	var new_node = new Node(data);

	//if singly linked list has no head then add the head
	if(!this.head) {
		this.head = new_node;
		this.tail = new_node;

	} else { //else point next of tail node to new node and set tail to new node.
		this.tail.next = new_node;
		this.tail = new_node;
	}
	this.numberOfValues++;
};

SinglyLinkedlist.prototype.remove = function(data) {
	//declare values to find the node to remove and the pointer before it.
	var previous = this.head;
	var current = this.head;

	//traverse the list. if the node is found
	while(current) {
		if (current.data === data) {
			if (current === this.head) { //if found node is the head, set head to the next node
				this.head = this.head.next
			}

			if(current === this.tail) { //if found node is the tail, set tail as the previous node
				this.tail = previous;
			}
			previous.next = current.net;
			this.numberOfValues--;
		} else {
			previous = current;
		}
		current = current.next;
	}
};


SinglyLinkedlist.prototype.insertAfter = function(data, toNodeData) {

}

SinglyLinkedlist.prototype.traverse = function(fn) {
	var current = this.head;
	while(current) {
		if(fn) {
			fn(current);
		}
		current = current.next;
	}
}

SinglyLinkedlist.length = function() {
	return this.numberOfValues
}

SinglyLinkedlist.print = function() {
	var resultString = '';
	var current = this.head;

	while(current) {
		string += current.data + ', ';
		current = current.next;
	}
	console.log(string.trim());
}
















