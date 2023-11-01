// 유니언 타입
(() => {
    function print(msg: string | number | boolean): void {
        // 조건 추가 해주기!
        // 타입 가드
        if (typeof msg === "string") {
            console.log(`${msg} 글자 수: ${msg.length}`);
        } else if (typeof msg === "number") {
            console.log(`${msg} + 10 = ${msg + 10}`);
        } else {
            console.log(`${msg}: ${msg ? "참" : "거짓"}`);
        }
        // console.log(`${msg} 글자 수: ${msg.length}`); // length 메서드는 string에만 존재
        // console.log(`${msg} + 10 = ${msg + 10}`);
        // console.log(`${msg}: ${msg ? "참" : "거짓"}`); // 빈 문자면 fasle, 문자가 있으면 true / 숫자도 0만 false, 그 외는 모두 true여서 논리적 오류 X
    }
    print("world");
    print(200);
    print(false);
})();
