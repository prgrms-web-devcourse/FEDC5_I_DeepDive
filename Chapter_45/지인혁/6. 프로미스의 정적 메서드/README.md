# 프로미스의 정적 메서드

프로미스 함수도 객체이므로 메서드를 가질 수 있다. 프로미스는 5가지 정적 메서드를 제공한다.

### Promise.resolve/Promise.reject

Promise.resolve/Promise.reject는 이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.

```javascript
const resolvedPromise = Promise.resolve([1, 2, 3]);
const rejectedPromise = Promise.reject(new Error('Error'));

resolvedPromise.then(console.log); // [1, 2, 3]
rejectedPromise.catch(console.log); // Error: Error
```

위 예제는 아래와 동일하게 동작 한다.

```javascript
const resolvedPromise = new Promise((resolve) => resolve([1, 2, 3]));
const rejectedPromise = new Promise((_, reject) => reject(new Error('Error')));

resolvedPromise.then(console.log); // [1, 2, 3]
rejectedPromise.catch(console.log); // Error: Error
```

### Promise.all

promise.all 메서드는 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.

만약 **여러 개의 비동기 처리가 서로 의존하지 않고 개별적으로 수행된다면 비동기 처리를 순차적으로 수행할 필요가 없고 모두 병렬 처리**로 사용하면 된다.

```javascript
const p1 = () => new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const p2 = () => new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const p3 = () => new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Proimse.all([p1(), p2(), p3()])
    .then(console.log) // [1, 2, 3] => 3초 소요
    .catch(console.error);
```

만약 병렬 처리 하지 않고 메서드 체니잉으로 순차적으로 처리했을 경우 6초의 시간이 걸렸을 것이다. 하지만 병렬 처리를 통해 총 3초의 시간이 걸리고 단축되게 된다.

Promise.all 메서드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달 받는다. 그리고 전달받은 모든 프로미스가 모두 성공해야지만 then 메서드에 결과를 배열에 저장해 새로운 프로미스를 반환한다.

첫 번째 프로미스가 가장 나중에 성공 상태가 되어도 첫 번째 프로미스가 resolve한 처리 결과부터 차례대로 배열에 저장해 그 배열을 resolve하는 새로운 프로미스를 반환하게 된다. 이 말은 즉 **처리 순서가 보장**된다는 말이다.

또한 전달받은 배열의 프로미스가 하나라도 실패 rejected 상태가 되면 나머지 프로미스를 성공 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료되고 catch문이 실행된다.

### Promise.race

Promise.race 메서드는 Promise.all 메서드와 동일하게 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. Promise.all 메서드는 Promise.all 메서드처럼 **모든 프로미스가 fulfilled 성공 상태가 되는 것을 기다리는 것이 아니라 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 reslove하는 새로운 프로미스를 반환**한다.

```javascript
const p1 = () => new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const p2 = () => new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const p3 = () => new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Proimse.race([p1(), p2(), p3()])
    .then(console.log) // 3
    .catch(console.error);
```

위 예제에서 p3의 Promise가 1초 후에 가장 빨리 처리되고 race의 then에서는 p3의 결과만 resolve하고 나머지 p1, p2는 기다리지 않는다.

또한 Promise.all와 같이 전달 받은 Promise가 하나라도 rejected 실패 상태가 되면 즉시 에러를 reject하는 새로운 프로미스를 반환한다.

### Promise.allSettled

Promise.allSettled 메서드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 받는다. 그리고 전달 받은 프로미스 모두 settled 상태(fulfilled 또는 rejected 상태)가 되면 처리 결과를 배열로 반환한다.

```javascript
const p1 = () => new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const p2 = () => new Promise((_, reject) => setTimeout(() => reject(new Error('Error')), 2000));

Proimse.allSettled([p1(), p2()]).then(console.log);
/*
        {status: "fulfilled", value: 1},
        {status: "rejected", reason: Error: Error}
    */
```

Promise.allSettled 메서드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상관없이 Promise.allSettled 메서드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다.
