# 직접 상속

### Object.create에 의한 직접 상속

Object.create를 통해 프로토타입을 직접 생성할 수 있다.

Object.create 메서드의 첫 번쨰 매개변수에는 생성할 객체의 프로토타입으로 지정할 객체를 전달한다. 두 번째 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달한다.

```javascript
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true

obj = Object.create(object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### 객체 리터럴 내부에서 ** proto**에 의한 직접 상속

Object.create 메서드에 의한 직접 상속은 두 번째 인자로 프로퍼티를 정의하는 것은 번거롭다.

ES6에서는 객체 리터럴 내부에서 ** proto**접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다.

```javascript
const myProto = { x: 10 };

const obj = {
    y: 20,
    __ proto__: myProto,
};
```
