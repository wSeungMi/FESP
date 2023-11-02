(() => {
    // 제네릭은 라이브러리에 정의된 문법을 사용하는 경우가 더 많을 것.
    class Queue {
        data: string[] = [];
        push(item: string): void {
            this.data.push(item);
        }
        pop(): string | void {
            return this.data.shift();
        }
    }

    var sq = new Queue();
    sq.push("hello");
    sq.push("javascript");
    sq.push("world");

    var s1 = sq.pop();
    var s2 = sq.pop();
    var s3 = sq.pop();
    console.log(s1, s2, s3);
})();
