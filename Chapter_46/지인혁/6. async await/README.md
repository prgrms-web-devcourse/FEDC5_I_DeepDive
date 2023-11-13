# async / await

제너레이터를 사용해서 비동기 처리를 동기 처럼 동작하도록 구현할 수 있지만 가독성에 매우 좋지 않다.

제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처치처럼 동작하도록 구현할 수 있는 async/await이 도입된다.

async/await은 프로미스를 기반으로 동작하며 프로미스의 then/catch/finally 후속 처리 메서드에 콜백 함수를 전달하여 비동기 처리 결과를 후속 처리할 필요 없이 마치 동기 처리처럼 프로미스를 사용할 수 있다.

```javascript
async function fetchTodo() {
    const res = await fetch(url);
    const todo = await response.json();

    console.log(todo;)
}

fetchTodo();
```

### asnyc 함수

await 키워드는 반드시 async 함수 내부에서 사용해야 한다. async 함수는 async 키워드로 정의하며 항상 프로미스를 반환한다.

명시적으로 프로미스를 반환하지 않아도 암묵적으로 반환하는 값을 reslove하는 프로미스를 반환한다.

```javascript
// 일반 함수 선언
async function foo() {
    return 'hi';
}
foo().then((result) => console.log(result)); // hi

// 화살표 함수 선언
const foo = async () => {
    return 'hi';
};
foo.then((result) => console.log(result)); // hi

// 객체 메서드로 선언
const obj = {
    async foo() {
        return 'hi';
    },
};
obj.foo().then((result) => console.log(result)); // hi

// 클래스 메서드 선언
class MyClass {
    async foo() {
        return 'hi';
    }
}
const myClass = new MyClass();

myClass.foo().then((result) => console.log(result)); // hi;
```

클래스의 constructor 생성자 함수는 async 메서드가 될 수 없다. constructor는 인스턴스를 반환해야 하지만 async는 프로미스를 반환하기 때문이다.

### await 키워드

await 키워드는 프로미스가 settled 상태 (비동기 처리가 끝난 상태)가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다.

await 키워드는 반드시 프로미스 함수 앞에 사용해야한다.

```javascript
async function fetchTodo() {
    const res = await fetch(url);
    const todo = await response.json();

    console.log(todo;)
}

fetchTodo();
```

fetch 함수는 프로미스를 반환하는 함수로써 await을 통해 http 요청이 끝나고 응답이 도착할 때 까지 대기하게 된다. 이후 settled 상태가 되면 프로미스가 resulove한 처리 결과를 res 변수에 할당하게 된다.

그 후 JSON을 객체로 파싱하는 .json()도 프로미스를 반환하는 비동기 함수로 await을 통해 settled 상태가 될 때까지 기다리고 원하는 결과 값을 반환 받는다.

### 모든 프로미스에 await은 주의하자

서로 연관이 없이 개별적으로 수행되는 비동기 처리마다 await을 통해 기다린다면 각 비동기 처리에 걸리는 시간을 기다리게 된다.

서로 연관이 없기에 병렬 처리로 모두 동시에 비동기 함수를 수행하면 더 효율적으로 처리할 수 있다.

```javascript
async function foo() {
    const res = await Promise.all([
        new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
        new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
        new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    ]);

    console.log(res);
}

foo();
```

각 setTimeout 함수 마다 await을 사용한다면 각 3초 총 9초의 대기시간을 갖게 되지만 병렬 처리를 한다면 3초에 모든 비동기 처리를 수행하여 더 효율적이다.

만약 연관이 있는 앞선 비동기 처리의 결과를 활용하여 다음 비동기 처리를 수행한다면 순서가 보장되어야 하므로 모든 프로미스 비동기 처리에 await 키워드를 사용하여 순차적으로 처리할 수 밖에 없다.

# 에러 처리

에러는 호출자 방향으로 전파된다. 하지만 비동기 함수의 콜백 함수를 호출한 것은 비동기 함수가 아니기 때문에 try... catch 문을 사용하여 에러를 캐치할 수 없다.

하지만 async/await에서 에러 처리는 try... catch 문을 사용할 수 있다. 콜백 함수를 인수로 전달 받는 비동기 함수와는 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 떄문에 호출자가 명확하다.

```javascript
const foo = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

foo();
```

catch 문은 HTTP 통신에서 발생한 네트워크 에러, try 코드 블록 내의 모든 문에서 발생하는 에러까지 캐치할 수 있다.

**asnyc 함수 내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다.**

따라서 async 함수를 호출하고 후속 메서드인 catch문을 통해 에러를 캐치할 수도 있다.

```javascript
const foo = async () => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

foo()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```
