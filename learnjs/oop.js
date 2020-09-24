// constructor function
function Person(firstName, lastName, gender, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = gender;
	this.dob = dob;
}

// getInfo
Person.prototype.getName = function () {
	return `Hi, my name is ${this.firstName} ${this.lastName}.`;
};

// constructor Student
function Student(firstName, lastName, gender, dob, prodi) {
	Person.call(this, firstName, lastName, gender, dob);

	this.prodi = prodi;
}

// prototype inheritance
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

// instantiate object
const st1 = new Student('Ricky', 'Pasulatan', 'M', '1-1-2003', 'Informatika');
console.log(st1);
console.log(st1.getName());
