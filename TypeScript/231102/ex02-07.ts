(() => {
    // 제네릭을 쓰지 않았을 때
    function echoString(msg: string): string {
        return msg;
    }

    function echoNumber(msg: number): number {
        return msg;
    }

    // console.log(echo("hello"));
    const result1: string = echoString("hello");
    console.log(result1.substring(1, 3));

    // number 타입을 받아야하는 경우도 생겼을 때
    // 유니온 타입도 여러가지 변수가 생김
    const result2: number = echoNumber(3.141592);
    console.log(result2.toFixed(2));
})();
