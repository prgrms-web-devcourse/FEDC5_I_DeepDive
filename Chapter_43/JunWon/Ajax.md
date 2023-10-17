# Ajax

## Ajax란?
> **Ajax**(Asynchronous Javascript and XML)란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식

### Ajax 이전의 전통적인 방식
- htmlhtml 태그로 시작해서 html 태그로 끝나는 완전한 HTML을 서버로부터 전송받아 웹페이지 전체를 처음부터 다시 렌더링하는 방식으로 동작했음

#### 전통적인 방식의 단점
- 이전 웹페이지와 차이가 없어서 변경할 필요가 없는 부분까지 포함된 완전한 HTML을 서버로부터 매번 다시 전송받기 때문에 불필요한 데이터 통신 발생한다
- 렌더링으로 인해 화면 전환이 일어나면 화면이 순간적으로 깜박이는 현상이 발생한다
- 클라이언트와 서버와의 통신이 동기 방식으로 동작하기 때문에 서버로부터 응답이 있을 때까지 다음 처리는 블로킹 된다

#### Ajax 전통적인 방식과 비교했을 때의 장점
- 변경할 부분을 갱신하는 데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신 발생하지 않는다
- 변경할 필요가 없는 부분은 다시 렌더링하지 않음. 순간적으로 화면이 깜박이는 현상 발생하지 않는다
- 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다

## JSON
> **JSON**(JavaScript Object Notation)은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷

### JSON 표기 방식
- JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트
- JSON의 키는 반드시 큰따옴표로 묶어야 한다❗
``` JavaScript
{
    "name": "Lee",
    "age": 20,
    "alive": true,
    "hobby": ["traveling", "tennis"]
}
```
### JSON.stringify
- JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환
- 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 **직렬화**(serializing)라고 한다
- JSON.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환
``` JavaScript
const obj = {
  name : 'Lee', 
  age : 20,
  alive: true,
  hobby : ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환함.
const json = JSON.stringify(obj);
// string {"name": "Lee", "age": 20, "alive": true, "hobby": ["traveling", "tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 함.
const prettyJson = JSON.stringify(obj, null, 2);
/*
{
"name" : "Lee",
"age" : 20,
"hobby" : [
	"traveling",
    "tennis"
    ]
 ]
*/

// replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다. 
function filter(key, value) {
  // undefined : 반환되지 않음 
  return typeof value === 'number'? undefined : value;
}

// JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다. 
const strFilteredObject = JSON.stringify(obj, filter, 2);

/*
{
"name" : "Lee",
"alive" : true,
"hobby" : [
	"traveling",
    "tennis"
    ]
 ]
*/
```
### JSON.parse
- JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다
- 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다.
- 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 **역직렬화(deserializing)**라 한다
``` JavaScript
const obj = {
  name : 'Lee', 
  age : 20,
  alive: true,
  hobby : ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환함.
const json = JSON.stringify(obj);

// JSON 포맷의 문자열을 객체로 변환함.
const parsed = JSON.parse(json);
// object {"name": "Lee", "age": 20, "alive": true, "hobby": ["traveling", "tennis"]}
```

### XMLHttpRequest
- 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다
- Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다

#### XMLhttpRequest 객체 생성
- XMLhttpRequest 객체는 XMLhttpRequest 생성자 함수를 호출하여 생성한다
``` JavaScript
const xhr = new XMLHttpRequest();
```
#### XMLhttpRequest 객체의 프로퍼티와 메서드
#### XMLRequest 객체의 프로토타입 프로퍼티
- readyState : HTTP 요청의 현재 상태를 나타내는 정수<br>(UNSENT : 0, OPENED : 1, HEADERS_RECEIVED : 2, LOADING : 3, DONE : 4)
- status : HTTP 요청에 대한 응답 상태(HTTP 상태 코드)를 나타내는 정수 ex) 200
- statusText : HTTP 요청에 대한 응답 메세지 나타내는 문자열 ex) "OK"
- responseType : HTTP 응답 타입 ex) document, json, text, blob, arraybuffer
- response : HTTP 요청에 대한 응답 몸체(response body), responseType에 따라 타입이 다름
- responseText : 서버가 전송한 HTTP 요청에 대한 응답 문자열
#### XMLRequest 객체의 이벤트 핸들러 프로퍼티
- onreadystatechange : readyState 프로퍼티 값이 변경된 경우
- onloadstart : HTTP 요청에 대한 응답을 받기 시작한 경우
- onprogress : HTTP 요청에 대한 응답을 받는 도중 주기적으로 발생
- onabort : abort 메서드에 의해 HTTP 요청이 중단된 경우
- onerror : HTTP 요청에 에러가 발생한 경우
- onload : HTTP 요청이 성공적으로 완료한 경우
- ontimeout : HTTP 요청 시간이 초과한 경우
- onloadend : HTTP 요청이 완료한 경우, HTTP 요청이 성공 또는 실패하면 발생
#### XMLHttpRequest 객체의 메서드
- open : HTTP 요청 초기화
- send : HTTP 요청 전송
- abort : 이미 전송된 HTTP 요청 중단
- setRequestHeader : 특정 HTTP 요청 헤더의 값을 설정
- getResponseHeader : 특정 HTTP 요청 헤더의 값을 문자열로 반환
#### XMLHttpRequest 객체의 정적 프로퍼티
- UNSENT : 값 0, open 메서드 호출 이전
- OPENED : 값 1, open 메서드 호출 이후
- HEADERS_RECEIVED : 값 2, send 메서드 호출 이후
- LOADING : 값 3, 서버 응답 중(응답 데이터 미완성 상태)
- DONE : 값 4, 서버 응답 완료

### HTTP 요청 전송
#### HTTP 요청 전송 순서
1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다
``` JavaScript
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화 
xhr.open('GET', '/users');

// HTTP 요청 헤더 설정 
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json 
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send(); 
```

#### XMLHttpRequest.prototype.open
``` JavaScript
xhr.open(method,url[, async])
```
- method : HTTP 요청 메서드 ('GET', 'POST' 등)
- url : HTTP 오청을 전송할 URL
- async : 비동기 요청 여부. 옵션으로 기본값은 true.
#### XMLHttpRequest.prototype.send
- GET 요청 메서드의 경우 데이터를 URL의 일부분인 쿼리 문자열(query string)로 서버에 전송
- POST 요청 메서드의 경우 데이터(페이로드 payload)를 요청 몸체(request body)에 담아 전송
- 페이로드가 객체인 경우 반드시 JSON.stringify 메서드를 사용하여 직렬화한 다음 전달해야 한다
``` JavaScript
xhr.send(JSON.stringify({ id : 1, content : 'HTML', completed : false }));
``` 
> *HTTP 요청 메서드가 GET인 경우 send 메서드에 페이로드로 전달한 인수는 무시되고 요청 몸체는 null로 설정된다.*

#### XMLHttpRequest.prototype.setRequestHeader
- setRequestHeader 메서드는 특정 HTTP 요청의 헤더 값을 설정한다
- 반드시 open 메서드를 호출한 후에 호출해야한다
- HTTP의 요청헤더로 Content-type, Accept가 자주 쓰인다
- Content-type은 요청 몸체에 담아 전송할 데이터의 MIME 타입의 정보를 표현함.
- text (MIME 타입) : (서브 타입) text/plain, text/html, text/css, text/javascript
- application : application/json, applicaiton/x-www-form-urlencode
- multipart : multipart/formed-data
``` JavaScript
const xhr = new XMLhttpRequest();

// HTTP 요청 초기화
xhr.open('POST', '/users');

// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json 
xhr.setRequestHeader('content-type', 'application/json');
```
- HTTP 클라이언트가 서버에 요청할 때 서버가 응답할 데이터의 MIME 타입을 Accept로 지정할 수 있다
``` JavaScript
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json 
xhr.setRequestHeader('accept', 'application/json');
```
#### HTTP 응답 처리
- 서버가 전송한 응답을 처리하려면 XMLHttpRequest 객체가 발생시키는 이벤트를 캐치해야 한다
- HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티 값이 변경된 경우 발생하는 readystatechange 이벤트를 캐치하여 HTTP 응답을 처리할 수 있다

``` JavaScript
const xhr = new XMLhttpRequest();

// HTTP 요청 초기화
// https://jsonplaceholder.typicode.com은 Fake Rest API를 제공하는 서비스
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 전송
xhr.send();

// readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가 변경될 때마다 발생한다.
xhr.onreadystatechange = () => {
  // readyState 프로퍼티는 HTTP 요청의 현재 상태 나타냄. 
  // readyState 프로퍼티 값이 4(DONE)가 아니면 서버 응답이 완료되지 않은 상태 
  // 만약 서버 응답 완료되지 않았다면 아무런 처리 하지 않음 
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
 
  if(xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else { 
    console.error('Error', xhr.status, xhr.statusText);
  }
};
```
- readystatechange 이벤트 대신 load 이벤트 캐치해도 좋다 load 이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생한다
``` JavaScript
const xhr = new XMLhttpRequest();

// HTTP 요청 초기화
// https://jsonplaceholder.typicode.com은 Fake Rest API를 제공하는 서비스
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 전송
xhr.send();

// load 이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생한다
xhr.onload = () => {
  if(xhr.status === 200){
    consol.log(JSON.parse(xhr.response));
  } else {
        console.error('Error', xhr.status, xhr.statusText);
  }
};
```