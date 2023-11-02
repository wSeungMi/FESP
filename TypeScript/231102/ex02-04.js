// ex02-01.js 복사
(() => {
    class HighSchool {
        // private하게 만들어주는 js 기능 (ES2019에서 추가)
        // 일반 객체에서는 사용 X, 생성자 함수에서는 O
        #kor = 0;
        #eng = 0;

        // 생성자함수
        constructor(kor, eng) {
            this.#kor = kor;
            this.#eng = eng;
        }

        #sum() {
            return this.kor + this.eng;
        }

        avg() {
            return Math.round(this.#sum() / 2);
        }
    }
    var s1 = new HighSchool(100, 91);
    console.log("평균", s1.avg());

    // 잘못된 사용
    s1.eng = 99;
    s1["#eng"] = 99;
    console.log(s1);

    console.log("평균", s1.sum() / 2);
})();
