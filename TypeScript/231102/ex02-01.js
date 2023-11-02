(() => {
    class HighSchool {
        // 자스에서는 굳이 안해줘도 되는 멤버변수 타입 정의
        kor = 0;
        eng = 0;

        // 생성자함수
        constructor(kor, eng) {
            this.kor = kor;
            this.eng = eng;
        }

        sum() {
            return this.kor + this.eng;
        }

        avg() {
            // 평균은 소수 첫째 자리에서 반올림
            // return ((this.kor + this.eng) / 2).toFixed(0);
            return Math.round(this.sum() / 2);
        }
    }
    var s1 = new HighSchool(100, 91);
    console.log("평균", s1.avg());

    // 잘못된 사용
    // 반올림 처리를 해놨는데 이렇게 직접 계산해버리면 의도한 값 산출이 안됨
    s1.eng = 99;
    console.log("평균", s1.sum() / 2);
})();
