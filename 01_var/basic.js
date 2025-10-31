// v1.0 -> v2.0
// git commit -> 현시점의 스냅샷
// 함수(function) -기능
console.log('자바스크립트 시작.')
// alert('경고창')
// confirm('저장하겠습니까?')
// prompt('이름을 입력하세요')
document.writeln('<h3>이름은 홍길동</h3>');
console.log('콘솔창에 출력.');

// 변수, 자료형(datatype)
let myName = '이창호'; //문자열(string)
let myPoint = 120;  //숫자(number)
let isAdult = true;  //불리언(boolean)
let myHobbies = ['독서', '여행', '요리', '야구관람'] //배열(object)
let myAssets = {
  car: 'sonata',
  house: '아파트',
  cash: 100000000
}; //객체(object)
let myFamily; //undefined
let myFamily2 = null; //object

// alert(myName);
console.log(typeof myName);
console.log(typeof myPoint);
console.log(typeof isAdult);
console.log(typeof myHobbies);
console.log(typeof myAssets);
console.log(typeof myFamily);
console.log(typeof myFamily2);