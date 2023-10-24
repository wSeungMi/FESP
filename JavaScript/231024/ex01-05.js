// 참조 데이터 타입 (Object)
let foo = new Object();
foo.name = "lee";
foo["age"] = 30;
foo.job = "student";
foo["married"] = false;

console.log(foo["name"], foo.age, foo.job, foo["married"]);
console.log(typeof foo, foo);
