## XMLHttpRequest

기본적으로 서버와 통신을 하기 위해 HTML form태그 또는 a태그를 통해 HTTP 요청 전송 기능이 있다.

하지만 자바스크립트 언어로 서버와 HTTP요청을 전송할려면 XMLHttpRequest 객체를 사용해야 한다.

<hr><br>

## XMLHttpRequest 객체 생성

XMLHttpRequest 객체는 XMLHttpRequest 생성자 함수를 호출하여 생성한다. XMLHttpRequest 객체는 브라우저에서 제공되는 Web API이므로 브라우저 환경에서만 정상 실행된다.

```javascript
const xhr = new XMLHttpRequest();
```

<hr><br>

## XMLHttpRequest 객체의 프로퍼티와 메서드

XMLHttpRequest 객체는 다양한 프로터와 메서드를 제공하며 가장 유용한 프로퍼티와 메서드만 간단히 살펴보겠다.

- status

HTTP 요청에 대한 응답 상태를 타나내는 정수다. ex) 200, 404, 500

- response 

HTTP 요청에 대한 응답받은 데이터이며, 응답하는 타입에 따라 타입이 결정된다.

- onError

HTTP 요청에 에러가 발생한 경우

- onload

HTTP 요청이 성공적으로 완료한 경우

- open

HTTP 요청 초기화

- send

HTTP 요청 전송

- setRequestHeader

특정 HTTP 요청 헤더의 값을 설정

- getResponseHeader

특정 HTTP 요청 헤더의 값을 문자열로 반환

- DONE

서버 응답 완료

<hr><br>

## HTTP 요청 전송

HTTP 요청을 전송하는 경우 다음 순서를 따른다.
1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청 초기화
2. 필요에 따라 XMLHttpRequest.prototyep.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정.
3. XMLHttpRequest.prototye.send 메서드로 HTTP 요청을 전송

### XMLHttpRequest.open
open 메서드는 서버에 전송할 HTTP 요청을 초기화한다.

```javascript
xhr.open(method, url[, async]);
```
- method : HTTP 요청 메서드(GET, POST, PUT, DELETE)
- URL : HTTP 요청을 전송할 URL
- async : 비동기 요청 여부, 기본 값은 true이며 비동기 방식으로 동작

### XMLHttpRequest.send
send 메서드는 open으로 초기화된 HTTP 요청을 서버에 전송한다. GET, POST 요청 메서드에 따라 전송 방식이 다르다.


- GET

데이터를 URL의 일부분인 쿼리 문자열로 서버에 전송

- POST

데이터를 몸체(body)에 담아 전송, 이때 전송할 데이터는 반드시 JSON.stringify 메서드를 사용하여 JSON 형식으로 직렬화 해야한다.

만약 요청 메서드가 GET인 경우 send 메서드로 전달한 데이터 인수는 무시되고 null로 설정된다.

```javascript
xhr.send(JSON.stringify({id: 1, content: "HTML"}));
```

<hr><br>

## XMLHttpRequest.prototype.setRequestHeader
setRequestHeader 메서드는 특정 HTTP 요청의 헤더 값을 설정한다. setRequestHeader 메서드는 반드시 open 메서드를 호출한 이후에 호출해야한다.

```javascript
const xhr = new XMLHttpRequest();

xhr.open("POST", "/users");
// 헤더에 서버로 전송할 데이터 타입이 JSON이라고 설정해준다.
xhr.setRequestHeder("content-type", "application/json");
// JSON데이터 전송
xhr.(JSON.stringify({id: 1, content: "HTML"}))
```

<hr><br>

## HTTP 응답 처리
HTTP 요청을 서버에 전송하면 서버는 응답을 반환한다. 하지만 언제 응답이 클라이언트에 도착하는지는 알 수 없다.

readystatechange 이벤트나 onload 이벤트를 사용하여 응답을 캐치할 수 있다.

- readystatechange

readystatechange는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가 변경될 때마다 이벤트가 발생한다.

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "/users");
xhr.send();

// readyState 프로퍼티가 변경될 때마다 이벤트 실행
xhr.onreadystatechange = () => {
    // 서버 응답이 완료되지 않았다면 아무런 처리 x
    if(xhr.readyState !== XMLHttpRequest.DONE) {
        return;
    }
    // 서버 응답이 완료되고 정상적으로 응답된 상태이면 
    if(xhr.status === 200) {
        // 로직 실행
    }
    else {
        // 에러 발생
    }
}
```

- onload

HTTP 요청이 성공적으로 완료된 경우 이벤트가 발생한다.

이때 xhr.readyState가 DONE인지 확인할 필요가 없다.

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "/users");
xhr.send();

// readyState 프로퍼티가 변경될 때마다 이벤트 실행
xhr.onload = () => {
    // 서버 응답이 완료되고 정상적으로 응답된 상태이면 
    if(xhr.status === 200) {
        // 로직 실행
    }
    else {
        // 에러 발생
    }
}
```
<hr><br>
