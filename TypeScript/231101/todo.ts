(() => {
    // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언

    // 3. 타입값 지정
    let todoItems: Todo[];

    // api
    // 2. 리턴타입 지정
    function fetchTodoItems(): Todo[] {
        const todos = [
            { id: 1, title: "안녕", done: false },
            { id: 2, title: "타입", done: false },
            { id: 3, title: "스크립트", done: false },
        ];
        return todos;
    }

    // TODO: Todo Type 지정
    // 1. 적절한 타입을 선언해준다.
    type Todo = {
        id: number;
        title: string;
        done: boolean;
    };

    // crud methods
    // 4. 리턴타입 지정
    function fetchTodos(): Todo[] {
        const todos = fetchTodoItems();
        return todos;
    }

    function addTodo(todo: Todo): void {
        todoItems.push(todo);
    }

    function deleteTodo(index: number): void {
        todoItems.splice(index, 1);
    }

    function completeTodo(index: number, todo: Todo): void {
        todo.done = true;
        todoItems.splice(index, 1, todo);
    }

    // business logic
    function logFirstTodo(): Todo {
        return todoItems[0];
    }

    function showCompleted(): Todo[] {
        return todoItems.filter((item) => item.done);
    }

    function addTwoTodoItems() {
        // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
        // 배열로 만들필요없이 그냥 담으면 되는구ㅏㄴ..
        // const newTodos = [
        //     { id: 4, title: "드라마보기", done: true },
        //     { id: 5, title: "타입스크립트 예습", done: false },
        // ];
        // 5. 함수에 매개변수 추가
        addTodo({ id: 4, title: "드라마보기", done: true });
        addTodo({ id: 5, title: "타입스크립트 예습", done: false });

        // 6. 호출
        const first = logFirstTodo();
        console.log(first);

        deleteTodo(4);
        completeTodo(2, todoItems[2]);

        const result = showCompleted();
        console.log(result);
    }

    // 1. Todo 목록을 가져온다.
    todoItems = fetchTodos();
    // 2. 2개의 Todo를 등록한다.
    addTwoTodoItems();

    console.log(todoItems);
})();
