// 인터페이스 상속
(function () {
    // 중복 코드 제거가 필요
    /**
   *    title: string;
        content: string;
   */
    interface Todo {
        title: string;
        content: string;
    }

    interface TodoInfo extends Todo {
        // title: string;
        // content: string;
        readonly _id: number;
        done?: boolean;
    }

    // 인터페이스를 정의해줘야 오타나 정의되지않은 속성 사용할 때 체크가 가능함!
    var todo1: Todo = {
        title: "할일1",
        content: "등록할 때 사용",
    };

    var todo2: TodoInfo = {
        _id: 2,
        title: "할일2",
        content: "상세 조회에 사용",
    };

    console.log(todo1, todo2);
})();
