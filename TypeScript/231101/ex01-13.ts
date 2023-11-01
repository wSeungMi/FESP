// index signature, string
(() => {
    // 회원가입
    interface User {
        name: string;
        email: string;
        age?: number;
        // phone?: string;
        // address?: string;
        // hobby?: string;
        // ...

        // 인덱스 시그니처
        // [etc: string]: string;
        // [etc: string]: string | number;
        [etc: string]: string | number | undefined;
    }

    var kim: User = {
        name: "김철수",
        email: "kim@gmail.com",
        age: 30,
        phone: "010-...",
        address: "서울시...",
        hobby: "독서",
    };

    var lee: User = {
        name: "이영희",
        email: "lee@gmail.com",
        age: 20,
    };

    console.log(kim, lee);
})();
