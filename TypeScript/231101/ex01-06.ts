// 타입 별칭
// ex01-05.ts 복사
(() => {
    type Message = string | number;
    function log(msg: Message) {
        console.log(msg);
    }

    var msg1: Message = "world";
    var msg2: Message = 200;

    log(msg1);
    log(msg2);
})();
