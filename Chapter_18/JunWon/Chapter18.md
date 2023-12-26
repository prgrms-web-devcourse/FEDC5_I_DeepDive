# 함수와 일급 객체

## 일급 객체

1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다
2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다
3. 함수의 매개변수에 전달할 수 있다
4. 함수의 반환값으로 사용할 수 있다

자바스크립트의 함수는 위의 조건을 모두 만족하므로 **일급 객체**이다

```JavaScript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다

const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

// 2. 함수는 객체에 저장할 수 있다
const predicates = { increase, decrease};

// 3. 함수의 매개변수에 전달할 수 있다
// 4. 함수의 반환값으로 사용할 수 있다
function makeCounter(predicate) {
    let num = 0;

    return function() {
        num = predicate(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2
```

함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미. 객체는 값이므로 함수는 값과 동일하게 취급할 수 있다

따라서 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다.

## 함수 객체의 프로퍼티

console.dir 메서드를 사용하여 함수 객체의 내부를 들여다보자
![image](https://velog.velcdn.com/images/april_5/post/4a44b74b-e77a-40e4-b97a-951620ca0069/image.png)

arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티다. 이들 프로퍼티는 일반 객체에는 없는 함수 객체 고유의 프로퍼티

### arguments 프로퍼티

함수 객체의 arguments 프로퍼티 값은 arguments 객체다. arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체, 함수 내부에서 지역 변수처럼 사용된다. 함수 외부에서 참조 X

자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 따라서 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.

arguments 객체는 매개변수 개수를 확정할 수 없는 **가변 인자 함수**를 구현할 때 유용하다

```JavaScript
function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다
    for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

arguments 객체는 배열 형태로 인자 정보를 담고 있지만 실제 배열이 아닌 유사 배열 객체

유사 배열 객체 : length 프로퍼티를 가진 객체로 for문으로 순회할 수 있는 객체

### caller 프로퍼티

caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티다. 이후 표준화될 예정도 없는 프로퍼티이므로 사용하지 말고 참고로만 알아두기

```JavaScript
function foo(func) {
    return func();
}

function bar() {
    return 'caller : ' + bar.caller;
}

// 브라우저에서 실행한 결과
console.log(foo(bar)); // caller : function foo(func) { ... }
console.log(bar()); // caller : null
```

### length 프로퍼티

함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있다

arguments 객체의 length 프로퍼티는 인자의 개수

함수 객체의 length 프로퍼티는 매개변수의 개수

### name 프로퍼티

함수 객체의 name 프로퍼티는 함수 이름을 나타낸다

name 프로퍼티는 ES5와 ES6에서 동작을 달리한다.

ES5에서는 익명 함수 표현식에서 name 프로퍼티는 빈 문자열을 값으로 갖는다. 하지만 ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

### **proto** 프로퍼티

모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. [[Protoype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.

### prototype 프로퍼티

prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.

일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다

```JavaScript
// 함수 객체는 prototype 프로퍼티를 소유한다
(function () {}).hasOwnProperty('prototype'); // -> true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다
({}).hasOwnProperty('prototype'); // -> false
```

prototype 프로퍼티는 함수가 객체를 생성하는 생성자로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.
