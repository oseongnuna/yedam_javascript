// 배열: 순번이 0부터 시작(인덱스)
let foods = ['감자탕', '짜장면', '탕수육', '햄버거'];
console.log(foods[0], foods[1]);

// 배열요소의 변경
foods[1] = '짬뽕'
console.log(foods);

// 배열요소 추가
foods[4] = '삼겹살';
console.log(foods);

// Math.random() => 0(포함) ~ 100(포함) : 실수 -> 정수
console.log('임의의 값: ' + Math.random()); // 0 <= x < 1
console.log('0~100 사이의 임의의 값: ' + Math.ceil(Math.random() * 100)); // 0 <= x <= 100
console.log('0~100 사이의 임의의 값: ' + Math.floor(Math.random() * 101)); // 0 <= x < 101



let points = [Math.floor(Math.random() * 101), 
              Math.floor(Math.random() * 101), 
              Math.floor(Math.random() * 101), 
              Math.floor(Math.random() * 101),
              Math.floor(Math.random() * 101)];
let result = points[0] + points[points.length - 1]; // 완성(points 처음 + points 마지막)
console.log(result);
console.log(points.length);

let numbers = [];
// prompt 활용해서 숫자를 3번 입력 => 배열 추가
// result 에 대입 -> console에 result 출력
numbers[numbers.length] = prompt('숫자값을 입력하세요!!');
numbers[numbers.length] = prompt('숫자값을 입력하세요!!');
numbers[numbers.length] = prompt('숫자값을 입력하세요!!');
console.log(numbers);

let result2 = parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]);
console.log(result2);

