# REST API

## REST API의 구성

REST의 기본 원칙을 지킨 서비스 디자인을 **“RESTful”**이라고 한다. REST API는 자원, 행위, 표현의 3가지 요소로 구성된다.

- 자원 : 자원의 위치, URI(엔드포인트)로 표현
- 행위 : 자원에 대한 행위, HTTP 요청 메서드로 표현
- 표현 : 자원에 대한 행위의 구체적 내용, 페이로드로 표현

## REST API 설계 원칙

REST에서 가장 중요한 기본적인 원칙은 두가지이다. 가장 중요한 원칙은 URI는 리소스를 표현하는데 집중하고 행위에 대한 정의는 HTTP 요청 메서드를 통해 하는 것이다.

### 1. URI는 리소스를 표현해야 한다

URI는 리소스를 표햔하는 데 중점을 두어야 한다. 리소스를 식별할 수 있는 이름은 동사보다는 명사를 사용한다.

```
#bad
GET /getTodos/1
GET /todos/show/1

#good
GET /todos/1
```

### 2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현한다

**HTTP 요청 메서드**는 클라이언트가 서버에게 요청의 종류와 목적(리소스에 대한 행위)를 알리는 방법이다. 리소스에 대한 행위는 URI에 표현하지 않는다. <br>
5가지 요청 메서드를 사용하여 CRUD를 구현한다 <br>
|HTTP 요청 메서드|종류|목적|페이로드|
|---------------|----|---|:------:|
|GET|index/retrieve|모든/특정 리소스 취득|X|
|POST|create|리소스 생성|O|
|PUT|replace|리소스의 전체 교체|O|
|PATCH|modify|리소스의 일부 수정|O|
|DELETE|delete|모든/특정 리소스 삭제|X|

```
# bad
GET /todos/delete/1

# good
DELETE /todos/1
```

## RESTful API 예시
