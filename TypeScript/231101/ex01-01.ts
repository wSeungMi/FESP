// typescript = type + javascript
// 함수에서도 return할 자료형 지정해줘야 함
(() => {
    function hello(name: string): string {
        return "Hi " + name;
    }
    console.log(hello("Typescript!!"));
})();
