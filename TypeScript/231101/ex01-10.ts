// 인터페이스
// ex01-09.ts 복사
(() => {
    interface User {
        name: string;
        age: number;
    }

    // 변수에 타입을 지정하는 경우
    var kim: User = { name: "김철수", age: 30 };

    // 함수 매개변수에 타입을 지정하는 경우
    var getAge = function (kim: User) {
        return kim.age;
    };

    // 함수에 리턴 타입을 지정하는 경우
    var createUser = function (name: string, age: number): User {
        return { name, age };
    };

    // kim: User
    // 타입 추론을 통해 변수 kim의 타입이 User인 걸 알기 때문에 굳이 변수에 선언 X
    var kim: User = createUser("김철수", 30);
    console.log(getAge(kim));
})();
