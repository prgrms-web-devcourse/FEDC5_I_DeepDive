💡 객체지향에서의 객체는 **현실에 있는 것을 추상화** 한 것
현실의 것을 코드로 옮기는것이 아님

**추상이란 ?**

사물이 지니고 있는 여러 측면 중 **특정한 부분만**을 간추려 보는것 ⇒ 그외의 필요없는 부분은 버린다

**객체란 ?**

속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조

## 객체지향 프로그래밍

💡 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임
즉!
**객체 위주로 설계하고 프로그래밍 하는 패러다임**

객체 지향 언어 에서의 추상화 최소 단위는 **객체**

**객체지향 프로그래밍의 상태와 동작**

- 객체의 **상태 state ( Property 프로퍼티 )** 를 나타내는 데이터와

  상태 데이터를 조작할 수 있는 **동작 ( Method 메소드)** 을 하나의 논리적인 단위로 묶음

  ```jsx
  // 원을 표현한 개념의 객체
  const circle = {
    radius: 10, // 반지름을 나타내는 상태 state

    getDiameter() {
      // 반지름을 조작해 지름을 구하는 동작
      return 2 * this.radius;
    },
  };
  ```

  즉 객체지향 프로그래밍은 ⇒

  🔥 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 **복합적인 자료구조**

- 객체는 고유의 기능을 갖는 독립적 부품으로 볼수도 있지만 **다른 객체와 관계성**을 가질 수 있음
  - 다른 객체의 상태 / 동작을 상속 받을 수 있음

## 프로토타입 객체

💡 객체지향 프로그래밍의 근간을 이루는 **객체 간 상속을 구현하기 위해** 사용되어짐

- JavaScript 에서는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거할 수 있음

JS 에서의 모든 객체는 **[ [ Prototype ] ] 이라는 내부 슬롯**을 가짐

- 만약 prototype이 없다면 null 이 할당되어짐
- 객체가 **생성되어지는 방식에 따라** 프로토타입이 결정되고 내부슬롯에 저장됨
- 일반적인 객체의 내부슬롯은 ‘ Object.prototype ‘ 을 가르킴

**사용 이유 예시**

```jsx
function Test(value) {
  this.value = value;
  this.double = () => {
    return this.value * 2;
  };
}

const test1 = new Test(5);
const test2 = new Test(10);

console.log(test1.double === test2.double); // false
console.log(test1); // Test { value: 5, double: [Function (anonymous)] }
console.log(test2); // Test { value: 10, double: [Function (anonymous)] }
```

생성자 함수를 이용해 2개의 값을 만든 상황이다

console.log 출력시

두개다 각자의 value 라는 상태는 인스턴스 마다 다른 상황이 많고 **각자의 객체에 표현**되는것이 맞음

하지만 Double 이라는 함수는 모든 인스턴스마다 가지고 있으며 사용할 필요가 없음

⇒ **메모리 낭비가 심함**

```jsx
function Test(value) {
  this.value = value;
  Test.prototype.double = function () {
    return this.value * 2;
  };
}
const test1 = new Test(10);
const test2 = new Test(5);

// 이전과 다르게 각자의 객체가 하나의 Method 를 사용하기 때문에 true
console.log(test1.double === test2.double); // ture
console.log(test1); // Test { value: 10 }
console.log(test1.double()); // 20
console.log(test2.double()); // 10
```

**JavaScript 에서 prototype 으로 상속을 구현한다면?**

위와 같이 구현시 상위 객체 역할을 하는 Test.prototype의 **모든 메소드 와 프로퍼티를 상속받음**

**\_ _ proto _ \_**

접근자 프로퍼티를 통해 객체의 **프로토타입 / 내부슬롯을 접근** 할 수 있음

크롬에 객체 생성후 해당 객체 출력시 확인 가능

**객체가 직접 소유하고 있지 않고** ‘ object.prototype ’ 의 프로퍼티임

**constructor : 제작자 / 건설하다**

prototype 프로퍼티로 **자신을 참조하고 있는** 생성자 함수를 가르킴

Person 생성자 함수로 me 객체를 생성한다면

me 객체는 프로토타입의 constructor 프로퍼티를 통해 상성자 함수와연결됨

💡 프로토타입과 생성자 함수는 단독으로 존재 할 수 없고 **언제나 쌍** 으로 존재함

또! 프로토타입은 **생성자 함수가 생성되는 시점**에 더불어 생성됨

그리고 **빌트인 생성자 함수**들 또한
생성자 함수 / 리터럴 표기법으로 객체가 생성되어지면
생성된 객체의 **내부슬롯에 프로토타입이 할당**되어짐

**프로토타입 체인**

JavaScript는 객체의 프로퍼티에 접근 하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면?

내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색

이것이 프로토타입 체인

- 상속와 프로퍼티 검색을 위한 메커니즘
  - 스코프 체인은 식별자 검색을 위한 메커니즘
  - 따라서 두개의 두개의 체인은 서로 **협력하여 식별자와 프로퍼티를 검색**함

💡 따라서 프로토타입 체인의 최상위 위치는 언제나 object.prototype 이고,
**모든 객체는 object.prototpye 을 상속** 받는다 이것을 **프로토타입 체인의 종점** 이라함

## 오버라이딩 overriding / 오버로딩 overloading / 프로퍼티 섀도잉

💡 오버라이딩?
상위 클래스가 가지고 있는 메서드를 하위 클래스가 재 정의하여 사용한 방식

```jsx
function Test(value) {
  this.value = value;
  this.tsetName = value + "name";
  Test.prototype.double = () => this.value * 4;
}

const test1 = new Test(10);

test1.double = function () {
  return this.value * 2;
};

console.log(test1.double()); // 20

delete test1.double;

console.log(test1.double()); //40
```

위에서와 같이 생성자 함수 내부의 double 프로토타입 메소드가 존재하지만

인스턴스를 추가한 후 같은 인스턴스 메소드를 추가한 상황임

- 이때 인스턴스 메소드가 생성자 프로토타입 메소드를 **덮어쓰는것이 아님**
- 오버라이딩 하게되고 프로토타입 **메소드는 가려지게됨**
- 이런 프로퍼티가 가려지는 현상을 **프로퍼티 섀도잉 property shadowing** 이라함

🔥 위의 예시와 같이 delete 사용시 **다시 프로토타입 메소드를 사용**하게됨

## instanceof 연산자

이항 연산자로 우변의 생성자 함수의 prototype에 바인딩된 객체가

좌변의 객체의 prototype 체인 상에 존재한다면 true 아니라면 false를 반환함

```jsx
function Test(value) {
  this.value = value;
  this.tsetName = value + "name";
  Test.prototype.double = () => this.value * 4;
}

const test1 = new Test(10);
const test2 = new Object();

console.log(test1 instanceof Test); // true
console.log(test1 instanceof Object); // true
console.log(test2 instanceof Test); // false
console.log(test1 instanceof Object); // tru
```

**오해**

- 객체 지향은 **패러다임일 뿐** 언어와는 무관

  - 단지 언어는 이런 지향을 좀 더 편하게 구현하도록 도와줌
  - 클래스가 없는 JS / Go / C 언어로 객체지향 프로그래밍은 가능!
  - JS의 경우 Prototype을 통해 객체 지향을 표현

- **무조건** 객체지향이 절차 지향보다 좋은것은 아님
