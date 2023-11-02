// 인터페이스 선언 병합
// ex01-16.ts 복사
(function () {
    interface Todo {
        title: string;
        content: string;
    }

    // 속성이 중복되는 경우 호환되는(동일한) 타입일 경우 사용 가능함
    interface Todo {
        _id: number;
        done: boolean;
    }

    var todo1: Todo = {
        title: "할일1",
        content: "등록할 때 사용",
        _id: 1,
        done: true,
    };

    console.log(todo1);
})();
