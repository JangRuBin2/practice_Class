// 회원정보를 담은 객체라고 생각해보자
const itsMe = {
  first: ["나나", "나나", "나나", "나나", "나나", "나나"],
  lastName: ["나나", "나나", "나나", "나나", "나나", "나나"],
  age: [],
  email: ["나나", "나나", "나나", "나나", "나나", "나나", "나나", "나나"],
  phone: "",
  adress: "",
  like: "",
  hate: "",
  hobby: "",
  coffee: "",
  food: "",
  sleepTime: "",
};
function gain(lala, sss) {
  (this.lala = lala), (this.sss = sss);
}

let memberInfo = [];
for (let i = 0; i < 2; i++) {
  memberInfo.push(new gain(itsMe.first[i], [itsMe.lastName[i]]));
}

console.log(memberInfo);
