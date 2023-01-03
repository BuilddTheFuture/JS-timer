'use strict';

// let elem = document.querySelector('#elem');
// function timer() {
//     console.log('ee');
// }
// setInterval(timer, 3000)

// let elem = document.querySelector('#elem');
// setInterval(function timer() {
//     console.log('ee');
// }, 1000)

// let num = 100;
// setInterval(() => {console.log(num--)}, 1000); // каждую секунду уменьшается num на 1
// let num = 10;
// let timerId = setInterval(function() {
//     if (num <= 0) {
//         clearInterval(timerId) // остановилось на 0 при уменьшении от 10
//     }
//     console.log(num--);
// }, 1000)

// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
//     let i = 1;
//     setInterval(function(){
//         console.log(i++);
//     }, 1000)
// })

//
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', () => {
//     let num = 5;
//     timerId = setInterval(function() {
//         if (num >= 0) {
//             console.log(num--);
//         } else {
//             clearInterval(timerId)
//         }
//     }, 1000)
// });
// stop.addEventListener('click', () => {
//     clearInterval(timerId)
// })

//
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' : ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	timerId = clearInterval(timerId);
// });

//
// let elem = document.querySelector('#elem');
// let timer = setInterval (() => {
//     elem.value = Number(elem.value) - 1;
//     if (elem.value <= 0) {
//         clearInterval(timer)
//     }
// }, 1000);

//
// let elem = document.querySelector('#elem');
// let stop = document.querySelector('#stop');
// let timer;
// elem.addEventListener('click', function() {
// 	let self = this;
//     timer = setInterval(function() {
// 		self.value = Number(self.value) + 1;
// 	}, 1000);
// });
// stop.addEventListener('click', () => {
//     timer = clearInterval(timer)
// })


// let elem = document.querySelector('#elem');
// elem.addEventListener ('click', function(){
//     setInterval( (function(self){
//         return (function() {
//             console.log(self.value);
//         })
//     }) (this), 1000) // через замыкание
// })

//
// let elem = document.querySelector('#elem');
// elem.addEventListener ('click', function(){
//     function func(self) {
//         return function() {
//             console.log(self.value);
//         }
//     }
//     setInterval(func(this), 1000) // замыкание без именованой ф-и
// })

//
// function func(str1, str2) {
// 	console.log(str1, str2);
// }
// setInterval(func, 1000, 'a', 'b');

//
// setInterval(function(str1, str2) {
// 	console.log(str1, str2);
// }, 1000, 'a', 'b'); // сокращенно

//
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value--;
// 	}, 1000, this);
// });

//
// let button = document.querySelector('#btn');
// let text = document.querySelector('#text');
// button.addEventListener('click', function() {
//     let timer = setInterval(() => {
//         text.textContent = +text.textContent - 1;
//         if (+text.textContent <= 0) {
//             timer = clearInterval(timer)
//         } 
//     }, 1000)
// })

//
// let input = document.querySelector('#elem');
// input.addEventListener('blur', function(){
//     let self = this;
//     setInterval(() => {
//         this.value = this.value **2; 
//     }, 1000)
// })

//
// let input = document.querySelector('#elem');
// let button = document.querySelector('#btn');
// let text = document.querySelector('#text');
// button.addEventListener('click', function(){
//     text.textContent = input.value;
//     let timerId = setInterval(function(){
//         text.textContent = +text.textContent - 1
//         if (+text.textContent == 0) {
//             timerId = clearInterval(timerId)
//         }
//     }, 1000)
// })

//
// let text = document.querySelector('#text');
// setInterval(() => {
//     text.classList.toggle('colored2') // меняет цвет с синего на зеленый
// }, 1000)

//
// let text = document.querySelector('#text');
// setInterval(function(){
//     let date = new Date;
//     text.textContent = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
// }, 1000)

//
// let text = document.querySelector('#text');
// setTimeout(function(){
//     text.textContent = 'piuu'
// }, 3000) // задержка перед выполнением на 3 сек

//
// let i = 0;
// function timer() { // создание таймера через функцию setTimeout
//     setTimeout(() => {
//         console.log(i++);
//         timer();
//     }, 1000)
// };
// timer()

//








































































