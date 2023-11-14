- 직접적으로 에러가 발생하는 경우
  ```jsx
  console.log(["frist"]); // ["first"]
  func(); // ReferenceError: func is not defined

  // 이미 앞에서 error 발생으로 실행이 안됨
  console.log(["Second"]);
  ```
- 직접적으로 에러를 발생시키지 않는 예외적 상황
  ```jsx
  // 없는 요소를 불러오면?
  const test = document.querySelector("#test");
  // 에러 발생이 아닌 null이 반환됨
  console.log(test); // null
  ```
  이런 현상은 추후에 더큰 Error를 만들 수 있음
  ⇒ 따라서 **If 조건문 / 단축 평가 / 옵셔널 체이닝 연산자** 를 사용해 방지해야함

## Try … catch … finally

<aside>
💡 미리 에러 처리 코드를 등록해두고 에러가 발생하면 처리하는 방법

</aside>

```jsx
try {
  // 실행할 코드 즉 에러가 날 수 있는 코드
} catch (error) {
  // try 코드 내에서 에러가 발생했을때 해당 코드블록이 실행댐
  // error => try 에서 발생한 Error 객체를 담고있음
} finally {
  // 에러 밸상 유무와 관계없이 무조건 실행될 코드
}
```

`catch` / `finally` 두개의 문 모두 생략이 가능함

⇒ But.. `catch` 문을 사용하지 않으면 `try`를 사용할 이유가 없음

## Error 객체

<aside>
💡 Error 생성자 함수를 통해 Error 객체를 만들 수 있음

</aside>

에러를 설명할 메세지를 인수로 전달 할 수 있음

```jsx
const error = new Error(" 에러에 대한 설명을 전달 ");
```

**Error 객체**는 `message` 프로퍼티 / `stack` 프로퍼티 두개의 프로퍼티를 가짐

⇒ `message` 는 Error 생성자 함수에 인수로 전달할 에러 메세지

⇒ `stack` 은 에러를 발생시킨 콜 스택의 호출 정보를 담아 디버킹 목적으로 사용됨

생성된 객체는 `Error.propotype`을 상속받음

**7가지의 생성자 함수**

- `Error`
  - 일반적 에러 객체
- `SyntaxError`
  - 자바스크립트 문법에 맞지 않는 문을 해석했을때
- `ReferenceError`
  - 참조할 수 없는 식별자를 참조했을 때 발생
- `TypeError`
  - 피연산자 / 인수의 데이터 타입이 유효하지 않을때
- `RangeError`
  - 숫자값의 허용 범위를 벗어났을때
- `URIError`
  - encodeURL / decodeURI 함수에 부적절한 인수가 전달됐을때
- `EvalError`
  - eval 함수에서 발생

## thorw 문

<aside>
💡 Error 생성자 함수는 Error를 만들뿐 **발생시키지 않음**

</aside>

따라서 `throw` 문을 이용해 Error 객체를 던져야함

```jsx
// 던지는 방법
throw 표현식;
```

## Error 전파

에러는 항상 **호출자 방향**으로 전파되어짐

따라서 발생지점이 아닌 **적절한 위치에서 에러를 캐치**하는것이 중요함
