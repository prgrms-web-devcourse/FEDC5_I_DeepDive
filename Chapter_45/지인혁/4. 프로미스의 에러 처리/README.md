# 프로미스의 에러 처리

프로미스로 에러를 처리할 때 then, catch 문을 사용할 수 있다.

```javascript
new Promise((resolve) => {
    resolve('fulfilled');
}).then(
    (v) => console.log(v),
    (e) => console.error(e)
);
```

then 메서드의 두 번째 콜백 함수로 에러를 처리할 수 있고

```javascript
new Promise((_, reject) => {
    reject(new Error('rejected'));
}).catch((error) => {
    console.error(error);
});
```

catch을 사용하여 에러를 처리할 수 있다.

하지만 then 메서드의 두 번째 콜백 함수는 비동기 처리에 대한 에러만 캐치해주지, 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못하고 코드가 복잡해져서 가독성이 좋지 않다.

catch 메서드를 모든 then 메서드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러 뿐만 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치 할 수 있다.

**그래서 then 메서드에 두 번째 콜백 함수를 전달해서 에러를 캐치하기 보다는 catch 메서드를 사용하는 것이 가독성에 좋고 명확하다.**
