# 콜백 헬

비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다. 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료되기 때문에 **비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 생각한 대로 동작하지 않는다.**

즉 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. 그래서 비동기 함수의 처리결과에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다.

비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는 것이 일반적이며 비동기 처리가 성공, 실패에 따라 처리될 콜백함수를 전달 할 수 있다.

```javascript
const get = (url, successCallback, failCallback) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onload() => {
        if(xhr.status === 200) {
            sucessCallback(JSON.parse(xhr.response));
        }else {
            failCallback(xhr.status);
        }
    }
}

get("/url", console.log, console.error);
```

만약 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처릴르 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생한다. 이를 **콜백 헬**이라 한다.

```javascript
const get = (url, successCallback, failCallback) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onload() => {
        if(xhr.status === 200) {
            sucessCallback(JSON.parse(xhr.response));
        }else {
            failCallback(xhr.status);
        }
    }
}

get("/url", (id) => {
    get(`/url${id}`, (id) => {
        get(`/url${id}`, (id) => {
            get(`/url${id}`, (id) => {
                get(`/url${id}`, (id) => {
                    get(`/url${id}`, (id) => {
                        console.log(id);
                    });
                });
            });
        });
    });
});
```

이 처럼 비동기로 반환 받은 데이터로 또 다시 비동기 get 요청을 5번을 반복해야한다면 이렇게 콜백 헬이 발생한다. 이는 가독성을 나쁘게하며 실수를 유발하게 된다.

<br>

# 에러 처리의 한계

비동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 심각한 것은 에러 처리가 곤란한 것이다.

```javascript
try {
    setTimeout(() => throw new Error('Error!'), 1000);
} catch (error) {
    console.error(error); // 에러를 캐치하지 못함.
}
```

이 코드는 1초 후 콜백 함수가 에러를 발생시켜도 catch 코드 블록에서 캐치되지 않는다. 이유는 콜백함수를 호출한게 setTimeout의 함수가 아니기 때문이다.

setTimeout의 콜백 함수가 실행 될 때 setTimeout는 이미 콜 스택에서 제거 된 상태다. setTimeout의 콜백 함수를 호출한 것이 setTimeout가 아니라는 의미를 뜻 한다.

호출자가 setTimeout가 되기 위해서는 콜 스택의 최 상위에 콜백 함수가 있고 그 하위 실행 컨텍스트가 setTimeout 이여야만 한다.

에러를 호출자 방향(콜 스택에서 아래 방향)으로 전파 된다. 즉 setTimeout가 콜 스택에서 바로 제거되고 콜백함수가 실행될 때 콜 스택에서는 setTimeout가 존재하지 않는다. 이는 콜백함수를 호출 한 것이 setTimeout가 아니라서 에러가 catch블록에서 잡히지 않는 것이다.

이러한 **에러 처리를 극복하기 위해 ES6에서 프로미스가 도입되었다.**
