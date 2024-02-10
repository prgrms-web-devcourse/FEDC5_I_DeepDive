## 함수 호출 방식과 this 바인딩

this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.

### 렉시컬 스코프와 this 바인딩 결정 시기가 다르다.

함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 **함수 객체가 생성되는 시점**에 상위 스코프를 결정한다. 하지만 this 바인딩은 **함수 호출 시점에 결정** 된다.

### 일반 함수 호출

기본적으로 this에는 전역 객체가 바인딩 된다.

```javascript
function foo() {
  console.log(this); // window

  function bar() {
    console.log(this); // window
  }

  bar();
}

foo();
```

전역 함수는 물론이고 중첩 함수를 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 된다.

일반 함수에서는 this는 의미가 없다. 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩 된다.

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    setTimeout(function () {
      console.log(this.value); // 1
    });
  },
};

obj.foo();
```

메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법은 다음과 같다.

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    const that = this;

    setTimeout(function () {
      console.log(that.value); // 100
    });
  },

  foo2() {
    // 화살표 함수 this는 상위 스코프 this를 가르킨다.
    setTimeout(() => {
      console.log(this.value); // 100
    });
  },
};

obj.foo();
```

### 메서드 호출

메서드를 호출할 떄 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩 된다.

메서드를 소유한 객체가 아닌 메서드를 소유한 객체가 아닌 메섣르르 호출한 객체에 바인딩된다는 것이다.

```javascript
const person = {
  name: 'lee',
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩 된다.
    return this.name;
  },
};

console.log(person.getName()); // lee
```

person 객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체다. getName 프로퍼티가 함수 객체의 참조 값을 가리키고 있을 뿐이다.

그래서 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수 있고 일반 변수에 할당하여 일반 함수로 호출할 수 있다.

```javascript
const temp = {
  name: 'kim',
};

temp.getName = person.getName;

console.log(temp.getName()); //kim

const getName = person.getName;

console.log(getName()); // '' window.name과 같다.
```

프로토타입 메서드 내부에서 사용된 this도 일반 메서드와 마찬가지로 해당 메서드를 호출한 객체에 바인딩 된다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('lee');

console.log(me.getName()); // lee

Person.prototype.name = 'kim';

console.log(Person.prototype.getName()); // kim
```

### 생성자 함수 호출

생성자 함수 내부의 this는 미래에 생성할 인스턴스가 바인딩 된다.

```javascript
function Circle(radius) {
  // 생성자 함수가 생성할 인스턴스를 가르킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
```

new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.

### Function.prototype.apply/call/bind 메서드에 의한 간접 호출

apply, call, bind 메서드는 Function.prototype의 메서드다. 즉 이들 메서드는 모든 함수가 상속받아 사용할 수 있다.

```javascript
function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding()); // window
console.log(getThisBinding.apply(thisArg)); // {a:1}
console.log(getThisBinding.call(thisArg)); // {a:1}
```

apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다. 함수를 호출하면 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.

전달하는 방식만 다를 뿐 동일하게 동작한다.

```javascript
function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding()); // window
console.log(getThisBinding.apply(thisArg, [1, 2, 3])); // {a:1}
console.log(getThisBinding.call(thisArg, 1, 2, 3)); // {a:1}
```

apply 메서드 호출할 함수의 인수를 배열로 묶어 전달한다.

call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.

apply와 call 메서드의 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우다.

bind 메서드는 apply와 call 메서드와 달리 함수를 호출하지 않는다. 다만 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.

```javascript
function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding()); // window
console.log(getThisBinding.bind(thisArg)()); // {a:1}
```
