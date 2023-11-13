# try... catch... finally 문

기본적으로 에러 처리를 구현하는 방법에는 if 문이나 단축 평가 또는 옵셔널 체이닝 연산자를 통해 확인해서 처리하는 방법과 에러 처리 코드를 미리 등록하여 에러가 발생하면 에러 처리 코드로 점프 하는 방법이 있다.

try... catch... finally 문도 역시 에러 처리 방법 중 하나다. 이 방법은 에러 처리(Error handling)이라고 한다.

try... catch... finally 문은 3개의 코드 블록으로 구성되지만 finally 문은 필요한 경우에만 작성한다. catch 문도 생략 가능하지만 catch가 없는 try는 의미가 없으므로 생략하지 않는다.

```javascript
try {
    // 실행할 코드
} catch (error) {
    // 에러 발생시 핸들링 할 로직이 실행
    // try에서 발생한 Error 객체가 전달
} finally {
    // 무조건 실행되는 로직
}
```

try... catch... finally 문 실행 시 try 코드 블록이 실행된다. 이때 try 코드 블록에서 에러가 발생하면 발생한 에러는 catch에 error 변수에 전달되고 catch 코드 블록이 실행된다.

try 코드 블록에 에러가 발생하면 에러가 생성되고 catch 코드 블록에서만 유효하다.

finally 코드 블록은 에러 발생과 상관없이 반드시 한 번 실행된다.

try... catch... finally 문으로 에러를 처리하면 프로그램이 강제 종료되지 않는다.
