# 전역 변수의 사용을 억제하는 방법

전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야한다.

변수의 스코프는 좁을수록 좋으며 전역 변수를 절대 사용하지 말라는 의미가 아니다. 무분별한 전역 변수의 남발은 억제해야 한다는 것이다.

### 즉시 실행함수

함수 정의와 동시에 호출되는 즉시 시행 함수는 단 한 번 호출된다. 모든 코드를 즉시실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.

```javascript
(function () {
    var foo = 10;
})();

console.log(foo); // foo is not defined
```

### 네임스페이스 객체

전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.

```javascript
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'lee';

console.log(MYAPP.name); // lee
```

충돌을 방지하는 효과는 있으나 네이스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용해 보이지는 않는다.

### 모듈 패턴

모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.

클로저 기반으로 동작하며 모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다.

모듈 패턴은 전역 네임스페이스의 오염을 막는 기능은 물론 한정적이기는 하지만 정보 은닉을 구현하기 위해 사용한다.

### ES6 모듈

ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다. 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.

ES6 모듈은 IE를 포함한 구형 브라우저에서는 동작하지 않으며, 아직까지는 브라우저가 지원하는 ES6 모듈 기능보다는 Webpack 등의 모듈 번들러를 사용하는 것이 일반적이다.

<hr>
