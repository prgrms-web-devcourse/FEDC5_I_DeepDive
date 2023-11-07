💡 **비동기 작업을 제어하기 위해 나온 개**념으로 callback hell 에서 벗어날 수 있게 도와줌

## Promise 생성

Promise 생성자 함수를 `new` 연산자와 사용하면 `Promise 객체`를 만들 수 있음

```jsx
const promise = new Promise( (resolve, reject)=> {

	if( /* 성공시 */ ){
		resolve( JSON.parse(/* 응답 내용 */))
	} else {
		reject( throw new Error("실패 시") )
	}
});
```

- 이때 Promise는 비동기 작업을 처리할 콜백함수 `resolve` 와 `reject` 두개의 함수를 인수로 받음
- 비동기 처리에 성공하면 promise 의 상태가 `fulfilled` 로 변경되고 `resolve` 가 실행됨
- 비동기 처리에 실패하면 promise 의 상태가 `rejected` 로 변경되고 `reject` 가 실행됨

## 후속 처리

<aside>
💡 Promise 의 상태가 변경되어지고 나면 그에 맞는 후속 처리를 해줘야함

</aside>

`Promise.prototype.then`

두개의 콜백 함수를 인수로 전달받게됨

1. `fulfiled` 로 상태가 변경되면 호출되는 함수로 Promise의 비동기 처리 결과를 전달받음
2. `rejected` 로 상태가 변경되면 Promise 에게 Error를 인수로 전달받음

- `then` 메서드는 언제나 `promise` 를 반환하게됨
- 프로미스가 아닌 값을 콜백함수가 반환시 암묵적으로 `resolve` `reject` 하여 `promise`를 반환

`Promise.prototype.catch`

`rejected` 인 경우에만 실행되고, 그렇기때문에 한 개의 콜백 함수를 인수로 전달 받음

- then 과 동일하게 언제나 `promise` 를 반환함

`Promise.prototype.finally`

한 개의 콜백 함수를 인수로 전달 받아 promise 의 **성공 실패** 와 관계없이 **무조건 호출**됨

- then 과 동일하게 언제나 `promise` 를 반환함

## Error 처리

기본적으로 `catch`를 이용해 처리를 할 수 있음

```jsx
promiseError("오류가 날 예정")
  .then((res) => console.log(res))
  .catch((e) => throw new Error(e));
```

또는 `then`의 두 번째 인수로 처리하는 방법이 존재함

위에서 `then`은 두개의 인수를 전달받는 내용을 확인

```jsx
promiseError("오류").then(
  (res) => console.log(res),
  (e) => console.log(e)
);
```

🔥하지만.. 이 방법은 그냥 사용안하는게 좋음

에러를 캐치 못하는 부분이 발생할 수 있고, 가독성에서도 매우 떨어짐

## 정적 Method

`Promise.resolve` `Promise.reject`

두개의 메소드 모두 이미 존재하는 값을 래핑하여 `promise`를 생성하기 위해 사용됨

```jsx
const resolved = Promise.resolve("값");

const rejected = Promise.rejected("값");
```

`Promise.all`

여러 개의 **비동기 처리를 병렬 처리**할 때 사용

```jsx
const promise1 = () => new Promise("뭔가 수행중");
const promise2 = () => new Promise("뭔가 수행중");
const promise3 = () => new Promise("뭔가 수행중");

Promise.all([promise1(), promise2(), promise3()]).then(" 알아서 ");
```

배열 등의 이터러블을 인수로 전달받아 일을 수행함

- 전달받은 모든 promise 가 `fulfilled` 상태가 되면 모든 처리 결과를 다시 배열에 저장하고
  새로운 `Promise` 를 반환함
- 전달받은 promise 중 하나라도 rejected 상태가 되면 거기서 수행이 종료됨

`Promise.race`

all 과 동일하게 요소를 갖는 배열 등 이터러블을 인수로 전달받는다

- all 과 다른점은 모든 promise가 `fulfilled` 상태가 되는것을 기다리는것이 아닌
  가장 먼저 `fulfilled`가 가장 먼저 된 promise의 처리 결과를 `resolve` 함

`Promise.allSettled`

전달받은 `promise` 들의 결과가 `rejected` 이든 `resolve` 이던 상관없이 모두 끝나면

해당 결과를 반환함

# Fetch

<aside>
💡 기존의 XMLHttpRequest 객체와 동일한 역할을 하는 Web API

</aside>

하지만.. XMLHttpRequest 객체보다 사용법이 간단하고 `Promise`를 지원함

결과 값으로 HTTP 응답을 나타내는 `Response 객체`를 래핑한 `Promise`객체를 반환함

### 사용 방법

함수에 인수로 HTTP 요청을 전송할 `URL` 과 `options`을 전달함

```jsx
const res = fetch(URL [, options] )
```

### Error

`404 Not Found` `500 Internal Server Error` 와 같은 에러를

reject 하지 않고 `ok` 값을 `false` 로 설정한 `Response객체`를 반환하게됨
