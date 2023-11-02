(() => {
    // date는 object의 일종이기에 date 대신 object로 받을 수도 있다.
    function echo<T extends string | number | object>(msg: T): T {
        return msg;
    }

    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(new Date()));
    console.log(echo(new RegExp("")));
})();
