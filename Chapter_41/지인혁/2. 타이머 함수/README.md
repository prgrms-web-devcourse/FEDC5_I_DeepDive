# 타이머 함수

### setTimeout / clearTimeout

setTimeout 함수는 두 번째 인수로 전달받은 시간(ms, 1/1000초)으로 단 한 번 동작하는 타이머를 생성한다.

**타이머가 만료되면 첫 번째 인수로 전달받은 콜백 함수가 호출**된다. setTimeout 함수의 콜백함수는 두 번째 인수로 전달 받은 시간 이후 **단 한 번 실행되도록 호출 스케줄링** 된다.

```javascript
const timeoutId = setTimeout(func, delay, param);
```

```javascript
setTimeout(
    () => {
        console.log(`Hi ${name}`); // Hi Lee
    },
    1000,
    'Lee'
);
```

-   func : 타이머가 만료된 뒤 호출될 콜백 함수

-   delay : 타이머 만료 시간. setTimeout 함수는 delay 시간으로 단 한 번 동작하는 타이머를 생성한다. 인수 전달을 생략한 경우 기본값 0이 지정된다.

-   param : 호출 스케줄링된 콜백 함수에 전달해야 할 인수가 존재하는 경우 세 번째 이후의 인수로 전달할 수 있다.

```javascript
const timerId = setTimeout(
    () => {
        console.log(`Hi ${name}`);
    },
    1000,
    'Lee'
);

clearTimeout(timerId); // 타이머 취소
```

setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환하게 된다.

반환된 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소할 수 있다. clearTimout 함수는 호출 스케줄링을 취소하게 된다.

### setInterval / clearInterval

setInterval 함수는 두 번째 인수로 전달받은 시간으로 반복 동작하는 타이머를 생성한다.

**타이머가 만료될 때마다 첫 번째 인수로 전달받은 콜백 함수가 반복 호출**된다.

이는 타이머가 취소될 때 까지 계속된다.

```javascript
const timeoutId = setInterval(func, delay, param);
```

setInterval 함수도 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.

반환된 타이머 id를 clearInterval 함수의 인수로 전달하여 타이머를 취소할 수 있다.

```javascript
let count = 1;

const timeoutId = setInterval(() => {
    console.log(count);

    if (count++ === 5) {
        clearInterval(timeoutId);
    }
}, 1000);
```

<hr>
