// 인터페이스
// ex01-07.ts 복사
(() => {
    // 객체의 타입 선언
    // 클래스 만들 듯이 인터페이스 정의
    interface User {
        name: string;
        age: number;
    }

    // 객체 생성
    var kim: User = { name: "김철수", age: 30 };

    console.log(kim);

    function printUser(user: User): void {
        console.log(user.name, user.age);
    }

    printUser(kim);
})();
