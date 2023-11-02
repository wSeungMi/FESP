import type { Data } from "./math.js";

// 인터페이스 자동완성 가능 -> import되면 type이라는걸 명시적으로 붙여주는게 좋음
var data: Data = { a: 10, b: 20 };

import MyMath from "./math.js";
console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data));

import { sum, substract } from "./math.js";
console.log(2, sum(data));
console.log(2, substract(data));
