// ex01-21.ts 복사
(() => {
    // enum 객체 생성 X -> 호출 X
    // 컴파일 타임에 enum 텍스트로 대체 됨
    const enum ClassName {
        JS = "JavaScript",
        TS = "TypeScript",
        REACT = "React",
    }

    function getSchedule(subject: ClassName): string | undefined {
        if (ClassName.JS == subject) {
            return `${ClassName.JS} 수업은 4일 교육 + 2일 프로젝트 입니다.`;
        } else if (ClassName.TS === subject) {
            return `${ClassName.TS} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
        }
    }

    const jsSchedule = getSchedule(ClassName.JS);
    const tsSchedule = getSchedule(ClassName.TS);

    console.log(jsSchedule);
    console.log(tsSchedule);

    // console.log(ClassName);
})();
