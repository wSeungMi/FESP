(() => {
    // 자스에서는 값 return 안한다 => undefined
    function getSchedule(subject: string): string | void {
        if ("JavaScript" == subject) {
            return `JavaScript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
        } else if ("Typescript" == subject) {
            // 넘겨준 매개변수의 대소문자를 구분해서 안맞으면 조건일치 X
            return `TypeScript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
        }
    }

    const jsSchedule = getSchedule("JavaScript");
    const tsSchedule = getSchedule("TypeScript");

    console.log(jsSchedule);
    console.log(tsSchedule);
})();
