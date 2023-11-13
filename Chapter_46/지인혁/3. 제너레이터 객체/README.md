# 제너레이터 객체

제너레이터 함수를 호출하면 제너레이터 객체를 생성해 반환한다. 제너레이터 함수가 반환한 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.

이는 제너레이터 객체가 iterator 메서드를 상속받는 이터러블이면서 value, done 프로퍼티를 갖는 이터레이터, result 객체를 반환하는 next 메서드를 소유하는 이터레이터다.

제너레이터 객체는 next 메서드를 갖는 이터레이터이지만 이터레이터에 없는 return, throw 메서드를 갖고 있다.

### 제너레이터 객체의 세 개의 메서드

-   next 메서드를 호출하면 제너레이터 함수의 yield 표현식까지 코드 블록을 실행하고 yield 된 값을 value 프로퍼티 값으로, false를 done 프로퍼티 값으로 갖는 result 객체를 반환한다.

-   return 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 result를 객체를 반환한다.

-   throw 메서드를 호추랗면 인수로 전달받은 에러를 발생시키고 undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 result 객체를 반환한다.

```javascript
function* genFunc() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (error) {
        console.error(error);
    }
}

const generator = genFunc();

console.log(generator.next()); // { value: 1, done: false };
console.log(generator.return('END')); // { value: "END", done: true };
console.log(generator.throw('ERROR')); // { value: undefined, done: true };
```
