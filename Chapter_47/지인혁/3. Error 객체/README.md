# Error 객체

Error 생성자 함수를 통해 에러 객체를 생성할 수 있다.

Error 생성자 함수에는 에러를 설명하는 메세지를 인수로 전달할 수 있다.

```javascript
const error = new Error('new Error!!');
```

Error 생성자 함수가 생성한 에러 객체는 message 프로퍼티와 stack 프로퍼티를 갖는다.

Message 프로퍼티 값은 인수로 전달한 에러 메세지고 stack 프로퍼티 값은 에러를 발생시킨 콜 스택의 호출 정보를 나타내는 문자열이며 디버깅을 목적으로 사용한다.

### 7가지의 에러 객체

자바스크립트는 Error 생성자 함수를 포함해 7가지의 에러 객체를 생성할 수 있다.

-   Error : 일반적인 에러 객체
-   SyntaxError : 문법에 맞지 않는 문을 해석할 때 발생하는 에러
-   ReferenceError : 참조할 수 없는 식별자를 참조했을 때 발생하는 에러 객체
-   TypeError : 데이터 타입이 유효하지 않을 때 발생하는 에러 객체
-   RangeError : 숫자값의 허용 범위를 벗어났을 때 발생하는 에러 객체
-   URLError : encodeURL 또는 decodeURL 함수에 부적절한 인수를 전달했을 때 발생하는 에러 객체
-   EvalError : eval 함수에서 발생하는 에러 객체
