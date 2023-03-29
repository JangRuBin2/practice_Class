// function searching(array, name) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === name) {
//       console.log(i);
//     } else {
//       console.log("s");
//     }
//   }
// }

export default function search(array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      console.log(i);
    } else {
      console.log(`너는 ${name}씨가 아니잖아`);
    }
  }
}
//export default search
