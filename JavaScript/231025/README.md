# [DAY1] JavaScript 정리 2

## 01-20. Template literals

## 01-21. 구조 분해 할당(Destructuring Assignment)

**`정의`** 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있는 표현식

-   배열 구조 분해
-   객체 구조 분해

## 01-22. 기본값 매개변수(Default Parameters)

-   함수 호출 시 인자값을 전달하지 않으면, `undefined`가 전달된다.

## 01-23. 나머지 매개변수(Rest Parameters)

-   정해지지 않은 수의 매개변수를 배열로 전달받는다.
-   함수의 마지막 매개변수 앞에 `...`을 붙인다.

## 01-24. 전개 연산자(Spread Operator)

-   배열이나 객체의 요소, 속성을 분해해서 배열, 객체, 함수에 전달
-   배열, 객체를 손쉽게 복사
-   하나의 배열, 객체를 여러 개의 요소, 속성으로 분해해서 전달한다.
-   중복되는 속성의 경우 뒤에 선언한 값이 앞의 값을 덮어씌운다.

## 2.1 일급객체

-   변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
-   함수의 인자로 전달될 수 있다.
-   함수의 결과 값으로 반환될 수 있다.
-   리터럴로 생성될 수 있다.
-   동적으로 생성된 프로퍼티를 가질 수 있다.
-   자바스크립트의 함수는 일급 객체이다.
    -   콜백 함수
    -   고차 함수
    -   클로저

## 2.2 함수 생성

-   선언문 (function 키워드)
-   표현식
    -   익명함수
    -   기명함수
-   Function 생성자 함수
-   Arrow Function (화살표 함수)
-   함수 호이스팅

## 2.3 함수 호출과 this

-   함수로 호출
-   메서드로 호출
-   생성자 함수