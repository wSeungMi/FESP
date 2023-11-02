// ex02-02.ts 복사
(() => {
    // interface를 정의해두면, 필수 속성은 모두 생성해야함!
    interface IHighSchool {
        avg(): number;
    }

    class HighSchool implements IHighSchool {
        private kor: number;
        private eng: number;

        // 생성자함수
        constructor(kor: number, eng: number) {
            this.kor = kor;
            this.eng = eng;
        }

        // 리턴 타입 명시
        private sum(): number {
            return this.kor + this.eng;
        }

        avg(): number {
            return Math.round(this.sum() / 2);
        }
    }
    var s1 = new HighSchool(100, 91);
    console.log("평균", s1.avg());

    // 잘못된 사용
    // s1.eng = 99;
    // console.log("평균", s1.sum() / 2);
})();
