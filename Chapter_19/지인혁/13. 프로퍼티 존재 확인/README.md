# 프로퍼티 존재 확인

### in 연산자

in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.

> key in object

```javascript
const person = {
    name: 'lee',
    address: 'seoul',
};

console.log('name' in person); // true
console.log('age' in person); // false
```

in 연산자는 확인 대상 객체의 프로퍼티뿐만 아니라 확인 대상 객체가 상속받는 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요하다.

그래서 person 객체에는 toString이라는 프로퍼티가 없지만 toString을 in으로 검사하면 결과는 true다.

in 연산자 대신 ES6에서 도입된 Reflect.has 메서드를 사용할 수 있으며 in 연산자와 동일하게 동작한다.

```javascript
const person = {
    name: 'lee',
};

console.log(Reflect.has(person, 'name')); // true
```

### Object.prototype.hasOwnProperty 메서드

Object.prototype.hasOwnProperty 메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.

```javascript
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false
```

Object.prototype.hasOwnProperty는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.

```javascript
console.log(person.hasOwnProperty('toString')); // false
```
