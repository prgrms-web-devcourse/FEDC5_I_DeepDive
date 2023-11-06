# 프로미스의 후속 처리 메서드

프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리가 필요하다. 프로미스가 성공하면 처리 결과를 가지고 다른 동작을 해야하고 프로미스가 실패하면 에러 결과를 가지고 에러 처리를 해야한다.

이를 위해 후속 메서드 then, catch, finally를 제공하며 후속 처리 메서드에 인수로 전달한 콜백 함수가 선택적으로 호출된다.

**이때 후속 처리 메서드의 콜백 함수에 프로미스의 처리 결과가 인수로 전달되고 모든 후속 처리 메서드는 프로미스를 반환하며, 비동기로 동작한다.**

<br>

# then

then 메서든느 두 개의 콜백 함수를 인수로 전달 받는다.

첫 번째 콜백 함수는 비동기 처리가 성공했을 때 호출되는 성공 처리 콜백 함수이며, 두번 쨰 콜백 함수는 비동기 처릭 ㅏ실패했을 때 호출되는 실패 처리 콜백 함수다.

```javascript
new Promise((resolve) => {
    resolve('fulfilled');
}).then(
    (v) => console.log(v),
    (e) => console.error(e)
);
```

then 메서드 언제나 프로미스를 반환한다. 만약 then 메서드의 콜백 함수가 프로미스를 반환하면 그 프로미스를 그대로 반환하고, 콜백 함수가 프로미스가 아닌 값을 반환하면 그 값을 암묵적으로 reslove 또는 reject하여 프로미스를 생성하여 반환한다.

<br>

# catch

catch 메서드는 한 개의 콜백 함수를 인수로 전달 받는다. catch 메서드의 콜백 함수는 프로미스가 rejected 상태인 경우만 호출된다.

```javascript
new Promise((_, reject) => {
    reject(new Error('rejected'));
}).catch((error) => {
    console.error(error);
});
```

catch 메서드는 then과 동일하게 동작한다. 따라서 tehn 메서드와 마찬가지로 언제나 프로미스를 반환한다.

<br>

# finally

finally 메서드는 한 개의 콜백 함수를 인수로 전달받는다. finally 메서드의 콜백 함수는 프로미스의 성공, 실패 여부와 상관없이 무조건 한 번 호출된다.

성공, 실패와 상관 없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다.

```javascript
new Promise(() => {}).finally(() => console.log('finally'));
```

finally 메서드도 then/catch와 동일하게 언제나 프로미스를 반환한다.
