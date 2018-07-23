// OBJECT
// let options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024
// }

// options.name = "test2"
// options.bool = false;
// options.colors = {
// 	border: 'black',
// 	background: 'red'
// }

// delete options.bool; 

// for( let key in options) {
// 	console.log('Свойство ' + key + ' имеет значение ' + options[key])
// }

// console.log(Object.keys(options).length);

// console.log(options)


// MASSIV

// let first = [1,'second',2,3,4,5];
// first[99] = 99;

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// first.forEach(function(item,i,arr) {
// 	console.log(i + ': ' + item + " (массив: " + arr + ")")
// });



// let first = [1, 1155, 15, 99];

// function sortNumbers(a,b) {
// 	return a - b;
// }

// let i = first.sort(sortNumbers);

// console.log(i);

// let soldier = {
// 	health: 400,
// 	armor: 100
// }

// let john = {
// 	health: 100
// }

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);


// let box = document.getElementById('box'),
// 		btn = document.getElementsByTagName('button'),
// 		circle = document.getElementsByClassName('circle'),
// 		heart = document.querySelectorAll('.heart'),
// 		oneHeart = document.querySelector('.heart');

// console.log(box);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';
// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].stylebackgroundColor = 'red';

// let div = document.createElement('div');
// let text = document.createTextNode('Тут был я');

// div.classList.add("black");

// document.body.appendChild(div);
// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[2]);
// document.body.replaceChild(circle[1], circle[0]);

// div.innerHTML = '<h1>Hi</h1>'

// div.textContent = 'Hello World';

// let btn = document.getElementsByTagName('button');
// let overlay = document.querySelector('.overlay');
// let link = document.getElementsByTagName('a');

// btn[0].addEventListener('click', function() {
// 	alert('Hello');
// });

// btn[1].addEventListener('mouseenter', function() {
// 	alert('Ты навел на кнопку 2');
// });

// btn[1].addEventListener('mouseleave', function() {
// 	alert('Ты увел на кнопку 2');
// });

// btn[1].addEventListener('mouseleave', function() {
// 	alert('Ты убрали мышку с кнопки');
// });

// btn[0].addEventListener('click', function(event) {
// 	console.log('Произошло событие:' + event.type + ' на элементе' +
// 		event.target);
// });

// btn[1].addEventListener('mouseenter', function(event) {
// 	console.log('Произошло событие:' + event.type + ' на элементе' +
// 		event.target);
// });

// overlay.addEventListener('click', function(event) {
// 	console.log('Произошло событие:' + event.type + ' на элементе' +
// 		event.target);
// });

// link[0].addEventListener('click', function(){
// 	event.preventDefault();
// 	console.log('Произошло событие:' + event.type + ' на элементе' +
// 		event.target);
// })

// console.log(btn[0]);


// let timerId = setTimeout(log, 2000);

// function log() {
// 	console.log('Hello!');
// 	timerId = setTimeout(log, 2000);
// }
