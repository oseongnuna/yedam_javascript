//basic2.js
let num1 = 10; // 숫자리터럴
let num2 = 20;

console.log('두 변수의 + 연산결과: ' + (num1 + num2));

let str1 = 'Hello,'; // 문자리터럴
let str2 = 'world';

console.log('두 변수의 + 연산결과: ' + str1 + str2);

let temp1 = prompt('숫자값을 입력하세요!!'); // 10 -> '10'
let temp2 = prompt('숫자값을 입력하세요!!'); // 20 -> '20'
// console.log('입력값은 ' + temp1);
// console.log(parseInt(temp1) + parseInt(temp2)); // '10' -> 10 형변환
// console.log(temp1 - temp2); //'10' - '20' => 10 - 20 : '+' 이외의 연산자는 알아서 숫자로 변환해서 계산해줌
console.log(temp1 == temp2); // true or false 출력
//'Hello' -> ?? : NaN (Not A Number) 문자를 숫자로 변환 불가