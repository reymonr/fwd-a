class Person {
	constructor(firstName, lastName, gender, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dob = dob;
	}

	getInfo() {
		return `Hi, my name is ${this.firstName} ${this.lastName}.`;
	}
}

class Student extends Person {
	constructor(firstName, lastName, gender, dob, prodi) {
		super(firstName, lastName, gender, dob);

		this.prodi = prodi;
	}
}

const st1 = new Student('Ricky', 'Pasulatan', 'M', '1-1-2005', 'Informatika');
console.log(st1);
console.log(st1.getInfo());
