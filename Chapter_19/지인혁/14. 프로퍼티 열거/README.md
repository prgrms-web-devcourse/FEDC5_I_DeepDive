# 프로퍼티 열거

### for...in 문

객체의 모든 프로퍼티를 순회하며 열거하려면 for...in 문을 사용한다.

```javascript
const person = {
    name: 'lee',
    address: 'seoul',
};

for (const key in person) {
    console.log(key);
}

// name, address
```

for...in은 상속받은 프로토타입의 프로퍼티까지 열거한다. 하지만 toString과 같은 Object.prototype의 프로퍼티가 열겨되지 않는다.

이유는 toString 같은 메서드는 열거할 수 없도록 정의도어 있는 프로퍼티이기 떄문이다.

다시 말하면 Object.prototype.toString 프로퍼티의 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이기 떄문이다.

주의할 점은 for...in 문은 프로퍼티를 열거할 때 순서를 보장하지 않으므로 주의하기 바란다. 하지만 대부분의 모던 브라우저는 순서를 보장하고 숫자인 프로퍼티 키에 대해서는 정렬을 실시한다.
