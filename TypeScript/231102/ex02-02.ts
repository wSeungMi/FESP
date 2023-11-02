// ex02-01.js 복사
(() => {
    // interface를 정의해두면, 필수 속성은 모두 생성해야함!
    interface IHighSchool {
        kor: number;
        eng: number;
        sum(): number;
        avg(): number;
    }

    class HighSchool implements IHighSchool {
        /**
         * 1. 멤버변수 타입 정의
         * 2. 생성자 메서드의 매개 변수와 리턴 타입을 정의
         */
        // 멤버변수의 타입 선언 필수!
        // 초기화 값을 꼭 넣을 필요는 없음.
        kor: number = 0;
        eng: number = 0;

        // 생성자함수
        constructor(kor: number, eng: number) {
            this.kor = kor;
            this.eng = eng;
        }

        // 리턴 타입 명시
        sum(): number {
            return this.kor + this.eng;
        }

        avg(): number {
            return Math.round(this.sum() / 2);
        }
    }
    var s1 = new HighSchool(100, 91);
    console.log("평균", s1.avg());

    // 잘못된 사용
    s1.eng = 99;
    console.log("평균", s1.sum() / 2);
})();
