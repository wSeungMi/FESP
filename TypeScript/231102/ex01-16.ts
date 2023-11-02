// 인터페이스 다중 상속
(function () {
    interface Todo {
        title: string;
        content?: string;
    }

    // 속성이 중복되는 경우 호환되는(동일한) 타입일 경우 사용 가능함
    interface TodoList extends Todo {
        _id: number;
        title: string;
        done: boolean;
    }

    // 인터페이스 다중 상속
    interface TodoInfo extends Todo, TodoList {
        createdAt: Date;
        updatedAt: Date;
    }

    var todo1: Todo = {
        title: "할일1",
        content: "등록할 때 사용",
    };

    var todo2: TodoList = {
        _id: 2,
        title: "할일2",
        content: "목록 조회에 사용",
        done: false,
    };

    //createAt, updateAt은 date 생성자 함수의 객체를 생성해줘야 함
    var todo3: TodoInfo = {
        _id: 3,
        title: "할일 3",
        content: "시간을 포함한 상세 조회에 사용",
        done: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    console.log(todo1, todo2, todo3);
})();
