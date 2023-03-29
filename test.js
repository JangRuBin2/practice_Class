import search from "./searchModule.js";

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
let a = [];
a.push("gk");
a.push("ss");
console.log(a);
// 배열[마지막번재]를 하면 배열의 n번째 값을 찾을 수 있다
// console.log(studentList[studentList.length - 2]);
// length는 항상 마지막 인덱스보다 +1 많고, 마지막 원소는 length보다 항상 -1 이다.

// 단순하게 박수연씨가 몇번째에 있나 확인하는 방법
// for (let i = 0; i < studentList.length; i++) {
//   if (studentList[i] === "박수연") {
//     console.log(i);
//   } else {
//     console.log("해당 순서는 박수연씨가 아님");
//   }
// }
// 이런 조건문을 잘 쓴다면 회원 정보에 맞는 데이터를 불러올 때 쓸 수 있겠다. -> 추상화 되는 중
// function searching(array, name) {
//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i] === name) {
//       console.log(i);
//     } else {
//       console.log(`해당 순서는 ${name}씨가 아님`);
//     }
//   }
// }
// console.log(search);

search(student, "한유진");
