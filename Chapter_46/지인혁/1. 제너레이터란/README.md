# 제너레이터란?

제너레이터는 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수.

### 제너레이터와 일반 함수의 차이

-   제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.

일반 함수를 호출하면 제어권이 함수에게 넘어가고 함수 코드를 실행한다. 제너레이터 함수는 함수 실행을 호출자가 제어할 수 있으며 함수 실행을 일시 중지시키거나 재개시킬 수 있다.

이는 함수의 제어권을 함수 자체가 독점하는 것이 아니라 호출자에게 양도(yield)할 수 있다를 의미한다.

-   제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.

일반 함수를 호출하면 함수 코드를 실행하여 결과값을 함수 외부로 반환한다. 즉 함수가 실행되고 있는 동안에는 함수 외부에서 함수 내부로 값을 전달하여 함수의 상태를 변경할 수 없다.

제너레이터 함수는 호출자와 양방향으로 상태를 주고 받을 수 있으며 제너레이터 함수는 호출자에게 상태를 전달할 수 있고 호출자로부터 상태를 전달받을 수 있다.

-   제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.

일반 함수를 호출하면 실행의 결과 값을 반환하지만 제너레이터 함수를 호출하면 함수 코드를 실행하는 것이 아니라 이터러블이면서 동시에 이터레이터인 제너레이터 객체를 반환한다.
