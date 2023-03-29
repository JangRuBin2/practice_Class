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
function gain(first, lastName) {
  (this.first = first), (this.lastName = lastName);
}

// let memberInfo = [];
// for (let i = 0; i < 2; i++) {
//   memberInfo.push(new gain(first[i], [lastName[i]]));
// }

console.log(itsMe.first);
