import fs from "fs";

function userInfoClassMaker(id, pw) {
  this.id = id;
  this.pw = pw;
}

let userId = [];
userId.push("이름 추가");
// console.log(userId);
let userPw = [];
userPw.push("비밀번호 추가");

let memeberInfo = [];
for (let i = 0; i < userId.length; i++) {
  memeberInfo.push(new userInfoClassMaker(userId[i], userPw[i]));
}
console.log(memeberInfo);
fs.writeFileSync("test.JSON", JSON.stringify(memeberInfo, null, 2), "utf-8");
