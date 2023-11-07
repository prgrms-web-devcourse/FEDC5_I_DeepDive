# 프로미스의 생성

Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스 객체를 생성한다. Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백 함수는 reslove와 reject 함수를 인수로 전달 받는다.

```javascript
const promise = new Promise((resovle, reject) => {
    if(...) {
        resolve("success");
    } else {
        reject("faild");
    }
})
```

이 처럼 비동기 처리가 성공하면 콜백 함수의 인수로 전달받은 resolve를 호출하고 비동기 처리가 실패하면 reject 함수를 호출한다.

### 프로미스의 상태 3가지

프로미스는 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태 정보를 갖는다.

-   pending : 비동기 처리가 아직 수행되지 않은 상태
-   fulfilled : 비동기 처리가 수행된 상태 - 성공 (resolve 함수 호출)
-   rejected : 비동기 처리가 수행된 상태 - 실패 (reject 함수 호출)
    <br>

생성 직후의 프로미스는 기본적으로 pending 상태다 이후 비동기 처리가 수행되면 비동기 처리 결과에 따라 프로미스의 상태가 변경된다. 이 처럼 **프로미스 상태는 resolve 또는 reject 함수 호출에 통해 결정된다.**

비동기 처리가 성공하면 프로미스는 pending 상태에서 fulfiled 상태로 변화하며 비동기 처리 결과 값을 갖는다. 이 때 비동기 처리 결과 값은 resolve("result") 함수에서 매개변수로 전달 한 값이다.

비동기 처리가 실패하면 프로미스는 pending 상태에서 reject 상태로 변화하며 처리 결과인 Error 객체를 값으로 갖는다. 이 에러 객체는 reject(new Error("Error")); 함수에서 매개변수로 전달 한 에러 객체다.

**즉, 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체다.**
