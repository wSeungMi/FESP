(() => {
    interface TodoInfoDetail {
        _id: number;
        title: string;
        content: string;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
    }

    // 타스 내장 유틸리티 타입
    // Pick<속성을 추출할 타입, '사용할 속성명'>
    // Omit<속성을 추출할 타입, '제외할 속성명'>
    type TodoRegist = Pick<TodoInfoDetail, "title" | "content">;
    type TodoInfo = Omit<TodoInfoDetail, "createdAt" | "updatedAt">;
    type TodoList = Omit<TodoInfo, "content">;

    var todo1: TodoRegist = {
        title: "할일1",
        content: "등록에 사용",
    };

    var todo2: TodoInfo = {
        _id: 2,
        title: "할일2",
        content: "상세조회에 사용",
        done: true,
    };

    var todo3: TodoList = {
        _id: 3,
        title: "할일2",
        done: true,
    };

    console.log(todo1, todo2, todo3);
})();
