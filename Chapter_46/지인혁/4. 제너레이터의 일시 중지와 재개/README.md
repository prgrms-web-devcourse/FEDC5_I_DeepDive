# 제너레이터의 일시 중지와 재개

제너레이터는 yield 키워드와 next 메서드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개할 수 있다.

제너레이터 객체의 next 메서드를 호출하면 제너레이터 함수의 코드 블록을 실행한다. 단. 일반 함수처럼 한 번에 코드 블록의 모든 코드를 일괄 실행하는 것이 아니라 yield 표현식까지만 실행한다.

yield 키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yield 키워드 뒤에 오는 표현식의 평가 결과를 제너레이터 함수 호출자에게 반환한다.

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
console.log(generator.next()); // { value: 2, done: false };
console.log(generator.next()); // { value: 3, done: false };
console.log(generator.next()); // { value: undefined, done: true };
```

제너레이터 객체의 next 메서드를 호출하면 yield 표현식까지 실행되고 일시 중되된다. 그리고 함수의 제어권이 다시 호출자로 양도된다.

이후 필요한 시점에 호출자가 다시 next 메서드를 호출하면 일시 중지된 코드부터 실행을 재개하기 시작하여 다음 yield 표현식 까지 실행되고 또 다시 일시 중지 된다.

next 메서드가 반환한 이터레이터 result 객체는 value에 yield 표현식에서 뒤에 값이 할당되고 done에는 제너레이터 함수의 끝까지 실행된 여부 값 불리언이 할당된다.

next 메서드를 통해 일시 중지를 반복하다보면 제너레이터 함수가 끝까지 실행됐을 때 next 메서드가 반환하는 결과 value에는 제너레이터 함수 자체의 반환 값이 할당되고 done에는 끝까지 실행된 여부 true를 할당된다.

### next 메서드에 인수 전달

제너레이터 객체 next 메서드에서 인수를 전달할 수 있다. 제너레이터 객체의 next 메서드에 전달한 인수는 제너레이터 함수의 yield 표현식을 할당받는 변수에 할당된다.

**yield 표현식을 할당 받는 변수에 yiled 표현식의 평가 결과가 할당되지 않는 것에 주의하자.**

```javascript
function* genFunc() {
    // 첫 next 메서드 호출시 실행되는 범위
    const x = yield 1;
    // 두 번째 next 메서드 호출시 실행되는 범위
    const y = yield x + 10;

    return x + y;
}

const generator = genFunc();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next(10)); // { value: 20, done: false }
console.log(generator.next(20)); // { value: 30, done: true }
```

첫 next 메서드 호출 시 인수는 전달하지 않는다. 인수를 전달해도 무시된다.

호출 범위는 첫 yield 영역까지만 실행되고 x 변수에는 아직 아무 값도 할당 되지 않는 상태다. 이때 next 함수의 반환 값은 1이 된다.

두번 째 next 메서드 호출 시 두 번째 yield 영역까지 실행되고 이 때 변수 x에 인수로 전달한 10이 할당되고 반환 값은 x + 10 인 20이 된다.

세번 째 next 메서드 호출 시에는 yield가 없어 함수 끝까지 실행되고 변수 y에 인수로 전달한 20이 할당된다. 그리고 제너레이터 함수가 끝나서 함수 자체의 반환 값인 x + y = 30이 반환되고 done 값도 true로 반환 된다.

> 이러한 제너레이터의 특성을 활용하여 비동기 처리를 동기 처리처럼 구현할 수 있다.
