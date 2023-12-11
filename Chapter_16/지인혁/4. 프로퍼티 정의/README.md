# 프로퍼티 정의

프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의 하는 것을 말한다.

Object.defineProperty 메서드를 통해 프로퍼티의 어트리뷰트를 정의할 수 있다.

```javascript
const person = {};

/*
    값 : "Ungmo"
    변경 가능 여부 : true
    열거 가능 여부 : true
    재정의 가능 여부 : true
*/
Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true,
});
/*
    값 : "Lee"
    변경 가능 여부 : false
    열거 가능 여부 : false
    재정의 가능 여부 : false
*/
Object.defineProperty(person, 'lastName', {
    value: 'Lee',
});
```

<hr>
