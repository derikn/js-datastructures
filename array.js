//implementation of an array data structure

//constructor initializes an empty list inside using object literal notation
function MyArray() {
	this.array = [];
}

//Insert using push method.
MyArray.prototype.add = function(data) {
	this.array.push(data)
}

//Remove by replace old array with a new array filtered data
MyArray.prototype.remove = function(data) {
	this.array = this.array.filter(function(current) {
		return current !==data;
	});
};


//search using indexof and returning index
MyArray.prototype.search = function(data) {
	var foundIndex = this.array.indexOf(data);

	if (~foundIndex) {
		return foundIndex
	}
	return null
}

//search using index and returning value
MyArray.prototype.getAtIndex = function(idx){
	return this.array[idx];
}

//length function
MyArray.prototype.length = function() {
	return this.array.length;
}

//print function
MyArray.prototype.print = function() {
	console.log(this.array.join(', '))
};

var friends = new MyArray();
friends.add('derik');
friends.add('edwin');
friends.add('lilian');
friends.print()
console.log('searching andrew should give null: ', friends.search('andrew'))
console.log('searching lilian should give index 2: ', friends.search('lilian'))
console.log('gettinganindex 1 should give edwin', friends.getAtIndex(1));
console.log(friends.length());
friends.remove('derik');
friends.print();

/** ES6 Implementation of an Array **/

//class object constructor
class EsArray {
	constructor() {
		this.array = []	
	}

	add(data) {
		this.array.push(data)
	};

	remove(data) {
		this.array = this.array.filter(current => current!==data);
	}

	search(data) {
		let foundIndex = this.array.indexOf(data);
		if(~foundIndex) {
			return foundIndex;
		}
		return null;
	}

	getAtIndex(idx) {
		return this.array[idx];
	}

	length() {
		return this.array.length
	}

	print() {
		console.log(this.array.join(', '));
	}
}

const family = new EsArray();

family.add('andrew');
family.add('thomas');
family.add('gloria');
family.print();
console.log('searching lilian should give null ', family.search('lilian'))
console.log('searching andrew should give idx 0 ', family.search('andrew'))
console.log('gettinganindex 1 should give thomas', family.getAtIndex(1));
console.log(family.length());
family.remove('derik');
family.print();


ages = [23,12,42,1,2,4,2,1]
console.log(ages);

under20 = ages.filter(current => current <20)
console.log(under20);





























