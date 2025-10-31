// 조건문
if (10 <= 10) {
  // if 블럭에 구현
}

// 회원(회원번호, 회원명, 회원점수(75)) => 객체 
// 1001, 김영웅, 123 / 1002, 이재현, 95 / 1003, 구자욱, 100
// members 배열에 저장 
// result 에 회원점수의 합 => 콘솔출력
// result 에 회원평균의 값 => 콘솔출력

// let members = [];
// members[members.length] = {
//   no: 1001,
//   name: '김영웅',
//   score: 123
// }
// members[members.length] = {
//   no: 1002,
//   name: '이재현',
//   score: 95
// }
// members[members.length] = {
//   no: 1003,
//   name: '구자욱',
//   score: 100
// }

// result = { 
//   total: members[0]['score'] + members[1]['score'] + members[2]['score'],
//   avg: (members[0]['score'] + members[1]['score'] + members[2]['score']) / 3
// }
// console.log(result)

let members = [
  {no: 1001, name: '김영웅', score: 123}, 
  {no: 1002, name: '이재현', score: 95}, 
  {no: 1003, name: '구자욱', score: 100}
]
let result = {}; //객체로 선언
result['total'] = members[0]['score'] + members[1]['score'] + members[2]['score'];
result['avg'] = result['total'] / members.length;

console.log(result);

console.log('회원점수의 합: ' + result['total']);
console.log('회원평균의 값: ' + result['avg']);

if (members[1].score > result['avg']) {
  console.log('평균보다 큽니다.');
} else {
  // console.log('평균 미만');
  if (members[1].score < result['avg']) {
    console.log('평균보다 작습니다.');
  } else {
    console.log('평균과 같습니다.');
  }
}

let idx = 2;
if (members[idx].score > result['avg']) {
  console.log(members[idx]['name'] + '의 점수는 평균보다 큽니다.');
} else if (members[idx].score < result['avg']) {
    console.log(members[idx]['name'] + '의 점수는 평균보다 작습니다.');
} else {
    console.log(members[idx]['name'] + '의 점수는 평균과 같습니다.');
}