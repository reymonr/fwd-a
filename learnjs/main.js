// Array n Object
const students = [
	{
		id: 1,
		nim: 105011110001,
		fullName: 'John Doe',
		prodi: 'Sistem Informasi',
		entranceYear: 2011,
		gpa: 3.19,
		isActive: false,
	},
	{
		id: 2,
		nim: 105011710002,
		fullName: 'Mary Heather',
		prodi: 'Sistem Informasi',
		entranceYear: 2017,
		gpa: 3.79,
		isActive: true,
	},
	{
		id: 5,
		nim: 105021110003,
		fullName: 'Charlie Kaplin',
		prodi: 'Informatika',
		entranceYear: 2011,
		gpa: 2.87,
		isActive: true,
	},
	{
		id: 3,
		nim: 105011310003,
		fullName: 'Calvin Klein',
		prodi: 'Sistem Informasi',
		entranceYear: 2013,
		gpa: 3.99,
		isActive: true,
	},
	{
		id: 4,
		nim: 105021510001,
		fullName: 'James Bond',
		prodi: 'Informatika',
		entranceYear: 2015,
		gpa: 3.01,
		isActive: false,
	},
	{
		id: 6,
		nim: 105021710005,
		fullName: 'Amy Awards',
		prodi: 'Informatika',
		entranceYear: 2017,
		gpa: 2.19,
		isActive: true,
	},
];

// for (student of students) {
// 	console.log(student);
// }

// HIGHER ORDER FUNCTIONS
// forEach
// students.forEach(function (st) {
// 	console.log(`${st.nim} / ${st.fullName}`);
// });

// filter
// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// const legendStudents = students.filter((st) =>
// 	currentYear - st.entranceYear > 4 ? true : false
// );
// console.log(legendStudents);

// const registeredStudents = students.filter(
// 	(st) => st.isActive && st.prodi === 'Informatika'
// );
// console.log(registeredStudents);

// map
const highGPA = students
	.map((st) => st.gpa)
	.filter((gpa) => gpa > 3.0)
	.sort((a, b) => a - b);
console.log(highGPA);

const lowGPA = students
	.map((st) => st.gpa)
	.filter((gpa) => gpa < 3.0)
	.sort((a, b) => b - a);
console.log(lowGPA);
