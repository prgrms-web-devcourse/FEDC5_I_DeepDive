&nbsp;&nbsp;&nbsp;&nbsp;`실행 컨텍스트 스택`에 push 되는것이 **함수의 시작**을 의미함

&nbsp;&nbsp;&nbsp;&nbsp;⇒ 따라서 실행 순서는 `실행 컨텍스트 스택`으로 관리하게됨

💡 JavaScript는 `싱글 스레드` 방식으로 단 하나의 실행 컨텍스트 스택을 가지고 있음.

따라서 2개 이상의 함수를 **동시에 실행할 수 없음!**

&nbsp;&nbsp;&nbsp;&nbsp;즉! 현재 실행중인 함수가 종료되어야 다음 대기중인 태스크들을 실행되어지고

## 동기 처리

&nbsp;&nbsp;&nbsp;&nbsp;💡 현재 실행중인 태스크가 종료할 때까지 다음에 실행될 태스크가 대기하는 방식을 `동기 처리` 라고함

&nbsp;&nbsp;&nbsp;&nbsp;**단점**

&nbsp;&nbsp;&nbsp;&nbsp;한 번에 하나의 태스크만 실행할 수 있는 JS가 아주 오래 걸리는 함수를 실행할때는

&nbsp;&nbsp;&nbsp;&nbsp;`블로킹 blocking` ( 작업 중단 ) 이 발생할 수 있음

## 비동기 처리

💡 동기 처리와 다르게 현재 실행 중인 태스크가 종료되지 않은 상태라 해도
다음 태스크를 실행하는 방식을 `비동기 처리` 라고함

&nbsp;&nbsp;&nbsp;&nbsp;`setTimeout` , `setInterval` , `HTTP요청` , `이벤트 핸들러` 는 비동기 처리 방식으로 동작함

&nbsp;&nbsp;&nbsp;&nbsp;- 비동기 처리를 수행하는 비동기 함수는 **콜백 패턴을 사용**함

&nbsp;&nbsp;&nbsp;&nbsp;**단점**

&nbsp;&nbsp;&nbsp;&nbsp;블로킹이 발생하지 않지만 태스크의 **실행 순서가 보장되지 않음**

## 이벤트 루프와 태스크 큐

### 🔥 사전 지식

&nbsp;&nbsp;&nbsp;&nbsp;JavaScript 엔진 안에는 크게 2가지의 영역으로 구분되어짐

&nbsp;&nbsp;&nbsp;&nbsp;- `콜 스택 call stack`

&nbsp;&nbsp;&nbsp;&nbsp;소스 코드 평가 과정에서 생성된 실행 컨텍스트가 추가되고 제거되는 스택 자료구조의 `실행 컨텍스트 스택`

&nbsp;&nbsp;&nbsp;&nbsp;함수를 호출하면 함수 실행 컨텍스트가 순차적으로 콜 스택에 푸사되어 순차적으로 실행됨

&nbsp;&nbsp;&nbsp;&nbsp;🔥 JS 엔진의 콜 스택은 1개이기 때문에 **최상위 실행 컨텍스트가 종료되어 콜 스택에서 제거되기 전까지**

&nbsp;&nbsp;&nbsp;&nbsp;**어떤 태스크도 실행되지 않음!**

&nbsp;&nbsp;&nbsp;&nbsp;- `힙 heap`

&nbsp;&nbsp;&nbsp;&nbsp;객체가 저장되는 메모리 공간 - **콜 스택의 요소인 실행 컨텍스트는 힙에 저장된 객체를 참조함**

**이벤트 루프 Event Loop**

&nbsp;&nbsp;&nbsp;&nbsp;JavaScript 의 동시성을 지원하는 것은 이벤트 루프 Evnet loop임

&nbsp;&nbsp;&nbsp;&nbsp;- 애니메이션 효과를 통해 움직이며 이벤트처리
&nbsp;&nbsp;&nbsp;&nbsp;- HTTP 요청을 통해 서버로부터 데이터를 가지고 오기 … 등

💡 이런 비동기 처리에서 `소스 코드의 평가` , `실행` 을 제외한 모든 처리는 JavaScript 엔진을 구동하는 환경 `브라우저` , `Node.js` 가 담당함

**이벤트 루프?**

&nbsp;&nbsp;&nbsp;&nbsp;콜 스택에 현재 실행 중인 컨텍스트가 있는지? 태스크 큐에 대기 중인 함수가 있는지? 반복 확인함

&nbsp;&nbsp;&nbsp;&nbsp;만약.. **콜 스택이 비어있고 태스크 큐에 대기중인 함수가 있다면 이벤트 루프는 순차적으로**

&nbsp;&nbsp;&nbsp;&nbsp;**태스크 큐에 대기중인 함수를 콜 스택으로 이동 시킴**

&nbsp;&nbsp;&nbsp;&nbsp;⇒ 이후! 콜 스택으로 이동한 함수가 실행!

&nbsp;&nbsp;&nbsp;&nbsp;🔥 즉 태스크 큐에 일시 보관된 함수들은 비동기 처리 방식으로 동작함

**태스크 큐?**

&nbsp;&nbsp;&nbsp;&nbsp;비동기 함수의 `콜백 함수` , `이벤트 핸들러`가 일시적으로 보관되는 영역

&nbsp;&nbsp;&nbsp;&nbsp;⇒ 태스크 큐와 별도로 프로미스의 후속 처리, 메서드의 콜백 함수가 일시적으로 보관되는

&nbsp;&nbsp;&nbsp;&nbsp;**마이크로태스크 큐**도 존재함
