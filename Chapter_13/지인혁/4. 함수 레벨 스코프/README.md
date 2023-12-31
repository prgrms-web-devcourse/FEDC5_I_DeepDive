# 함수 레벨 스코프

함수 몸체만이 아니라 모든 코드 블록(if, for, while, try/catch 등)이 지역 스코프를 만든다. 이렇나 특성을 **블록 레벨 스코프**라 한다. 하지만 var 선언 변수는 오로지 함수의 코드블록만을 지역 스코프로 인정한다. 이러한 특성을 **함수 레벨 스코프**라 한다.

```javascript
var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

console.log(i); // 5
```

i 변수가 for문의 코드 블록 내에서만 유효한 지역 변수다. i 변수는 for문 외부에서 사용할 일이 없기 떄문이다.

하지만 var 키워드로 선언된 변수는 블록 레벨 스코프를 인정하지 않아 i 변수는 전역 변수가 된다. 따라서 전역 변수 i는 중복 선언이 되고 의도치 않게 재할당 된다.

var 키워드로 선언된 변수는 오로지 ㅎ마수의 코드 블록만을 지역 스코프로 인정하지만 ES6에 let, const 키워드는 블록 레벨 스코프를 지원한다.

<hr>
