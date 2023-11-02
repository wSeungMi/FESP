// node.js환경에서의 export
// module.export = function sum(data) { ... } -> common js 방식
export function sum(data) {
    return data.a + data.b;
}

export function substract(data) {
    return data.a - data.b;
}

function divide(data) {
    return data.a / data.b;
}

export default { sum, substract, divide };
