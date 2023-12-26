# 생성자 함수

### 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.

동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야하기 때문에 비효율적이다.

만약 수십 개의 객체를 생성해야 한다면 문제가 크다.

### 생성자 함수에 의한 객체 생성 방식의 장점

객체를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```javascript
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}

const c1 = new Circle(5);
const c2 = new Circle(10);
const c3 = new Circle(15);
```

생성자 함수는 이름 그대로 객체를 생성하는 함수다.

형식이 정해져 있는 것이 아니라 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 **new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작**한다.

만약 **new 연산자와 함께 생성자 함수를 호출하지 않으면 일반 함수로 동작**한다.

```javascript
function Circle(radius) {
    this.radius = radius;
}

// 일반 함수로 호출
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환
console.log(circle3); // undefined
// 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가르킨다.
console.log(radius); // 15
```

### 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 인스턴스를 생성하느 ㄴ것과 생성된 인스턴스를 초기화하는 것이다.

생성자 함수가 인스턴스를 생성하는 것은 필수며 생성된 인스턴스를 초기화하는 것은 옵션이다.

```javascript
function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;
}

// 인스턴스 생성
const circle1 = new Circle(5);
```

생성자 내부 코드에서 this에 프로퍼티를 추가하고 필요에 따라 전달된 인수를 프로퍼티의 초기값으로 할당하여 인스턴스를 초기화한다.

하지만 인스턴스를 생성하고 반환하는 코드는 보이지 않는다.

자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다. new 연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은 인스턴스를 생성하고 인스턴스를 초기화한 후 암묵적으로 인스턴스를 반환한다.

1. 인스턴스 생성과 this 바인딩

암묵적으로 빈 객체가 생성되는데 이 빈객체가 바로 생성자 함수가 생성한 인스턴스다.

그리고 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다. 생성자 함수 내부의 this가 생성자 함수가 생성할 인스턴스를 가르키는 이유다.

이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행된다.

2. 인스턴스 초기화

생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.

인스턴스에 프로퍼티나 메서드를 추가하고 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다. 이 처리는 개발자가 기술해야한다.

3. 인스턴스 반환

생성자 함수 내부에서 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.

만약 this가 아닌 다른 객체를 명시적으로 반환하면 return 문에 명시한 객체가 반환된다. 만약 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.

**생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손하기 때문에 생성자 함수 내부에서 return 문은 반드시 생략하자.**

### 내부 메서드 [[Call]]과 [[Construct]]

생성자 함수로 호출한다는 것은 new 연산자와 함께 호출하여 객체를 생성하는 것을 의미한다.

함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문이다.

```javascript
function foo() {}

// 함수도 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

foo.method = function () {
    console.log(this.prop);
};

foo.method(); // 10
```

함수는 객체지만 일반 객체와 차이점이 있다.

**일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.**

함수 객체는 일반객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.

함수가 일반 함수로 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 enw 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다.

```javascript
function foo() {}

// 일반 함수 호출 [[Call]] 호출된다.
foo();

// 생성자 함수 호출 [[Construct]] 호출된다.
new foo();
```

내부 메서드 [[Call]]을 갖는 함수 객체를 callable, 내부 메서드 [[Construct]]를 갖는 함수 객체를 constructor, [[Construct]]를 갖지 않는 함수 객체를 non-constructor라고 부른다.

callable은 호출할 수 있는 객체, 즉 함수를 말하며, constructor는 생성자 함수로서 호출할 수 있는 함수, non-constructor는 객체를 생성자 함수로서 호출할 수 없는 함수를 의미한다.

함수 객체는 반드시 callable이어야하며 모든 함수느 객체는 내부 메서드 [[Call]]을 갖고 있으므로 호출할 수 있다.

하지만 모든 함수 객체가 [[Construct]]를 갖는 것은 아니다. 함수 객체는 constructor는 일 수도 있고 non-constructor일 수도 있다.

결국 함수 객체는 모두 callable이면서 constructor이거나 non-constructor이다.

### constructor와 non-constructor의 구분

자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다.

-   constructor : 함수 선언문, 함수 표현식, 클래스
-   non-constructor : 메서드, 화살표 함수

주의할 점은 ECMAScript 사양에서 메서드로 인정하는 범위가 일반적인 의미의 메서드보다 좁다.

함수를 프로퍼티로 값으로 사용하면 일반적으로 메서드로 통칭한다. 하지만 ECMAScript 사양에서 메서드란 ES6의 메서드 **축약 표현**만을 의미한다.

메서드 경우 함수 정의 방식에 따라 constructor와 non-constructor를 구분한다.

일반 함수, 즉 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor이고 화살표 함수와 메서드 축약 표현으로 정의된 함수는 non-constructor이다.

함수를 일반 함수로 호출하면 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출하면 내부 메서드 [[Construct]]가 호출된다.

non-constructor인 함수 객체는 내부 메서드 [[Constructor]]를 갖지 않는다. 따라서 non-constructor인 함수 객체를 생성자 함수로 호출하면 에러가 발생한다.

주의할 점은 생성자 함수로서 호출될 것을 기대하고 정의하지 않은 일반함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다는 것이다.

### new 연산자

new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다. 함수 객체의 내부 메서드 [[Call]]이 아니라 [[Constructor]]가 호출된다.

new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다.

반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다. [[Constructor]]가 호출되는 것이 아니라 [[Call]]이 호출된다.

생성자 함수는 일반적으로 첫 문자를 대분자로 기술하는 파스칼 케이스로 명명하여 일반 함수와 구별할 수 있도록 하자.

### new.target

생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 파스칼 케이스 컨벤션을 사용한다 하더라도 실수는 언제나 발생할 수 있다.

new.target은 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라 부른다.

> IE는 new.target을 지원하지 않는다.

new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.

**new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.**

함수 내부에서 new.target을 사용하여 new 연산자와 생성자 함수로서 호출했는지 확인하여 그렇지 않은 경우 new 연산자와 함께 재귀 호출을 통해 생성자 함수로서 호출할 수 있다.

```javascript
function Circle(radius) {
    if (!new.target) {
        return new Circle(radius);
    }

    this.radius = radius;
}

// new 없이 호출해도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
```

new.target은 ES6에서 도입된 최신 문법으로 IE에서는 지원하지 않는다. new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있다.

```javascript
function Circle(radius) {
    if (!(this instanceof Circle)) {
        return new Circle(radius);
    }

    this.radius = radius;
}

// new 없이 호출해도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
```

new 연산자와 함께 생성자 함수에 의해 생성된 객체는 프로토타입에 의해 생성자 함수와 연결된다. 이를 이용해 new 연산자와 함께 호출되었는지 확인할 수 있다.

참고로 대부분의 빌트인 생성자 함수는 new 연산자와 함께 호출되었는지 확인한 후 적절한 값을 반환한다.

Object, Function 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함께 호출했을 때와 동일하게 동작한다.

하지만 String, Number, Boolean 생성자 함수는 new 연산자와 함께 호출했을 때 객체를 생성하여 반환하지만 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다. 이를 통해 데이터 타입을 변환하기도 한다.

```javascript
const num = Number('123');
console.log(num, typeof num); // 123 number
```

<hr>
