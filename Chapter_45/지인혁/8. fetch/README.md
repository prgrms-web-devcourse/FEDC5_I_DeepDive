# fetch

fetch 함수는 XMLHttpRequest 객체와 마찬가지로 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API다. XMLHttpRequest 객체 보다 사용법이 간단하고 프로미스를 지원하기 때문에 비동기 처리를 위한 콜백 패턴의 단점에서 자유롭다.

fetch 함수에는 URL, HTTP 요청 메서드, HTTP 요청 헤더, 페이로드 등을 설정한 객체를 전달한다. 제일 중요한 부분은 **fetch 함수는 HTTP 응답을 나타내는 Respone 객체를 래핑한 Promise 객체를 반환한다.**

```javascript
fetch('url')
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
```

fetch 함수는 Response 객체를 래핑한 프로미스를 반환하므로 후속 처리 메서드 then, catch를 통해 resolve, reject를 통해 전달받은 Response나 Error 객체를 전달 받을 수 있다.

### Response 객체

fetch 함수가 반환한 프로미스가 래핑하고 있는 JSON 타입이다. Response 객체에 포함되어 있는 메서드 .json()을 통해 Response 객체에서 HTTP 응답 몸체를 취득하여 역질렬화 한다.

### 에러 처리

```javascript
fetch('url')
    .then(() => console.log('ok'))
    .catch(() => console.log('error'));
```

만약 해당 url이 잘못되어 404에러를 발생한다고 가정하자. catch문에서 404 에러 때문에 error가 출력될 것 처럼 보이지만 then의 ok가 출력된다.

fetch 함수가 반환하는 프로미스는 네트워크 통신에 성공만 하면 resolve를 호출한다. 404, 500 등 HTTP 에러가 발생해도 에러를 reject하지 않고 불리언 타입의 ok 상태를 false로 설정한 Response 객체를 resolve한다.

**즉 400, 500 HTTP 에러 관련 에러는 reject 되지 않고 ok라는 상태를 가진 Response를 결국 반환하는 것이다. 네트워크 장애나 CORS 에러에 의해 요청이 완료되지 못한 경우에만 프로미스를 reject한다.**

```javascript
fetch('url')
    .then((response) => {
        if (response.ok === true) {
            return response.json();
        }
        if (response.ok === false) {
            throw new Error('error');
        }
    })
    .catch((error) => console.log(error));
```

그래서 response.ok 값으로 정확한 에러를 처리하고 false일 경우 에러를 생성해 catch 문으로 넘겨줘야 한다.

참고로 axios는 모든 HTTP 엘를 reject하는 프로미스를 반환한다. 따라서 모든 에러를 catch에서 처리할 수 있어 편리하다.
