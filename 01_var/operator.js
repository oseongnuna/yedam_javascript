// 연산자
console.log(heading);

result = 30 / 20; // 몫(1)
result2 = 30 % 20; // 나머지(10)
console.log(result);
console.log(result2);

result2++;
console.log(result2);

result2--;
console.log(result2);

// 할당연산자
let str = 'Hello';
result = str = 'World';
console.log(result);

// console.clear(); // 로그삭제

result = result + ', Another';
result += ' World' // 누적연산

console.log(result);

let num = 10;
num += 10; // num = num + 10;
num -= 10;
num *= 10;
num /= 10; //num = num / 10;

console.log(num);

// 비교연산자 => true/false 비교구문(if)
let team = 'red';
team = 10;

console.log(team);
console.log(10 == '10'); // ==: 값을 비교
console.log(10 === '10'); // ===: 값&타입 비교

console.log(10 < '10');

// console.clear(); // 로그삭제

// 논리연산자  true && true => true, true || false => true, false || false => false
console.log( 10 <= 10 && 10 < 10);
console.log( 10 <= 10 || 10 < 10);
console.log( 10 <= 10 || !(10 < 10));
