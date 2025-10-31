// 학생번호, 학생명, 영어점수, 수학점수
// students 배열에 학생 3명 저장
// 각 학생의 영어점수 + 수학점수 => 합계 점수의 평균 구해서 출력하기
// 영어 점수의 평균, 수학점수의 평균

let a = 10;
let b = a++ +5;
console.log(a,b); //왜 b=15더라??

let students = [
  {sno: 1001, sname: '배찬승', escore: 71, mscore: 83},
  {sno: 1002, sname: '이호성', escore: 84, mscore: 65},
  {sno: 1001, sname: '이승민', escore: 67, mscore: 92}
]
let result = {};
result['tavg'] = ((students[0].escore + students[0].mscore) + 
                (students[1].escore + students[1].mscore) +
                (students[2].escore + students[2].mscore)) / students.length;
result['eavg'] = (students[0].escore + students[1].escore + students[2].escore) / students.length;
result['mavg'] = (students[0].mscore + students[1].mscore + students[2].mscore) / students.length;

console.log(result);