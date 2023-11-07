# REST API 설계 원칙

REST에서 중요한 원칙은 두 가지. URL은 리소시를 표현하는데 집중하고 행위에 대한 정의는 HTTP 요청 메서드를 통해 설계한느 것이 중심 규칙이다.

### URL은 리소스를 표현

URL은 리소스를 표현하는데 중점을 둬야한다. 동사보다는 명사를 사용하는게 좋으며 get 같은 행위에 대한 동사가 들어가서는 안된다.

> #bad<br>
> GET/getTodos/1<br>
> GET/todos/show/1<br><br>
> #good<br>
> GET/todos/1

### 리소스에 대한 행위는 HTTP 요청 메서드로 표현

HTTP 요청 메서드는 클라이언트가 서버에게 요청의 종류와 목적을 알리는 방법이다. 주로 GET, POSt, PUT, PATCH, DELETE 등을 사용하여 CRUD를 구현한다.

-   GET : 모든/특정 리소스 취득 (페이로드 : X)
-   POST : 리소스 생성 (페이로드 : O)
-   PUT : 리소스의 전체 교체 (페이로드 : O)
-   PATCH : 리소스의 일부 수정 (페이로드 : O)
-   DELETE : 모든/특정 리소스 삭제 (페이로드 : X)

리로스에 대한 행위는 URL에 표현하지 않는다. 리소스를 취득하는 경우 GET, 삭제하는 경우 DELTE를 사용하여 행위를 명확히 표현한다.

> #bad<br>
> GET/todos/delte/1<br><br>
> #good<br>
> DELETE/todos/1
