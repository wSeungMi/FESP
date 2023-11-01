(() => {
    function user(name: string, age?: number): void {
        console.log(name, age);
    }

    user("김철수", 30);
    user("이영희"); // 함수의 매개변수에 ?가 없으면 지정된 매개변수 수보다 모자라서 error가 뜨지만, ?를 붙이면 에러 X
})();
