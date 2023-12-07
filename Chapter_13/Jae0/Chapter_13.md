## 스코프 Scope

💡 **유효 범위** 라고도 불리며 변수가 어느 범위까지 참조 되는지를 뜻함

모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정됨

- JS 엔진이 식별자를 검색할 때 사용하는 규칙이라고도 할 수 있음

> **식별자 결정**
>
> 두개의 이름이 동일한 변수가 존재할대 JS엔진이 어떤 변수를 참조해야할 지 결정하는 과정

- **전역 스코프 Global scope**
  - 어디서든 접근이 가능한 Scope
- **지역 스코프 Local scope**
  - 해당 context 내에서만 접근이 가능한 Scope
  - 초기에는 함수에 의해서만 지역 스코프가 생겨났었음
    ⇒ ES6 이후로 `const` `let` 을 이용한 {} 내부 그리고 `if` `for`등을 통해 생성 가능하게됨

```jsx
const A = 10; // global scope
{
  const B = 5; // local scope
  console.log(A, B); // 10 5 둘다 출력가능
}
console.log(A, B); // error 발생
```

- **스코프 체인 Scope Chain -** **지역 과 지역**

```jsx
let a = "A"; // global

function outer() {
  let b = "B"; // local 1

  function inner() {
    let c = "C"; // local 2
  }
}
```

함수가 중첩되어있는 경우를 함수의 중첩 이라고 하고,

내부의 정의된 함수를 중첩 함수, 그 외부에서 중첩함수를 품은 함수를 외부 함수 라고함

- 전역 변수가 있는 global
  - B 와 C 를 참조 하면 error 발생
- outer 함수속 local1
  - A 와 B는 참조 가능하지만 C는 불가능
- inner 함수속 local2
  - 모든 변수 참조 가능

💡 전역에서 선언된 outer 함수의 지역 스코프, outer 지역 스코프에서 선언된 inner 함수 지역스코프

위와 같이 **계층적으로 연결된 것을 스코프 체인 scope chain** 이라고 함

JS엔진은 스코프 체인을 통해 변수를 참조하는 코드로 부터 상위 스코프로 이동하며 변수를 찾게됨.

**var 위험성**

- var 은 함수 수준의 scope
- let const 는 블록 수준의 scope

```jsx
var A = 5;
{
  var A = 10;
  console.log(A); // 10
}
console.log(A); // 10🔥

// var는 호이스팅이 진행되어 상단으로 끌어올려져 변수가 변환되어짐
```

### 블록 레벨 스코프

함수 뿐만 아니라 `if` `for` `while` 등 `{}` 을 이용한 코드 블럭을 통해 생성된 지역 스코프를 의미

### 함수 레벨 스코프

var를 통해 선언되 변수는 오직 함수의 코드 블럭만을 지역 스코프로 인정하는 특성을 의미함
