## Ajax

<aside>
💡 JavaScript를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청
서버는 데이터를 요청 데이터를 수신하여 **웹페이지를 동적으로 갱신하는 프로그래밍 방식**

</aside>

Web API - XMLHttpRequest 객체를 기반으로 동작함

**AJAX 이전 방식의 문제점**

- 이전의 web 페이지와 큰 차이가 없어 변경하지 않아도 되는 부분까지 HTML을 서버로 부터
    
    매번 다시 전송 받고 불필요한 데이터 통신이 발생
    
- 변경할 필요가 없는 부분까지 처음부터 다시 렌더링함
    
    ⇒ 이로인해 블링킹 깜빡임 이슈가 발생
    
- 클라이언트와 서버가 동기 방식으로 동작하기때문에
    
    서버로부터 응답이 존재할때까지 다음 처리는블로킹됨
    

**AJAX 사용이후?**

- 변경할 부분을 갱신하는 데필요한 데이터만 서버로부터 전송받기때문에 불필요한 통신 없음

- 변경할 필요가 없는 부분은 다시 렌더링되지 않음

- 클라이언트와 서버가 비동기적으로 동작하기때문에 블로킹 발생이 없음

## JSON

<aside>
💡 클라이언트와 서버간으 HTTP 통신을 위한 텍스트 데이터 포맷

</aside>

JavaScript의 객체 리터럴과 유사하지만 JavaScript에 종속되지 않은 **언어 독립형 데이터 포맷**

⇒ 대부분의 언어에서 사용할 수 있음

**JS 객체 리터럴과 다른점**

- JSON 에서는 반드시 큰 따옴표 `“key“` 로 키를 묶어야함
- 문자열 또한 작은 따옴표 사용 불가능! 무조건 큰 따옴표 `“ ”`

**JS 에서의 Method**

`JSON.stringify( object )`

객체, 배열 을 JSON 포맷의 문자열로 변환할 때 사용됨

클라이언트가 서버로 객체를 전송하려면 객체를 문자열화 해야하는데 이를 **직렬화** 라고함

```jsx
const object = { name : "lee" , age : 20 }

const changed = JSON.stringify( object )
```

`JSON.parse( text )`

반대로 JSON 포맷의 문자열을 객체 , 배열로 변환할때 사용

서버에서 전송한 JSON 데이터는 대부분 문자열이고 이를 객체화하는 과정을 `역 직렬화` 라고함

## XMLHttpRequest

<aside>
💡 JS로 HTTP 요청을 하기위해 사용하는 Web API

</aside>

객체로 HTTP 요청 전송 , HTTP 응답 수신을 위한 다양한 method property가 존재함

**생성 방법**

```jsx
const request = new XMLHttpRequest();
```

`XMLHttpRequest` 생성자 함수를 이용해 호출하여 생성

**Property**

`readyState` 🔥

HTTP 요청의 현재 상태를 나타내는 정수

- 0 : UNSENT , 1 : OPENED , 2 : HEADERS_RECEIVED , 3 : LOADINGS , 4 : DONE

`status` 🔥

HTTP 요청에 대한 응답 상태를 나타냄

- 예를 들어 200

`statusText` 🔥

HTTP 요청에 대한 응답 메세지를 나타냄

- “OK”

`responseType` 🔥

HTTP 응답 타입

- documnet, json, text, blob, arraybuffer ….

`response` 🔥

HTTP 요청에 대한 응답 몸체, response Type 에 따라 다름

`responseText`

서버가 전송한 HTTP 요청에 대한 응답 문자열

**EventHandle Property**

`onreadystatechange` 🔥

readyState 프로퍼티 값이 변경된 경우 동작

`onloadstart`

HTTP 요청에 대한 응답을 받기 시작한 경우 동작

`onprogress`

HTTP 요청에 대한 응답을 받는 도중 주기적으로 발생하고 발생시 동작

`onabort`

abort 메서드에 의해 HTTP 요청이 중단된 경우 동작

`onerror` 🔥

HTTP 요청에 에러가 발생한 경우

`onload` 🔥

HTTP 요청이 성공적으로 완료된 경우

`ontimeout`

HTTP 요청 시간이 초과된 경우

`onloadend` 

HTTP 요청이 완료된 경우 - 실패 , 성공시 발생함

**Method**

`open` 🔥

HTTP 요청 초기화

`send` 🔥

HTTP 요청 전송

`abort` 🔥

이미 전송된 HTTP 요청 중단

`setRequestHeader` 🔥

특정 HTTP 요청 헤더의 값을 설정

`getRequestHeader`

특정 HTTP 요청 헤더의 값을 문자열로 반환

**HTTP 요청 전송 순서**

1. `XMLHttpRequest.prototype.open` 메서드로 HTTP 요청을 초기화함
2. 필요에 따라 `XMLTttpRequest.prototype.setRequestHeader` 메서드로 
    
    특정 HTTP 요청 헤더 값을 설정함
    
3. `XMLHttpRequest.prototype.send` 메서드로 HTTP 요청을 전송!

`XMLHttpRequest.prototype.open( method , url[, async] )`

서버에 전송할 때 HTTP 요청을 초기화함

```jsx
const xhr = new XMLHttpRequest()

xhr.open ( method , url[, async] )
```

- method - HTTP 요청 메서드
    - “GET” , “POST” , “PUT” , “DELETE” 등
- url - HTTP 요청을 전송할 URL
- async - 비동기 요청 여부
    - 기본적으로 true 로 설정되어지고 비동기 방식으로 동작

`XMLHttpRequest.prototype.send( data )`

open 메서드로 초기화된 HTTP 요청을 서버에 전송하는데 

“GET” , “POST” 에 따라 전송방식에 차이가 존재

- “GET”일 경우 URL의 일부분을 쿼리 문자열로 서버에 전송
- “POST” 일 경우 데이터를 요청 몸체에 담아 전송

🔥 ”GET” 인경우 인수는 무시되고 요청 몸체는 null 로 설정되어짐

```jsx
// 인수가 객체인경우 JSON 으로 변경!

xhr.send( JSON.stringify(data))
```

`XMLTttpRequest.prototype.setRequestHeader`

헤더값을 설정할 때 사용되어짐 , 반드시 open 메서드를 호출한 이후에 호출해야함

**HTTP 응답 처리**

```jsx
const xhr = new XMLHttpRequest()

// HTTP 요청 초기화
xhr.open("GET" , url )

// HTTP 요청 전송
xhr.send()

// readyState 프로퍼티가 변경될때마다 해당 이벤트 실행
xhr.onreadystatechange = () => {
	// 만약 서버 응답이 완료되지 않았다면 아무런 처리를 하지 않음
	if( xhr.readyState !== XMLHttpRequest.DONE) return;

	// status 값이 200 이라면 정상적인 응답
	// 200이 아니라면 에러가 발생한 상태
	if ( xhr.status === 200 ){
		console.log(JSON.parse( xhr.response ));
	} else {
		console.error('error', xhr.status , xhr.statusText )
	}
}
```