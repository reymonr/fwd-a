/** SELECTORS
 * getElementById() - single
 * getElementsByClassName() - multiple
 * getElementsByTagName() - multiple
 * querySelector() - single
 * querySelectorAll() - multiple
 */

//  getElementById()
// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Form Add Student';
// headerTitle.innerText = 'Add New Student';
// headerTitle.innerHTML = '<h1>Add New Student</h1>';

// getElementsByClassName()
// const listOfStudents = document.getElementsByClassName('list-group-item');
// console.log(listOfStudents[0].textContent);

// for (student of listOfStudents) {
// 	console.log(student.textContent);
// }

// listOfStudents[0].textContent = '105021810010 / Mary Heather';
// listOfStudents[1].style.fontWeight = 'bold';
// listOfStudents[2].style.backgroundColor = 'red';

// getElementsByTagName()
// const li = document.getElementsByTagName('li');

// for (l of li) {
// 	l.style.backgroundColor = 'skyblue';
// }

// li[0].textContent = '105021810010 / Mary Heather';
// li[1].style.fontWeight = 'bold';
// li[2].style.color = 'red';

// const btnAdd = document.getElementsByTagName('button');
// console.log(btnAdd);
// btnAdd[0].innerText = 'Add Student';

// querySelector() - id, class, tag - single element
// const headerTitle = document.querySelector('#header-title');
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Form Add New Student';

// const students = document.querySelector('.list-group-item:nth-child(odd)');
// console.log(students);

// const title = document.querySelector('li:nth-of-type(2)');
// console.log(title);

// const btnSubmit = document.querySelector('input[type="submit"]');
// btnSubmit.value = 'ADD STUDENT';

// querySelectorAll()
// const students = document.querySelectorAll('.list-group-item');
// console.log(students);
// Array.prototype.forEach.call(students, (st) =>
// 	console.log(`${st.textContent}`)
// );

// const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for (ganjil of odd) {
// 	ganjil.style.backgroundColor = 'lightgreen';
// }

// const even = document.querySelectorAll('.list-group-item:nth-child(even)');
// for (genap of even) {
// 	genap.style.backgroundColor = 'lightblue';
// }

// EVENT HANDLING
// const main = document.querySelector('#main');
// main.addEventListener('contextmenu', (e) => {
// 	e.preventDefault();
// });

// const btnSubmit = document.querySelector('input[type="submit"]');
// btnSubmit.addEventListener('click', eventHandler);

// const box = document.querySelector('#box');
// const container = document.querySelector('.container');
// box.addEventListener('mousemove', eventHandler);

// function eventHandler(e) {
// 	e.preventDefault();

// 	console.log(e);
// 	output.innerHTML = `<h5>offsetX : ${e.offsetX} <br> offssetY: ${e.offsetY}</h5>`;
// container.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 70)`;
// 	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 70)`;
// }
