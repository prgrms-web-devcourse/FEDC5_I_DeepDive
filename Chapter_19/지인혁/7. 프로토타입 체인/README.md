# 프로토타입 체인

생성자 함수에 의해 생성된 객체느느 Object.prototype의 메서드 hasOwnProperty를 호출할 수 있다.

이것은 생성자 함수의 prototype뿐만 아니라 Object.prototype도 상속받았다는 것을 의미한다.

프로토타입의 프로토타입은 언제나 Object.prototype이다.

자바스크립트는 **객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적을 검색**하는데 이를 프로토타입 체인이라 한다.

프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. 따라서 모든 객체는 Object.prototype을 상속받는다.

Object.prototype을 프로토타입 체인의 종접이라 한다. Object.prototype의 프로토타입, 즉 [[Prototype]] 내부 슬롯의 값은 null이다.

프로퍼티가 아닌 식별자는 스코프 체인에서 검색하며 스코프 체인은 식별자 검색을 위한 메커니즘, 프로토타입은 자바스킓트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.

```javascript
me.hasOwnProperty('name');
```

위 예제 경우 먼저 스코프 체인에서 me 식별자를 검색한다. me 식별자는 전역에서 선언되었으므로 전역 스코프에서 검색된다.

다음으로 me 객체의 프로토타입 체인에서 hasOwnProperty 메서드를 검색한다.

**스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는데 사용된다.**
