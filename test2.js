const student = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];
const example = {
  order: 0,
  name: "강지민",
};
// 생성자 함수 방식 -> 객체에 이름이 붙음 (instance)
function makeConstruct(order, name) {
  this.order = order;
  this.name = name;
}
// 생성자 함수 호출할 때는 앞에 new를 붙여줘야 함
let a = [];
a.push(new makeConstruct(0, "최대건"));
console.log(a);
// function ordre(order) {
//   if(typeof(order)==="number") {
//     return this._order;
//   }
// }
// }

// let a = makeConstruct(0, student[0]);
// console.log(a);
// let studentdada = [];
// studentdada.push(new makeConstruct());

// 객체 리턴방식
function makeObject(order, name) {
  return {
    order: order,
    name: name,
  };
}
let b = makeObject(0, student[0]);
console.log(b);
// 오더가 숫자가 아니면 곤란하다는 가정하에 만들어 보자
// 강사님 방식
// function makeObject(order,name) {
//   if(typeof(order)==="number") {
//     return {
//       order :order,
//       name:name
//     }}
//     else {
//       console.log("order는 숫자여야 함")
//     }
//   }

// 자바 작성법
// class User {
//   constructor(order, name) {
//     this.order = order;
//     this.name = name;
//   }

//   set order(order) {
// _order를 쓰는이유 => 검사가 끝났다 (구분하기 위해)
//     if (typeof order === "number") {
//       this._order = order;
//     }
//   }
// }

// let test = [];
// student.forEach((stu, index) => {
//   test.push(new User(index, stu));
// });
// console.log(test);

// 빈 객체 생성
const person = new Object();
// 프로퍼티 추가
person.name = "lee";
person.sayHello = function () {
  console.log("hi! my name is" + this.name);
};
console.log(person);
person.sayHello();
