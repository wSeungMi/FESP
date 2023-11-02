var data = { a: 10, b: 20 };

// function sum(a, b) {
//     return a + b;
// }

// 낱개로 export한 경우 -> { }
// import { sum, substract } from "./math.js";

// export default
// import MyMath from "./math.js";

// console.log(1, sum(data));
// console.log(1, substract(data));
// console.log(1, MyMath.divide(data));
// console.log(1, sum(20, 30)); // 마지막에 호출된 함수가 기존 함수를 덮어씌움

// 별칭
// import { sum as add } from "./math.js";
// console.log(1, add(data));

// export한 모든 함수를 import
import * as MyMath from "./math.js";
console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
// console.log(1, MyMath.divide(data)); // 에러
