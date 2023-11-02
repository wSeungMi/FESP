// ex01-19.ts 복사
(() => {
    enum ClassName {
        JS,
        TS,
        REACT,
    }

    function getSchedule(subject: ClassName): string | undefined {
        if (ClassName.JS == subject) {
            return `JavaScript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
        } else if (ClassName.TS === subject) {
            return `TypeScript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
        }
    }

    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);

    console.log(jsSchedule);
    console.log(tsSchedule);

    console.log(ClassName);
})();
