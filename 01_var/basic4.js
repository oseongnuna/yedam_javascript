// basic4.js
// 객체타입. /string, number, boolean => 원시유형(primitive type) vs 복합유형
let myInfo = {
  name: '홍길동',
  age: 20,
  phone: '010-111-1111',
  address: '대구 중구 중앙대로 100',
  height: 175.2
}

let address = 'address';
console.log(myInfo['address']);

myInfo['address'] = '대구 중구 중앙대로 200';
console.log(myInfo);

// 학생(학생번호, 이름, 점수)
let student1 = {
  sno: 100,
  sname: '홍길동',
  score: 85
}
let students = [student1];
students[1] = {
  sno: 200,
  sname: '김민석',
  score: 92
}
console.log(students);

let result = parseInt(students[0]['score']) + parseInt(students[1]['score']); // 홍길동, 김민석 점수 합 => result 대입
let result2 = parseInt(students[0].score) + parseInt(students[1].score); // 홍길동, 김민석 점수 합 => result 대입

console.log(result);
console.log(result2);

