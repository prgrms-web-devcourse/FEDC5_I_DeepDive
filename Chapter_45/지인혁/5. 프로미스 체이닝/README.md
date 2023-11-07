# 프로미스 체이닝

프로미스는 then, catch, finally 후속 처리 메서드를 연속적으로 사용하여 콜백 헬을 해결한다.

```javascript
promiseGet(`${url}/posts/1`)
    .then(({ userId }) => promiseGet(`${userId}/posts/1`))
    .then(({ userId }) => promiseGet(`${userId}/posts/1`))
    .then(({ userId }) => promiseGet(`${userId}/posts/1`))
    .then(({ userId }) => promiseGet(`${userId}/posts/1`))
    .then((userInfo) => consoel.log(userInfo))
    .catch((error) => console.error(error));
```

위 예제처럼 then, catch, finally 후속 처리 메서드 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다. 이를 **프로미스 체이닝** 이라 한다.

프로미스는 프로미스 체이닝을 통해 비동기 처리 겨로가를 전달받아 후속 처리를 하므로 비동기 처리를 위한 콜백 패턴에서 발생하던 콜백 헬이 발생하지 않는다. 다만 프로미스도 콜백 패턴을 사용하므로 콜백 함수를 사용하지 않는 것은 아니다.

콜백 패턴은 가독성이 좋지 않으며 이는 async/await을 통해 해결할 수 있다.
