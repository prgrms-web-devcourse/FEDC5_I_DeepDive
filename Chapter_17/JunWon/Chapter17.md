# 생성자 함수에 의한 객체 생성

객체 리터럴에 의한 객체 생성 방식이 아닌 생성자 함수를 사용하여 객체를 생성하는 방식을 살펴본다.

## Object 생성자 함수

new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다

```JavaScript
// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = "Lee";
person.sayHello = function() {
    console.log("Hi! My name is " + this.name);
}

console.log(person); // {name: "Lee", sayHello: f}
person.sayHello(); // Hi! My name is Lee
```

생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 **인스턴스**라 한다.

자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공

## 생성자 함수

### 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하지만 단 하나의 객체만 생성한다.

따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다

```JavaScript
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter()); // 20
```

객체는 프로퍼티를 통해 객체 고유의 상태를 표현한다. 그리고 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현한다.

따라서 프로퍼티는 객체마다 프로퍼티 값이 다를 수 있지만 메서드는 내용이 동일한 경우가 일반적

### 생성자 함수에 의한 객체 생성 방식의 장점

생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```JavaScript
// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(11); // 반지름이 11인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```

#### this

this는 객체 자신의 프로퍼티나 메서드를 참조하기 위하 자기 참조 변수

this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다

- 일반 함수로서 호출: this가 가리키는 값(this 바인딩)은 전역 객체
- 메서드로서 호출: this가 가리키는 값(this 바인딩)은 메서드를 호출한 객체(마침표 앞의 객체)
- 생성자 함수로서 호출: this가 가리키는 값(this 바인딩)은 생성자 함수가 (미래에) 생성할 인스턴스

생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수

하지만 자바와 같은 클래스 기반 객체 지향 언어의 생성자와는 다르게 그 형식이 정해져 있는 것이 아니라 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 **new 연산자와 함께 호출하면 해당함수는 생성자 함수로 동작한다.**

new 연산자와 함께 생성자 함수를 호출하지 않으면 일반 함수로 동작

```JavaScript
// new 연산자와 함께 호출하지 않으면 생성자 함수로 동직하지 않는다
// 즉, 일반 함수로서 호출
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환
console.log(circle3); // undefind

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15
```

### 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 **인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)**하는 것이다

```JavaScript
// 생성자 함수
function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
```

this에 프로퍼티를 추가하고 필요에 따라 전달된 인수를 프로퍼티의 초기값으로서 할당하여 인스턴스를 초기화한다. 하지만 인스턴스를 생성하고 반환하는 코드는 보이지 않는다

자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.

다음과 같은 과정을 거쳐 암묵적으로 인스턴스를 생성하고 인스턴스를 초기화한 후 암묵적으로 인스턴스를 반환한다.

1. 인스턴스 생성과 this 바인딩
   암묵적으로 빈 객체가 생성

   이 빈 객체가 바로 생성자 함수가 생성한 인스턴스

2. 인스턴스 초기화
3. 인스턴스 반환

### 내부 메서드 [[Call]]과 [[Construct]]

함수 선언문 또는 함수 표현식으로 정의한 함수는 일반적인 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.

생성자 함수로서 호출한다는 것은 new 연산자와 함께 호출하여 객체를 생성하는 것을 의미

함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문

```JavaScript
// 함수는 객체다.
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.props = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.methods = function() {
    console.log(this.prop);
};

foo.method(); // 10
```

함수는 객체이지만 일반 객체와는 다르다. **일반 객체는 호출할 수 없지만 함수는 호출할 수 있다**

함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론, 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 메서드를 추가로 가지고 있다.

함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다

```JavaScript
function foo() {

    // 일반적인 함수로서 호출: [[Call]]이 호출된다.
    foo();

    // 생성자 함수로서 호출: [[Construct]]가 호출된다.
    new foo();
}
```

callable

- 내부 메서드 [[Call]]을 갖는 함수 객체
- 호출할 수 있는 객체, 함수

constructor

- 내부 메서드 [[Contruct]]를 갖는 함수 객체
- 생성자 함수로서 호출할 수 있는 함수

non-constructor

- [[Construct]]를 갖지 않는 함수 객체
- 생성자 함수로서 호출할 수 없는 함수

### constructor와 non-constructor의 구분

### new 연산자

일반 함수와 생성자 함수에 특별한 형식 차이는 없다. new 연산자와 함께 함수를 호출하면 생성자 함수로 동작

함수 객체의 내부 메서드 [[Call]]이 호출되는 것이 아니라 [[Construct]]가 호출

단, new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다

### new.target

생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서 new.target을 지원한다

new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되면 메타 프로퍼티라고 부른다.

함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.

**new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefind이다**

따라서 함수 내부에서 new.target을 사용하여 new 연산자와 생성자 함수로서 호출했는지 확인하여 그렇지 않은 경우 new 연산자와 함께 재귀 호출을 통해 생성자 함수로서 호출할 수 있다
