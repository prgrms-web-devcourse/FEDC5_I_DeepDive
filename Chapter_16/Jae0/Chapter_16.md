> **내부 슬롯 & 내부 메서드**
>
> JS 엔진의 내부 로직이며, `내부Property`와 `내부Method` 는 원칙적으로 직접적으로 접근
>
> 호출 할 수 있는 방법을 제공하지 않음.
>
> But! 일부 메서드나 속성에는 간접적으로 접근 할 수 있도록 수단을 제공함
>
> ECMAScript에 등장하는 `[[ … ]]` 대괄호로 감싼 이름들이 전부 내부 슬록과 내부 메서드

### 프로퍼티 어트리뷰트 & 프로퍼티 디스크립터 객체

💡 JS엔진은 Property를 생성할 때 해당 property의 상태를 나타내는 property 어트리뷰트를 기본 값으로 자동 정의함
( 프로퍼티 값, 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부 등등)

`Object.getOwnPropertyDescriptor(객체참조, key)`

올바른 인수를 전달하게되면 `Propert Descriptor` 객체를 반환하게됨

⇒ but 존재하지 않는 프로퍼티, 상속받은 property의 디스크립터를 요구하면 `undefined`가 반환됨

`Object.getOwnPropertyDescriptors(객체참조)`

모든 property의 프로퍼티 어트리뷰트 정보를 제공함

```tsx
const person = {
	name : "LEE"
}

porson.age = 20;

console.log(Object.getOwnPropertyDescriptor(person, name)
// {value : "LEE", writable : true, enumerble : true, configurable : true}

console.log(Object.getOwnPropertyDescriptors(person))
// {
// 	 name : {value : "LEE", writable : true, enumerble : true, configurable : true},
// 	 age : {value : 20, writable : true, enumerble : true, configurable : true}
// }
```

### 데이터 프로퍼티 & 접근자 프로퍼티

💡 데이터 프로퍼티
⇒ key와 value로 구성된 일반적 프로퍼티

접근자 프로퍼티
⇒ 자체적으로 값을 갖지 않고, 다른 데이터의 값을 읽거나 저장할 대 호출되는 접근자 함수로 구성

**데이터 프로퍼티**

- 내부 4개의 프로퍼티 어트리뷰트를 가지고 있음

  - `[[Value]]` ⇒ 프로퍼티에 접근하면 반환되어지는 값을 의미, 재할당 되면 해당 value가 변경됨

  - `[[Writable]]` ⇒ 프로퍼티 값의 변경 가능 여부를 `boolean`으로 표현, false의 경우 읽기 전용

  - `[[Enumerble]]` ⇒ 프로퍼티의 열거 가능 여부를 `boolean`으로 표현,

    ⇒ false라면 for…in, Object.keys 등 사용 불가

  - `[[Configurable]]` ⇒ 프로퍼티의 재정의 가능 여부를 `boolean` 으로 표현,
    ⇒ false인 경우 삭제, 값 변경이 금지되어짐
    ⇒ true 인 경우 Value의 변경외에 Writable을 false로 변경하는것도 가능함

**접근자 프로퍼티**

- 내부 4개의 프로퍼티 어트리뷰트를 가지고 있음

  - `[[Get]]` ⇒ 데이터 프로퍼티의 값을 읽을 때 사용됨

  - `[[Set]]` ⇒ 데이터 프로퍼티의 값을 저장 할때 사용됨

  - `[[Enumerble]]` ⇒ 데이터 프로퍼티와 동일함

  - `[[Configurable]]` ⇒ 데이터 프로퍼티와 동일함

### 프로퍼티 정의

💡 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의, 혹은 기존 프로퍼티의 프로퍼티 어트리뷰트를 새롭게 재 정의하는 것을 의미함

`Object.defineProperty(객체참조, key, 프로퍼티디스크립터객체)`

한번에 하나의 프로퍼티만을 정의할 때 사용되어짐

- 만약 디스크립터 객체에 프로퍼티를 일부 생략해 제공하면 자체의 기본값으로 알아서 정의됨

`Object.defineProperties(객체참조, )`

- 여러 프로퍼티를 한번에 정의 하고자할때 사용됨

```tsx
Object.defineProperties(person, {
  firstName: {
    value: "Lee",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "fdsfds",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
```

### 객체 변경 방지

💡 객체 확장 금지, 객체 밀봉, 객체 동결 이렇게 3가자의 객체 변경을 방지하는 방법이 존재함

- 객체 확장 금지
  Object.preventExtensions 메서드를 통해 해당 객체에 새로운 프로퍼티의 추가를 금지하는 방법
  ⇒ 추가는 금지되지만 삭제는 가능함
- 객체 밀봉
  Object.seal 메서드를 이용해 밀봉하며, 프로퍼티의 추가, 삭제, 재정의가 금지됨
  ⇒ 읽기와 쓰기만 가능
- 객체 동결
  Object.freeze 메서드를 이용해 객체를 동결함
  ⇒ 모든것이 제한되어지고 그저 읽기만 가능하게 만듬
