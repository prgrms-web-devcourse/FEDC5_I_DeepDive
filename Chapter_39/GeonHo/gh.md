# DOM

DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다.

:one: 노드

:pen: HTML 요소와 노드 객체

HTML 요소는 HTML 문서를 구성하는 개별적인 요소를 의미한다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-0.png)

HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환된다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-1.png)

HTML 요소의
어트리뷰트 => 어트리뷰트 노드
텍스트 콘텐츠 => 텍스트 노드
로 변환된다.

이러한 노드 객체들로 구성된 트리 자료구조를 DOM이라 한다. DOM 트리라고 부르기도 한다.

노드 객체는 총 12개의 종류가 있고, 그 중 4가지 중요한 노드 타입이 있다.
각각 _문서_, _요소_, _어트리뷰트_, _텍스트_ 노드이다.

<br>

:pen: 노드 객체의 상속 구조

DOM은 DOM을 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리이다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-3.png)

<br>노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-4.png)

위 사진에서 알 수 있듯, 각 요소 노드 객체는 자신의 프로토타입 체인에 있는 프로토타입의 프로퍼티나 메서드를 상속 받아 사용할 수 있다.

또한, 노드 타입에 상관없이 모든 노드 객체가 공통으로 갖는 기능도 있고, div 요소 노드 객체에는 없는 value 프로퍼티는 input 요소 노드 객체가 가지는 것 처럼, 각 요소의 종류에 따라 고유한 기능도 있다.

**즉, DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API로 제공한다. 이 DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.**

즉, HTML을 DOM과 연관지어 바라볼 줄 알아야한다.

<br>

:two: 요소 노드 취득

:pen: id를 이용한 요소 노드 취득

_Document.prototype.getElementById_

- id 값을 갖는 하나의 요소 노드를 탐색 후 반환.
- 중복되는 id 값이 있을 경우, 첫 번째 요소노드만 반환한다.
- 요소 없으면 null 을 반환.

<br>

:pen: class를 이용한 요소 노드 취득

_Document.prototype/Element.prototype.getElementsByClassName_

- class 어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환한다.

<br>

:pen:
querySelector / querySelectorAll

_Document.prototype/Element.prototype.querySelector && querySelectorAll_

- CSS 선택자를 만족시키는 하나 && 전체의 요소 노드를 탐색하여 반환한다.

이때, querySelectorAll 메서드는 NodeList 객체를 반환한다.

<br>

:pen: HTMLCollection과 NodeList

DOM 컬렉션 객체인 HTMLCollection과 NodeList는 DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체이다. HTMLCollection과 NodeList는 모두 유사 배열 객체이면서 이터러블이다.

**HTMLCollection과 NodeList의 중요한 특징은, 노드 객체의 상태 변화를 실시간으로 반영하여 살아 있는 객체라는 것이다.**

<br>

:question: 살아있는 객체란?

![Alt text](/39.%20DOM/GeonHo/image_gh/image-5.png)

![Alt text](/39.%20DOM/GeonHo/image_gh/image.png)

(분명 모든 텍스트가 blue로 변해야 할 것 같지만, 그렇지 않은 모습)

이유는 다음과 같다.

1. loop 문에서 i 값이 0 일때, 첫번째 Apple 클래스 value가 red -> blue로 변환됨.
   이때, 더이상 value가 red가 아니기에, 실시간으로 $elems에서 삭제됨.
   즉 $elems에는 Banana, Orange 두 요소만 남아있는 상황.
2. 다음은 i 값이 1 이다.
   1번 요소인 Orange's class value를 blue로 변경 후 $elems에서 실시간으로 삭제.
3. loop 문에서 i의 값은 2지만, $elems의 length가 1이기에 loop 중단.

이처럼 HTMLCollection 객체는 실시간으로 노드 객체의 상태 변경을 반영한다.

<br>

혹은 querySelectorAll이 반환하는 NideList 객체는 실시간으로 노드 객체의 상태 변경을 반영하지 않는 객체로 querySelectorAll을 활용하여 해결할 수도 있다.

**하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollection 객체와 동일하게 실시간 객체로 동작하므로 주의가 필요하다.**

따라서 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것이 좋다.

<br>

:three: 노드 탐색

Node, Element 인터페이스는 트리 탐색 프로퍼티들을 제공해준다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-6.png)

<br>

:pen: 공백 텍스트 노드

HTML 요소 사이의 스페이스, 탭, 개행 등의 공백 문자는, 텍스트 노드를 생성하고 이를 공백 텍스트 노드라 한다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-7.png)

(이를 참고하여, 노드 탐색할 때 주의하자.)

자식 노드들을 탐색할때,
Node 객체의 프로퍼티에는 텍스트 노드가 포함될 수 있지만
Element 객체의 프로퍼티에는 텍스트 노드가 포함되지 않는다.

<br>

:pen: textContent

Node.prototype.textContent 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.

```js
<script>
  // #foo 요소 노드의 텍스트를 모두 취득한다. 이때 HTML 마크업은 무시된다.
  console.log(document.getElementById('foo').textContent); // Hello world!
</script>
```

하지만, 역으로 'Hi <span>there!</span>'; 와 같은 HTML 마크업을 할당해도, 문자열로 인식하여 텍스트로 취급될 뿐이다.

추가로, innerText의 경우 CSS에 순종적이기에 CSS에 의해 비표시(visibility: hidden;)로 지정된 요소 노드의 텍스트를 반환하지 않고, CSS를 고려하기에 속도가 느린 편이다. 때문에 사용에 비추.

<br>

:six: DOM 조작

새로운 노드를 생성하여 DOM에 추가하거나, 기존의 노드를 삭제 or 교체 하는 것이다.

DOM 조작에 의해 DOM에 새로운 노드가 추가 or 삭제되면 **리플로우** 와 **리페인트** 가 발생할 수 있다.

<br>

:pen: innerHTML

setter와 getter 모두 존재하는 접근자 프로퍼티로서, 요소 노드의 HTML 마크업을 취득하거나 변경한다.

textContent와 다르게, HTML 마크업이 포함된 문자열을 그대로 반환한다.
또한 마크업 태그를 삽입할 수도 있다.

![Alt text](/39.%20DOM/GeonHo/image_gh/image-8.png)

위와 같은 특성 때문에, 사용자로부터 입력받은 데이터를 그대로 innerHTML 프로퍼티에 할당하는 것은 크로스 사이트 스크립팅 공격(XXS)에 취약하므로 위험하다. 마크업 내에 자바스크립트 악성 코드가 포함되어 있다면 파싱 과정에서 그대로 실행될 가능성이 있기 때문이다.

만약 브라우저가 HTML5를 지원한다면, innerHTML 프로퍼티에 삽입된 script 자바스크립트 코드를 실행하지 않는다.

이처럼 innerHTML 프로퍼티를 사용한 DOM 조작은 구현이 간단하고 직관적인 장점이 있지만

크로스 사이트 스크립팅 공격에 취약한 단점도 있다.

<br>

:pen: 노드 조작

1. 생성

- Document.prototype.createElement()

2. 자식 노드로 추가

- Node.prototype.appendChild()

<br>

3.  이렇게 생성된 노드들을 DOM에 연결해주는 작업을 추가해줘야, 비로소 DOM과 연결이 된다. <br>
    또한 생성하는 노드 하나 당 한번의 **리플로우** 와 **리페인트** 가 발생한다.
    <br>리플로우와 리페인트는 DOM을 변경하는 것이며, 이는 많은 비용을 사용하게 한다. <br>
    때문에 여러 노드들을 DOM에 추가할 경우, 컨테이너 요소를 사용하여 추가한다면 DOM은 한 번만 변경된다.
    <br>

- DocumentFragment()

<br>

4. 지정한 위치에 노드 삽입

- Node.prototype.inserBefore(newNode, childNode)
  <br>(첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다.)

5. 이동

- DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메서드를 사용하면 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다.

6. 복사

- Node.prototype.clibeNode([deep : true | false])
  <br>(노드의 사본을 생성하여 반환한다.)

7. 교체

- Node.prototype.replaceChild(newChild, oldChild) <br>(자신을 호출한 노드의 자식 노드를 다른 노드로 교체한다.)

8. 삭제

- Node.prototype.removeChild(child) <br> (child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다.)

<br>

:seven: 어트리뷰트

:pen: HTML 어트리뷰트 vs DOM 프로퍼티

요소 노드 객체에는 HTML 어트리뷰트에 대응하는 프로퍼티가 존재한다. <br>이 DOM 프로퍼티들은 HTML 어트리뷰트 값을 초기값으로 가지고 있다.

HTML 어트리뷰트의 역할은 HTML 요소의 초기 상태를 지정하는 것이다.<br> 즉, HTML 어트리뷰트 값은 HTML 요소의 초기 상태를 의미하며 이는 **변하지 않는다**.

반대로, DOM 프로퍼티의 역할은 사용자의 입력에 의한 상태 변화에 반응하여 **언제나 최신 상태를 유지** 한다.

이처럼 요소 노드는 2개의 상태를 가진다. 즉 초기 상태와 최신 상태를 관리해야 한다.

요소 노드의 초기 상태는 어트리뷰트 노드가 관리하며, 노드의 최신 상태는 DOM 프로퍼티가 관리한다.
