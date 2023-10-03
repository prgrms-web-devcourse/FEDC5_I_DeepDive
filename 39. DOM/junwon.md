# DOM

## DOM이란?
- HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 프로퍼티와 메서드를 제공하는 트리 자료구조
- 노드의 객체들로 구성된 트리 자료구조(DOM 트리)

## HTML 요소
- HTML 문서를 구성하는 개별적인 요소
- 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환

## 노드 객체
![img](https://velog.velcdn.com/images%2Fhangem422%2Fpost%2F9565d686-2059-473b-a98b-8445876df26a%2Fweb-node01.png)
### 문서 노드
- DOM 트리의 최상위에 존재하는 루트 노드, document 객체
- document 객체 : 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체
### 요소 노드
- HTML 요소를 가리키는 객체
- HTML 요소 간의 중첩에 의해 부자 관계를 가지고 문서의 구조를 표현
### 어트리뷰트 노드
- HTML 요소의 어트리뷰트(class, id)를 가리키는 객체
- 요소 노드에만 연결되어 있어 어트리뷰트를 참조하거나 변경하려면 먼저 요소 노드에 접근해야 한다
### 텍스트 노드
- HTML 요소의 텍스트를 가리키는 객체
- 자식 노드를 가질 수 없는 리프 노드
- DOM 트리의 최종단이어서 접근하려면 부모 노드인 요소 노드에 먼저 접근해야 한다

![img](https://velog.velcdn.com/images%2Fhangem422%2Fpost%2F2cda81a1-08b2-4f94-8ea5-7b87baa7d3f6%2Fweb-rendering03.png)
### input 요소 노드 객체
- 객체 : 
## 요소 노드 취득
### Document.protoype.getElementById
- id를 이용하여 요소를 취득하고 반드시 문서 노드인 document를 통해 호출해야 한다
- id 값은 HTML 문서 내에서 유일한 값이어야 한다
- 중복된 id 값을 갖는 요소가 여러 개 존재할 경우 첫 번째 요소 노드만 반환
### Document.prototype/Element.prototype.getElementsByTagName
- 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환(복수형)
- 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다
### Document.prototype/Element.prototype.getElementsByClassName
- 인수로 전달한 class 어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환(복수형)
- class 값은 공백으로 구분하여 어러 개의 class를 지정할 수 있다
- 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다
### CSS 선택자 이용
- HTML 요소를 특정할 때 사용하는 문법
``` css
/* 전체 선택자: 모든 요소를 선택 */
* { ... }
/* 태그 선택자: 모든 p 태그 요소를 모두 선택 */
p { ... }
/* id 선택자: id 값이 'foo'인 요소를 모두 선택 */
#foo { ... }
/* class 선택자: class 값이 'foo'인 요소를 모두 선택 */
.foo { ... }
/* 어트리뷰트 선택자 => input 요소 중 type 어트리뷰트 값이 'text'인 모든 요소 */
input[type=text] { ... }
/* 후손 선택자 => div 요소의 후손 요소 중 모든 p 요소를 선택 */
div p { ... } 
/* 자식 선택자 => div 요소의 자손 요소 중 모든 p 요소를 선택 */
div > p { ... } 
/* 인접 형제 선택자 => p 요소의 형제 요소중 바로 뒤의 ul */
p + ul { ... }
/* 일반 형제 선택자 => p의 형제 요소중 뒤의 모든 ul 요소 */
p ~ ul { ... } 
/* 가상 클래스 선택자 => hover 상태인 모든 div */
a:hover { ... } 
/* 가상 요소 선택자 */
p::before { ... }
```
### Document.prototype/Element.prototype.querySelector
  - 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환
  - 만족하는 요소 노드가 여러 개인 경우 첫번째 요소 노드만 반환
  - 만족하는 요소 노드가 존재하지 않는 경우 null을 반환
  - 문법에 맞지 않는 경우 DOMException 에러 발생
### Document.prototype/Element.prototype.querySelectorAll
  - 인수로 전달한 CSS 선택자를 만족시키는 모든 요소 노드를 탐색하여 반환
  - 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList 객체를 반환
  - 만족하는 요소 노드가 존재하지 않는 경우 빈 NodeList 객체를 반환
  - 문법에 맞지 않는 경우 DOMException 에러 발생
  - document.querySelectorAll('*')은 HTML 문서의 모든 요소 노드
### Element.prototype.matches
- 인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다
## HTMLCollection / NodeList
- DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체
- 유사 배열 객체이면서 이터러블 / for ... of 문으로 순회 가능
- 노드 객체의 상태 변화를 실시간으로 반영하는 **살아있는 객체**
### HTMLCollection
### NodeList

## 노드 탐색
- 요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며, 부모, 형제, 자식 노드 등을 탐색할 수 있다
### 공백 테스트 노드
- HTML 요소 사이의 스페이스, 탭, 줄바꿈 등의 공백 문자는 텍스트 노드를 생성한다
``` html
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
  </body>
</html>
```
![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4lD0e%2FbtrA1BDo2CG%2FpiJ8q6wuEjdBUu2JzJx1uK%2Fimg.png)

### 자식 노드 탐색
- Node.prototype.childNodes : 자식 노드를 모두 탐색하여 NodeList에 담아 반환한다. 요소 노드와 텍스트 노드를 포함한다.
- Element.prototype.children : 자식 노드 중에서 요소 노드만 모두 탐색하여 HTMLCollection에 담아 반환한다. 텍스트 노드는 포함하지 않는다
- Node.prototype.firstChild : 첫 번째 자식 노드를 반환하며, 텍스트 노드이거나 요소 노드이다.
- Node.prototype.lastChild : 마지막 자식 노드를 반환하며, 텍스트 노드이거나 요소 노드이다.
- Element.prototype.firstElementChild : 첫 번째 자식 노드이며, 요소 노드만 반환한다.
- Element.prototype.lastElementChild : 마지막 자식 요소 노드이며, 요소 노드만 반환한다.
### 자식 노드 존재 확인
- Node.prototype.hasChildNodes : 자식 노드가 존재하는지 확인, 결과 값으로 불리언을 반환한다. 자식 노드에 요소 노드와 텍스트 노드를 포함하여 확인한다
- children.length or Element의 childElementCount : 텍스트 노드를 제외한 요소 노드만 확인하고 싶은 경우
### 요소 노드의 텍스트 노드 탐색
- firstChild 프로퍼티 : 첫번째 자식 노드를 반환, 반환한 노드는 텍스트 노드이거나 요소 노드
### 부모 노드 탐색
-  Node.prototype.parentNode 프로퍼티 : 부모 노드가 텍스트 노드인 경우는 없다(텍스트 노드는 최종단인 리프 노드이므로)
### 형제 노드 탐색
- Node.prototype.previousSibling : 부모 노드가 같은 형제 노드 중에서 요소 노드와 텍스트 노드를 포함하여 자신의 이전 형제 노드를 반환한다
- Node.prototype.nextSibling : 부모 노드가 같은 형제 노드 중에서 요소 노드와 텍스트 노드를 포함하여 자신의 이후 형제 노드를 반환한다
- Element.prototype.previousElementSibling : 부모 노드가 같은 형제 노드 중에서 요소 노드만 포함하여 자신의 이전 형제 노드를 반환한다
- Element.prototype.nextElementSibling : 부모 노드가 같은 형제 노드 중에서 요소 노드만 포함하여 자신의 이후 형제 노드를 반환한다

## 노드 정보 취득
### Node.prototype.nodeType
- 노드 객체의 타입을 나타내는 상수를 반환
### Node.prototype.nodeName
- 노드의 이름을 문자열로 반환

## 요소 노드의 텍스트 조작
### nodeValue
- Node.prototype.nodeValue 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티다. 즉, nodeValue 프로퍼티는 참조와 할당 모두 가능하다
- 만약 텍스트 노드가 아닌 노드에 nodeValue 프로퍼티를 참조하면 null을 반환한다
- 텍스트 노드의 nodeValue 프로퍼티에 값을 할당하면 텍스트 노드의 값, 즉 텍스트를 변경할 수 있다
### textContent
- Node.prototype.textContent 프로퍼티 : setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다
- 요소 노드의 childNodes 프로퍼티가 반환한 모든 노드들의 텍스트 노드의 값을 반환하고, HTML 마크업은 무시된다(파싱되지 않는다)
- textContent 프로퍼티와 유사한 동작을 하는 innerText 프로퍼티가 있다
- innerText 프로퍼티 : CSS에 순종적(display가 hidden일 경우 반환되지 않는다)이고, innerText 프로퍼티는 CSS를 고려해야하므로 textContent보다 느리기 때문에 사용하지 않는 것이 좋다

## DOM 조작
- DOM 조작은 새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는 것을 말한다
- DOM 조작에 의해 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생하기 때문에 성능에 영향을 준다. 따라서 성능 최적화를 위해 주의해서 다뤄야 한다
### innerHTML
- Element.prototype.innerHTML 프로퍼티 : setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 HTML 마크업을 취득하거나 변경한다. 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역 내에 모든 HTML 마크업을 문자열로 반환
- textContent 프로퍼티가 마크업을 무시하고 텍스트만 반환하는 것과 다르게 프로퍼티를 참조하면 HTML 마크업이 포함된 문자열을 그대로 반환한다
- innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다
### insertAdjacentHTML
- Element.prototype.insertAdjacentHTML(position, DOMString) 메서드 :  기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다
- 위치를 지정하는 첫번째 인수로 전달할 수 있는 문자열은 'beforebegin','afterbegin','beforeend','afterend'
-  insertAdjacentHTML 메서드는 기존 요소에 영향을 주지 않고 새롭게 삽입될 요소만을 파싱하여 자식 요소를 추가하므로 innerHTML 프로퍼티보다 효율적이고 빠르다
![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fvr01a%2FbtrARieA5iZ%2FveqBuulxT76bHvd8WnErN1%2Fimg.png)
### 노드 생성과 추가
- DOM은 노드를 직접 생성/삽입/삭제/치환하는 메서드도 제공
- Document.prototype.createElement(tagName) : **요소 노드를 생성**하여 반환한다. 인수로는 태그 이름을 나타내는 문자열을 전달
- Document.prototype.createTextNode(text) : **텍스트 노드를 생성**하여 반환한다. 인수에는 텍스트 노드의 값으로 사용할 문자열을 전달
- Node.prototype.appenChild(childNode) : 텍스트 노드를 요소 노드의 자식 노드로 추가
- appendChild : 요소 노드를 DOM에 추가
### 복수의 노드 생성과 추가

### 노드 삽입
- Node.prototype.appendChild : 자신을 호출한 노드의 마지막 자식 노드로 인수로 전달 받은 노드를 DOM에 추가
- Node.prototype.insertBefore(newNode, childNode) : 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입 (지정한 위치에 노드 삽입)
### 노드 이동
- DOM에 이미 존재하는 노드를 **appendChild** 또는 **insertBefore** 메서드를 사용하여 DOM에 다시 추가하면 현재 위치애서 노드를 제거하고 새로운 위치에 노드를 추가한다. 즉 노드가 이동
### 노드 복사
- Node.prototype.cloneNode([deep: true | false]) : 노드의 사본을 생성하여 반환, 매개변수 **deep에 true**를 인수로 전달하면 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성하고, **false**를 인수로 전달하거나 생략하면 얕은 복사되어 자기 자신만의 사본을 생성
### 노드 교체
- Node.prototype.replaceChild(newChild, oldChild) : 자신을 호출한 노드의 자식 노드를 다른 자식 노드로 교체한다. 첫 번째 매개변수에 교체할 새로운 노드, 두 번째 매개변수에 이미 존재하는 교체될 노드를 인수로 전달
### 노드 삭제
- Node.prototype.removeChild(child) : 매개변수에 삭제할 노드를 전달한다. 당연히 전달할 노드는 removeChild를 호출한 노드의 자식 노드여야 한다
## 어트리뷰트
### 어트리뷰트 노드와 attributes 프로퍼티
- HTML 요소를 제어하기 위한 추가적인 정보를 제공하는 어트리뷰트는 한개의 HTML 요소가 여러 개의 어트리뷰트를 가질 수 있다
``` html
<input id="user" type="text" value="way">
```
- 글로벌 어트리뷰트 : id, class, style, title, lang, tabindec,draggable, hidden 등
- 이벤트 핸들러: onclick, onchange,onfocus, onblur, onmouseover, 등
- HTML 문서가 파싱될 때 HTML 어트리뷰트는 어트리뷰트 노드로 변환되어 요소 노드와 연결되고 HTML 어트리뷰트 하나당 하나의 어트리뷰트 노드가 생성
- 든 어트리뷰트 노드의 참조는 유사 배열 객체이자 이터러블인 NameNodeMap 객체에 담겨져 요소 노드의 attrubtes 프로퍼티에 저장
- Element.prototype.attributes : 모든 요소 노드의 어트리뷰트를 취득 그러나 getter만 존재하는 읽기 전용 접근자 프로퍼티
### HTML 어트리뷰트 조작
- Element.prototype.getAttributes/setAttribute :  attributes 프로퍼티를 통하지 않고 요소 노드에서 메서드를 통해 직접 HTML 어트리뷰트 값을 취득하거나 변경
- Element.prototype.hasAttribute : 특정 HTML 어트리뷰트가 존재하는지 확인
- Element.prototype/removeAttribute :  HTML 어트리뷰트를 삭제할 때
### HTML 어트리뷰트 vs DOM 프로퍼티
- 요소 노드 객체에는 HTML 어트리뷰트에 대응하는 DOM 프로퍼티가 존재한다. 이 DOM 프로퍼티들은 처음에는 HTML 어트리뷰트의 초기값을 가지고 있다
#### HTML 어트리뷰트
- HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태를 관리
- 어트리뷰트 노드에서 관리하는 어트리뷰트 값은 사용자의 입력에 의해 상태가 변경되어도 변하지 않고 초기 상태를 그대로 유지한다 → 처음과 결과가 변하지 않고 항상 동일하다
- setAttribute : 초기 상태 값을 변경할 수 있다
#### DOM 프로퍼티
- 사용자가 입력한 최신 상태는 DOM 프로퍼티가 관리
- 사용자의 입력에 의한 상태 변화에 반응하여 언제나 최신 상태를 유지
- setter와 getter 모두 존재하는 접근자 프로퍼티이므로 DOM 프로퍼티는 참조와 변경이 가능
- getAttribute 메서드로 취득한 어트리뷰트 값은 언제나 문자열이지만, DOM 프로퍼티로 취득한 값은 문자열이 아닐 수 있다
#### HTML 어트리뷰트와 DOM 프로퍼티의 대응 관계
- 대부분 HTML 어트리뷰트는 HTML 어트리뷰트의 이름과 동일한 DOM 프로퍼티와 1:1 대응한다. 단, 언제나 1:1 대응은 아니며, 어트리뷰트의 이름과 DOM 키가 반드시 일치하는 것도 아니다
- class 어트리뷰트는 className, classList 프로퍼티와 대응한다
- for 어트리뷰트는 htmlFor 프로퍼티와 대응한다
- td 요소의 clospan은 대응하는 프로퍼티가 존재하지 않는다
- textContent 프로퍼티는 대응하는 어트리뷰트가 존재하지 않는다
- 어트리뷰트 이름은 대소문자를 구별하지 않지만 대응하는 프로퍼티 키는 카멜 케이스를 따른다
### data 어트리뷰트와 dataset 프로퍼티
- data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 자바스크립트 간에 데이터를 교환할 수 있다
- data 어트리뷰트는 data- 접두사 다음에 임의의 이름을 붙여 사용한다
- HTMLElement.dataset 프로퍼티 : data 어트리뷰트의 값을 취득할 수 있다
- dataset 프로퍼티가 반환하는 DOMStringMap객체에는 data 어트리뷰트의 data- 다음에 붙인 이름을 카멜 케이스로 변환한 프로퍼티를 가지고 있다
## 스타일
### 인라인 스타일 조작
- HTMLElement.prototype.style : setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 인라인 스타일을 취득하거나 추가, 또는 변경
### 클래스 조작
- CSS class를 미리 정의 한 뒤, HTML 요소의 class 어트리뷰트를 변경하여 HTML 요소의 스타일을 변경할 수도 있다
- class 어트리뷰트에 대응하는 DOM 프로퍼티는 class가 아니라 className과 classList
#### className
- Element.prototype.className : setter와 getter 모두 존재하는 접근자 프로퍼티로 요소 노드의 className을 프로퍼티로 참조하면 class 어트리뷰트 값을 문자열로 반환하고, 문자열을 할당하면 class 어트리뷰트 값이 해당 문자열로 변경된다
#### classList
- Element.prototype.classList : class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다
#### DOMTokenList
- DOMTokenList 객체는 class 어트리뷰트의 정보를 나타내는 컬렉션 객체로서 유사 배열 객체이면서 이터러블이다
- DOMTokenList는 추가적인 메서드를 제공한다
- **add**(...className): add 메서드는 인수로 전달한 1개 이상의 문자열을 class 어트리뷰트 값으로 추가한다
``` JavaScript
$box.classList.add('foo'); // -> class="box red foo"
$box.classList.add('bar', 'baz'); // -> class="box red foo bar baz"
``` 
- **remove**(...className) :remove 메서드는 인수로 전달한 1개 이상의 문자열과 일치하는 클래스를 삭제한다. 일치하는 클래스가 없는 경우 에러 없이 무시된다
``` JavaScript
$box.classList.remove('foo'); // -> class="box red bar baz"
$box.classList.remove('bar', 'baz'); // -> class="box red"
$box.classList.remove('x'); // -> class="box red"
```
- **item**(index): item 메서드는 index에 해당하는 클래스를 어트리뷰트에서 반환한다
``` JavaScript
$box.classList.item(0); // -> "box"
$box.classList.item(1); // -> "red"
```
- **contains**(className): contains 메서드는 인수로 전달한 문자열과 일치하는 클래스가 있는지 확인한다
``` JavaScript
$box.classList.contains('box');  // -> true
$box.classList.contains('blue'); // -> false
```
- **replace**(oldClassName, newClassName): replace 메서드는 첫 번째 인수로 전달한 문자열을 두 번째 인수로 전달한 문자열로 변경한다
``` JavaScript
$box.classList.replace('red', 'blue'); // -> class="box blue"
``` 
- **toggle**(className[,force]): toggle 메서드는 인수로 전달한 문자열이 존재하면 제거하고, 없으면 추가한다.
두 번째 인수로 불리언 값으로 평가되는 조건식을 전달하면, 전달받은 인수를 조건식이 true이면 어트리뷰트에 강제로 추가하고, false이면 강제로 제거한다. 두 번째 인수는 옵션 값이다
``` JavaScript
$box.classList.toggle('foo'); // -> class="box blue foo"
$box.classList.toggle('foo'); // -> class="box blue"
// class 어트리뷰트에 강제로 'foo' 클래스를 추가
$box.classList.toggle('foo', true); // -> class="box blue foo"
// class 어트리뷰트에서 강제로 'foo' 클래스를 제거
$box.classList.toggle('foo', false); // -> class="box blue"
```
- 이외에도  forEach, entries, keys, values,supports 메서드를 제공
### 요소에 적용되어 있는 CSS 스타일 참조
#### window.getComputedStyle(element, [, pseudo])
- style 프로퍼티는 인라인 스타일만 반환한다. 따라서 HTML 요소에 적용되어 있는 모든 CSS 스타일을 참조해야 할 경우 사용
- 첫 번째 인수로 스타일을 참조할 노드를 전달하고, 인라인, 자바스크립트 적용 스타일, 상속 스타일, 기본 스타일, 링크 스타일 등 요소에 적용되어 최종적으로 적용된 스타일을 CSSStyleDeclaration 객체에 담아 반환한다
- 두번째 인수로 의사 요소를 지정하는 문자열을 전달할 수 있고, 의사 요소가 아닌 일반 요소일 경우 생략 가능