# async/await

제너레이터를 사용해서 비동기 처리를 동기처럼 동작하도록 구현하는 것은 코드가 장황해지고 가독성이 나빠진다.

ES8(ECMAScript 2017)에서는 제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 async/await가 도입되었다

async/await는 프로미스를 기반으로 동작. 프로미스의 then/catch/finally 후속 처리 메서드에 콜백함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이 동기 처리처럼 프로미스를 사용할 수 있다

## async 함수

await 키워드는 반드시 async 함수 내부에서 사용해야 한다.<br>
async 함수는 async 키워드를 사용해 정의하며 항상 프로미스를 반환한다.<br>
async 함수가 명시적으로 프로미스를 반환하지 않더라고 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.

```javascript
// async 함수 선언문
async function foo(n) {
  return n;
}
foo(1).then((v) => console.log(v)); // 1

// async 함수 표현식
const bar = async function (n) {
  return n;
};
bar(2).then((v) => console.log(v)); // 2

// async 화살표 함수
const baz = async (n) => n;
baz(3).then((v) => console.log(v)); // 3

// async 메서드
const obj = {
  async foo(n) {
    return n;
  },
};
obj.foo(4).then((v) => console.log(v)); // 4

// async 클래스 메서드
class MyClass {
  async bar(n) {
    return n;
  }
}
const myClass = new MyClass();
myClass.bar(5).then((v) => console.log(v)); // 5
```

클래스의 constructor 메서드 async 가 될 수 없다. 클래스의 constructor 메서드는 인스턴트를 반환해야 하지만 async 함수는 언제나 프로미스를 반환해야 한다.

```javascript
class MyClass {
  async constructor() {}
  // SynctaxError
}
const myClass = new MyClass();
```

## await 키워드

await 키워드는 프로미스가 settled가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다. await 키워드는 반드시 프로미스 앞에 사용해야 한다.

```javascript
const fetch = require("node-fetch");

const getGithubUserName = async (id) => {
  const res = await fetch(`https://api.github.com/users/${id}`); // 1번
  const { name } = await res.json(); // 2번
  console.log(name); // Ungmo Lee
};

getGithubUserName("ungmo2");
```

1번의 fetch 함수가 수행한 HTTP 요청에 대한 서버의 응답이 도착해서 fetch 함수가 반환한 프로미스가 settled 상태가 될때까지 대기하고 이후 **settled 상태가 되면 프로미스가 resolve한 처리 결과가 res 변수에 할당된다.**

## 에러 처리

async/await 에서 에러처리는 try...catch 문 사용 할 수 있다.
프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.

```javascript
const fetch = require("node-fetch");

const foo = async () => {
  try {
    const wrongUrl = "https://wrong.url";

    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err); // TypeError: Failed to fetch
  }
};
foo();
```

async 함수 내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다.
