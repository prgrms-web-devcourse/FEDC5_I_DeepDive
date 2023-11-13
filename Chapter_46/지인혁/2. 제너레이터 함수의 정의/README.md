# 제너레이터 함수의 정의

제너레이터 함수는 function\* 키워드로 선언한다. 그리고 하나 이상의 yield 표현식을 포함한다.

```javascript
// 제너레이터 함수 선언문
function* getDecFunc() {
    yield 1;
}

// 제너레이터 함수 표현식
const genExpFunc = function* () {
    yield 1;
};

// 제너레이터 메서드

const obj = {
    *genObjMethod() {
        yield 1;
    },
};

// 제너레이터 클래스 메서드
class MyClass {
    *genClsMethod() {
        yield 1;
    }
}
```

에스터리스크(\*)의 위치는 function 키워드와 함수 이름 사이라면 어디든지 상관없지만 일관성을 유지하기 위해 function 키워드 바로 뒤에 붙이는 걸 권장한다.

### 주의할 점

-   제너레이터 함수는 화살표 함수로 정의할 수 없다.
-   제너레이터 함순느 new 연산자와 함께 생성자 함수로 호출할 수 없다.
