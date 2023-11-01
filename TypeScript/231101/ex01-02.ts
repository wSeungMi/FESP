(() => {
    // string
    var str: string = "hello";

    // number
    var age: number = 30;

    // boolean
    var done: boolean = true;

    // object
    var todo: object = { title: "Typescript 공부", done: false };

    // Array
    var items: Array<string> = ["JS 공부", "TS 공부"];
    var todoList: string[] = ["JS 프로젝트", "TS 프로젝트"];

    // tuple
    var users: [string, string] = ["김철수", "이영희"];

    // any
    var userName: any = "이일구";
    // userName에 따로 타입을 명시하지 않아도 에러로 인식하는 이유: 타입 추론을 통해 타입을 인식한다.
    // userName = 219; // string 타입에 number 타입을 넣을 수 없어서 에러 발생!
    userName = 219;

    // null
    var nullVal: null = null;

    // undefined
    var undefinedVal: undefined;

    console.log(
        str,
        age,
        done,
        todo,
        items,
        todoList,
        users,
        userName,
        nullVal,
        undefinedVal
    );
    console.log(
        typeof str,
        typeof age,
        typeof done,
        typeof todo,
        typeof items,
        typeof todoList,
        typeof users,
        typeof userName,
        typeof nullVal,
        typeof undefinedVal
    );
})();
