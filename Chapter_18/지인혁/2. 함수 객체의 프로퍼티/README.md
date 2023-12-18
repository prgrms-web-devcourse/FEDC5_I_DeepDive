# 함수 객체의 프로퍼티

arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티다. 일반 객체에는 없는 함수 객체의 고유의 프로퍼티다.

하지만 **proto**는 접근자 프로퍼티이며 함수 객체 고유의 프로퍼티가 아닌 Object.prototype 객체의 프로퍼티를 상속받은 것이다.

Object.prototype 객체의 프로퍼티는 모든 객체가 상속받아 사용할 수 있다. 즉 Object.prototype 객체의 **proto** 접근자 프로퍼티는 모든 객체가 사용할 수 있다.

### arguments 프로퍼티

arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 간으한 유사 배열 객체이며 함수 내부에서 지역 변수처럼 사용된다., 즉 함수 외부에서는 참조할 수 없다.

자바스킓트는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.

```javascript
function multiply(x, y) {
    console.log(arguments);

    return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));
```

함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다. 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당된다.

인수가 전달되지 않은 매개변수는 undefined로 초기화된 상태를 유지한다. 매개변수의 개수보다 인수를 더 많이 전달한 경우 초과된 인수는 무시된다.

초과된 인수가 그냥 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

arguments 객체는 인수를 프로퍼티 값으로 소유, 프로퍼티 키는 인수의 순서를 나타낸다. arguments객체의 callee 프로퍼티는 호출되어 arguments 객체를 생성한 함수, 즉 함수 자신을 가리키고 length 프로퍼티는 인수의 개수를 가리킨다.

arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.

```javascript
function sum() {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

sum();
sum(1, 2);
sum(1, 2, 3);
```

arguments 객체는 배열이 아닌 유사 배열 객체다. 그래서 배열 메섣르르 사용하면 에러가 발생하는데 Function.prototype.call, apply를 사용해 간접 호출해야 사용할 수 있다.

```javascript
function sum() {
    const array = Array.prototype.slice.call(arguments);

    return array.reduce((pre, cur) => {
        return pre + cur;
    });
}

sum();
sum(1, 2);
sum(1, 2, 3);
```

하지만 많이 번거롭다 그래서 ES6에서는 Rest 파라미터를 도입했다.

```javascript
function sum(...args) {
    return args.reduce((pre, cur) => {
        return pre + cur;
    });
}

sum();
sum(1, 2);
sum(1, 2, 3);
```

### caller 프로퍼티

caller 프로퍼티는 함수 자신을 호출한 함수를 가르킨다.

### length 프로퍼티

length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

arguments 객체의 length 프로퍼티는 인자의 개수, 함수 객체의 length 프로퍼티는 매개변수의 개수를 가르키므로 주의해야한다.

### name 프로퍼티

name 프로퍼티는 함수 이름을 나타낸다.

ES5, ES6에서 동작은 다르게 한다.

익명 함수 표현식 경우 ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖는다.

하지만 ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

함수 일므과 함수 객체를 가르키는 식별자 의미가 다르다는 것을 잊지 말자. 함수를 호출할 때 함수 이름이 안닌 함수 객체를 가리키는 식별자로 호출한다.

### **proto** 접근자 프로퍼티

모든 객체는 [[Prototype]]라는 내부 슬롯을 갖는다. [[Prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.

**proto** 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.

내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여 접근할 수 있다. [[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며 **proto** 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.

### prototype 프로퍼티

prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다. non-constructor에는 prototype 프로퍼티가 없다.

prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가르킨다.

<hr>
