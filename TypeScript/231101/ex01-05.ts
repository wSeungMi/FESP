// 유니언 타입
(() => {
    // 유니언 타입 지정 X
    // function logString(msg: string) {
    //     console.log(msg);
    // }
    // function logNumber(msg: number) {
    //     console.log(msg);
    // }

    // logString("hello");
    // logNumber(100);

    function log(msg: string | number) {
        console.log(msg);
    }

    log("world");
    log(100);

    // var msg1 = "world";
    // var msg2 = 200;

    var msg1: string | number = "world";
    var msg2: number | string = 200;
    msg1 = 300;
    // msg1 = true; // 지정해둔 타입말고 다른 타입으로 변경할 수는 없다.

    log(msg1);
    log(msg2);
})();
