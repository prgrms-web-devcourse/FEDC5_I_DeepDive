# Object 생성자 함수

new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

```javascript
const person = new Object();

person.name = 'Lee';
person.sayHello = function () {
    console.log(this.name);
};
```

생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수다. 생성자 함수에 의해 생성된 객체를 **인스턴스**라 한다.

```javascript
const str = new String('Lee');
const num = new Number(123);
const bool = new Boolean(true);
const fun = new Function('x', 'return x * x');
const arr = new Array(1, 2, 3);
const data = new Data();
```

객체인 경우에는 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다.

<hr>
