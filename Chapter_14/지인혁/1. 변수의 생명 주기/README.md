# 변수의 생명 주기

전역 변수의 무분별한 사용은 위험하다. 전역변수를 반드시 사용해야할 이유를 찾지 못한다면 지역 변수를 사용해야 한다.

### 지역 변수의 생명 주기

변수는 선언에 의해 생성되고 할당을 통해 값을 얻는다. 그리고 언젠가 소멸한다.

변수에 생명주기가 없다면 한 번 선언된 변수는 프로그램을 종료하지 않는 한 영원한 메모리 공간을 점유하게 된다.

변수는 자신이 선언된 위치에서 생성되고 소멸하며 전역 변수의 생명 주기는 애플리케이션의 생명 주기와 같다.

함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.

```javascript
function foo() {
    var x = 'local';

    console.log(x); // local
    return x;
}

foo();
console.log(x); // x is not defined
```

함수 내부에 선언된 지역 변수 x는 foo 함수가 호출되어 실행되는 동안에만 유요하하다. 즉, 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다.

하지만 지역 변수가 함수보다 오래 생존하는 경우가 있다.

변수의 생명주기는 메모리 공간이 확보된 시점부터 메모리 공간이 해제되어 가용 메모리 풀에 반환되는 시점까지다.

함수 내부에서 선언된 지역 변수는 함수가 생성한 스코프에 등록된다. 함수가 생성한 스코프는 렉시컬 환경이 존재하며 변수는 자신이 등록된 스코프가 메모리에 해제 될 때 까지 유효하다.

하지만 메모리 해제는 더 이상 누구도 참조하지 않을 때 가바지 콜렉터에 의해 제거되기 때문에 누군가가 메모리 공간을 참조하고 있으면 해제되지 않고 확보된 생태로 남아있게 된다.

**스코프 또한 다른 곳에서 해당 스코프를 참조하고 있으면 스코프는 소멸하지 않고 생존하게 된다.**

### 전역 변수의 생명 주기

함수와 달리 전역 코드는 명시적인 호출 없이 실행된다. 전역 코드는 함수 호출과 같이 전역 코드를 실행하는 특별한 진입점이 없고 코드가 로드되자마자 곧바로 해석되고 실행된다. 함수는 함수 몸체의 마지막 문 또는 반환문이 실행되면 종료한다.

var 키워드로 선ㅇ너한 전역 변수는 전역 객체의 프로퍼티가 되는데 전역 변수의 생명 주기와 전역 객체의 생명 주기와 일치하는 것을 말한다.

브라우저에서 전역 객체는 window이므로 var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티며 window 객체는 웹 페이지를 닫기 전까지 유효하다. 따라서 브라우저 환경에서 var의 변수는 웹 페이지를 닫을 때 까지 유효하다.

**var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.**

<hr>
