import fs from "fs";

function user(id, pw, email) {
  (this.id = id), (this.pw = pw), (this.email = email);
}
// const d = new user("wkdfn", "123", "wkdfn@naver.com");
// console.log(d);
// 붕어빵을 생각하면 붕어빵 틀에 맞춰서 반죽을 넣으면 틀에 맞춰진 모양이 나온다. -> 찍어내자

// function day(year, month, day) {
//   (this.year = year), (this.month = month), (this.day = day);
// }
// const c = day(2020, 20, 01);
// console.log(c);
// const e = new user("daljae", "1234", "daljae@naver.com");
// const f = new user("jieun", "1234", "jieun@gmail.com");
// console.log(d);
// console.log(e);
// console.log(f);

let names = ["kong", "dal", "ji"];
let pw = ["1234", "1234", "1234"];
let email = ["kong.gamil", "kong.gamil", "kong.gamil", "추가 되냐?"];

let members = [];
for (let i = 0; i < email.length; i++) {
  members.push(new user(names[i], pw[i], email[i]));
}
// // 객체의 값을 json 처리 하겠다.
fs.writeFileSync("members.JSON", JSON.stringify(members, null, 2), "utf-8");
// 이후 이 값을 db에 새기기만 하면 됨
// 백엔드와 프론트엔드의 통화 수단이 뭐냐 하면 json으로 던져주기만 하면 됨 -> 포맷(약속 된 규격)
// 회원가입은 수백개 수만개가 될 수 도 있는데
// console.dir(members);
