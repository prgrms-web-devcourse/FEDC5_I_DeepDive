https://hellosonic.tistory.com/262



📚 DOM
브라우저의 렌더링 엔진은 HTML 문서를 파싱하여 DOM을 생성한다. DOM은 브라우저가 이해할 수 있는 자료구조이다.

DOM은 HTML 문서의 계층적 구조와 정보를 표현하며, 이를 제어할 수 있는 API(프로퍼티, 메서드)를 제공하는 트리 자료구조이다.
HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체(어트리뷰트 노드, 텍스트 노드)로 변환된다.
DOM은 노드 객체의 계층적 구조로 구성되고, 상속 구조를 갖는다.




📚 노드 객체의 타입
✅ 문서 노드
DOM 트리의 최상위에 존재하는 루트노드. document 객체를 가리킨다. 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통과해야 한다.



✅ 요소 노드
HTML 요소를 가리키는 객체.



✅ 어트리뷰트 노드
HTML 요소의 어트리뷰트를 가리키는 객체. 어트리뷰트가 지정된 요소 노드와 연결되어 있다. 어트리뷰트 노드에 접근하여 어트리뷰트를 참조하려면 먼저 요소 노드에 접근해야 한다.



✅ 텍스트 노드
HTML 요소의 텍스트를 가리키는 객체. 텍스트 노드는 요소 노드의 자식 노드이며, 리프 노드이다.(DOM 트리의 최종단) 텍스트 노드에 접근하려면 부모 노드인 요소 노드에 먼저 접근해야 한다.







📚 노드 객체의 상속 구조
✅ Node 인터페이스
노드 타입에 상관없이 모든 노드 객체가 공통으로 갖는 기능

모든 노드 객체는 공통적으로 이벤트를 발생시킬 수 있다.
트리 탐색 기능(Node.parentNode, Node.previousSibling 등)
노드 정보 제공 기능(Node.nodeType, Node.nodeName 등)


✅ HTMLElement 인터페이스 
HTML 요소가 갖는 공통적인 기능 

input 요소 객체와 div 요소 객체는 style 프로퍼티가 있다.


✅ HTMLInputElement, HTMLDivElement 인터페이스 등
HTML 요소의 종류에 따른 고유한 기능

input 요소 객체는 value 프로퍼티가 필요하지만 div 요소 객체는 value 프로퍼티가 필요하지 않다.






📚 요소 노드 취득
HTML 구조, 내용, 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 한다.



✅ id를 이용한 요소 노드 취득
Document.prototype.getElementById(id) 
id 값을 갖는 하나의 요소 노드를 탐색하여 반환한다, 이 때 첫 번째 요소 노드만 반환한다.
반드시 문서 노드인 document를 통해 호출해야 한다.
요소 노드가 존재하지 않는다면 null을 반환한다.
id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고, 해당 노드 객체가 할당된다.


✅ 태그 이름을 이용한 요소 노드 취득
Document.prototype / Element.prototype.getElementsByTagName(tag)
태그 이름을 갖는 모든 요소들을 탐색하여 반환한다.
여러 개의 요소 노드 객체를 갖는 HTMLCollection 객체를 반환한다. 이 DOM 컬렉션 객체는 유사 배열 객체이면서 이터러블이다.
모든 요소 노드를 취득하려면 인수로 '*'을 전달한다. 
태그 이름을 갖는 요소가 존재하지 않는 경우 빈 HTMLCollection 객체를 반환한다.


✅ class를 이용한 요소 노드 취득
Document.prototype / Element.prototype.getElementsByClassName(class)
class 값을 갖는 모든 요소들을 탐색하여 반환한다.
공백으로 구분하여 여러 개의 class를 지정할 수 있다.
class 값을 갖는 요소가 존재하지 않는 경우 빈 HTMLCollection 객체를 반환한다.


✅ CSS 선택자를 이용한 요소 노드 취득
Document.prototype / Element.prototype.querySelector(CSS 선택자)
CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다. 
여러 개일 경우, 첫 번째 요소 노드만 반환한다.
존재하지 않는 경우, null을 반환한다.
문법에 맞지 않는 경우 DOMException 에러가 발생한다.
Document.prototype / Element.prototype.querySelectorAll(CSS 선택자)
CSS 선택자를 만족시키는 모든 요소 노드를 탐색하여 반환한다. 이 때 여러 개의 요소 노드 객체를 갖는 NodeList 객체를 반환한다.
존재하지 않는 경우 빈 NodeList 객체를 반환한다.
문법에 맞지 않는 경우 DOMException 에러가 발생한다.
모든 요소 노드를 취득하려면 인수로 '*'을 전달한다.
CSS 선택자를 이용한 요소 노드 취득 장/단점
장점 :구체적인 조건으로 요소 노드를 취득할 수 있다.
단점 : CSS 선택자 문법을 사용하는 메서드는 getElementById, getElementBy*** 메서드보다 느리다.
따라서,

id 어트리뷰트가 있는 요소 노드를 취득할 때는 getElementById 메서드, 그 이외에는 CSS 선택자 문법을 사용하는 메서드를 사용한다.





✅ 특정 요소 노드를 취득할 수 있는지 확인
Element.prototype.matches(CSS 선택자)
CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다.



✅ DOM 컬렉션 객체
DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체, 유사 배열 객체이면서 이터러블이다. (for... of 순회 가능, 스프레드 문법 사용 가능) 살아있는 객체(노드 객체의 상태 변화를 실시간으로 반영)이다.

HTMLCollection
getElementsByTagName, getElementsByClassName 메서드가 반환하는 DOM 컬렉션 객체이다.
항상 살아있는 객체이다.
for 문으로 순회하면서 노드 객체를 변경해야 할 때 주의해야 한다. (역방향 순회, while문, 배열로 변환 후 순회하면 방지할 수 있다.)
NodeList
HTMLCollection 객체의 부작용을 해결하기 위해 querySelectorAll 메서드를 사용하는 방법이 있다.
이 때 NodeList 객체는 non-live 객체이다.
하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 live 객체이므로 주의해야한다.
따라서, 

DOM Collection을 사용할 때는 주의해야하며, 배열로 변환하여 사용하는 것을 권장한다. (스프레드 문법, Array.from 메서드 활용)









📚 노드 탐색
요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며 다른 노드를 탐색할 때가 있다.

Node.prototype : parentNode, previousSibling, firstChild, childNodes 제공
Element.prototype : previousElementSibling, nextElementSibling, children 프로퍼티 제공


✅ 자식 노드 탐색
Node.prototype.childNodes
자식 노드를 모두 탐색하여 Nodelist에 담아 반환한다. 요소 노드 뿐만 아니라 텍스트 노드도 포함된다.

Element.prototype.children
자식 노드를 모두 탐색하여 HTMLCollection에 담아 반환한다. 이 때, 텍스트 노드는 포함 안된다.

Node.prototype.firstChild
첫 번째 자식 노드를 반환한다. 텍스트 노드이거나 요소 노드이다.

Node.prototype.lastChild
마지막 자식 노드를 반환한다. 텍스트 노드이거나 요소 노드이다.

Element.prototype.firstElementChild
첫 번째 자식 노드를 반환한다. 요소 노드만 반환한다.

Element.prototype.lastElementChild
마지막 자식 노드를 반환한다. 요소 노드만 반환한다.



✅ 자식 노드 존재 확인
Node.prototype.hasChildNodes
자식 노드가 존재하면 true, 존재하지 않으면 false를 반환한다. 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다.

따라서 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인하려면 children.length 또는 Element 인터페이스의 childElementCount 프로퍼티를 사용한다.


✅ 요소 노드의 텍스트 노드 탐색
텍스트 노드는 요소 노드의 자식 노드이기 때문에 firstChild 프로퍼티로 접근할 수 있다. 



✅ 부모 노드 탐색
Node.prototype.parentNode 프로퍼티를 사용한다. 무조건 요소 노드이다.



✅ 형제 노드 탐색 
텍스트 노드, 요소 노드만 반환한다. 어트리뷰트 노드는 반환되지 않는다.

Node.prototype.previousSilbling
부모 노드가 같은 형제 노드 중에서 자신의 이전 형제 노드를 탐색하여 반환한다. 텍스트 노드이거나 요소 노드이다.

Node.prototype.nextSibling
자신의 다음 형제 노드를 탐색하여 반환한다. 텍스트 노드이거나 요소 노드이다.

Element.prototype.previousElementSibling
자신의 이전 형제 노드를 탐색하여 반환한다. 요소 노드만 반환한다.

Element.prototype.nextElementSibling
자신의 다음 형제 노드를 탐색하여 반환한다. 요소 노드만 반환한다.



✅ 노드 정보 취득
Node.prototype.nodeType
요소 노드 타입은 1,
텍스트 노드 타입은 3,
문서 노드 타입은 9를 반환한다.
Node.prototype.nodeName 
노드의 이름을 문자열로 반환한다.

요소 노드 : 대문자 문자열로 태그 이름("UL", "LI" 등)을 반환
텍스트 노드 : 문자열 "#text" 반환
문서 노드 : 문자열 "#document" 반환


✅ 요소 노드의 텍스트 조작
Node.prototype.nodeValue
참조, 할당 모두 가능. 노드 객체의 값(텍스트 노드의 텍스트) 반환. 텍스트 노드의 nodeValue 프로퍼티를 참조할 때만 텍스트 노드의 값(텍스트)을 반환한다.

텍스트 노드의 nodeValue 프로퍼티에 값을 할당하면 텍스트를 변경할 수 있다. 

텍스트를 변경할 요소 노드를 먼저 취득
취득한 요소 노드의 텍스트 노드를 탐색. 텍스트 노드는 요소 노드의 자식 노드이므로 firstChild 프로퍼티를 사용한다.
탐색한 텍스트 노드의 nodeValue 프로퍼티를 사용하여 텍스트 노드의 값을 변경한다.
Node.prototype.textContent
요소 노드의 시작 태그와 종료 태그 사이의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다. 이 때 HTML 마크업은 무시된다.









📚 DOM 조작
새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제, 교체하는 것을 말한다. DOM 조작에 의해 DOM에 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생한다.

리플로우 : 레이아웃 계산 다시
리페인트 : 재결합된 렌더 트리 기반으로 다시 페인트


✅ Element.prototype.innerHTML
요소 노드의 HTML 마크업을 취득하거나 변경한다. 취득 시에 요소 노드의 시작 태그와 종료 태그 사이의 HTML 마크업이 포함된 문자열을 그대로 반환한다. 할당 시에 요소 노드의 모든 자식 노드가 제거되고, 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

장점 : DOM 조작 구현이 간단하고 직관적이다.
단점 : 크로스 사이트 스크립트 공격에 취약하다. HTML 마크업 문자열을 할당하는 경우 요소 노드의 모든 자식 노드를 제거하고 할당한 HTML 마크업 문자열을 파싱하여 DOM을 변경한다. 새로운 요소를 삽입할 때 위치를 지정할 수 없다.


✅ Element.prototype.insertAdjacentHTML(position, DOMString)
기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다. 두 번째 인수로 전달한 HTML 마크업 문자열(DOMString)을 파싱하고 그 결과로 생성된 노드를 첫 번째 인수로 전달한 위치(position)에 삽입하여 DOM에 반영한다. 

첫 번째 인수로 전달할 수 있는 문자열 : beforebegin, afterbegin, beforeend, afterend
단점 : 마찬가지로 크로스 사이트 스크립트 공격에 취약하다.


✅ 노드의 생성과 추가
새로운 요소 노드 생성
텍스트 노드 생성
생성한 텍스트 노드를 요소 노드의 자식 노드로 추가
요소 노드를 DOM에 추가


✅ 요소 노드 생성
Document.prototype.createElement(tagname) : 요소 노드를 생성하여 반환한다. 



✅ 텍스트 노드 생성
Document.prototype.createTextNode(text) : 텍스트 노드를 생성하여 반환한다.



✅ 텍스트 노드를 요소 노드의 자식 노드로 추가
Node.prototype.appendChild(childNode)
호출한 노드의 마지막 자식 노드로 추가한다. 요소 노드에 만약 자식 노드가 하나도 없다면 Node.prototype.textContent를 사용하면 더욱 간편하다.



✅ 요소 노드를 DOM에 추가
Node.prototype.appendChild(요소 노드)
호출한 요소의 마지막 자식 요소로 추가한다. DOM에 추가 시에 리플로우와 리페인트가 실행된다.



✅ 복수의 노드 생성과 추가
DOM에 요소 노드를 반복하여 추가하는 것은 비효율적이다.

컨테이너 요소 사용
Document.prototype.createElement(tagname) : 컨테이너 요소를 만든다.
DOM에 추가해야 할 요소 노드들을 컨테이너 요소의 자식 노드로 추가한 후, DOM에 컨테이너 요소를 추가하면 리플로우와 리페인트가 한 번만 실행된다. 하지만 불필요한 태그가 DOM에 추가되는 부작용이 있다.
DocumentFragment 노드 사용
Document.prototype.createDocumentFragment() : 비어 있는 DocumentFragment 노드를 생성하여 반환한다.
DocumentFragment 노드는 부모 노드가 없어서 DOM과는 별도로 존재한다. 또한 DOM에 추가하면 자신은 제거되고 자식 노드만 DOM에 추가된다.


✅ 노드 삽입
마지막 노드로 추가
Node.prototype.appendChild(node) : 인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가한다.
지정한 위치에 노드 삽입
Node.prototype.insertBefore(newNode, childNode) : 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다.
두 번째 인수로 전달받은 노드는 반드시 insertBefore 메서드를 호출한 노드의 자식노드이어야 한다. 그렇지 않으면 DOMException 에러가 발생한다. 두 번째 인수로 전달받은 노드가 null이면 마지막 자식 노드로 추가된다.


✅ 노드 이동
DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메서드를 사용하여 DOM에 다시 추가하면, 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다.



✅ 노드 복사
Node.prototype.cloneNode(true | false)
인수가 true이면 모든 자손 노드가 포함된 사본을 복사하고, 인수가 false이거나 생략되면 노드 자신만의 사본을 생성한다.(텍스트 노드가 당연히 없다.)



✅ 노드 교체
Node.prototype.replaceChild(newChild, oldChild)
자신을 호출한 노드의 자식 노드를 다른 노드로 교체한다. oldChild 노드를 newChild 노드로 교체한다. oldChild 노드는 DOM에서 제거된다.



✅ 노드 삭제
Node.prototype.removeChild(child)
child 노드를 DOM에서 삭제한다. child 노드는 메서드를 호출한 노드의 자식 노드이어야 한다.







📚 어트리뷰트
✅ 어트리뷰트 노드와 attributes 프로퍼티 
Element.prototype.attributes 프로퍼티로 요소 노드의 모든 어트리뷰트 노드를 취득할 수 있다(only getter)
이 때, NamedNodeMap 객체(유사 배열 객체, 이터러블)에 담긴다.
HTML 요소는 여러 개의 어트리뷰트를 가질 수 있다.
HTML 문서가 파싱될 때, HTML 요소의 어트리뷰트는 어트리뷰트 노드로 변환되어 요소 노드와 연결된다.
하나의 HTML 어트리뷰트 당 하나의 어트리뷰트 노드가 생성된다.


✅ HTML 어트리뷰트 조작
아래의 메서드를 활용하면 attributes 프로퍼티를 통하지 않고 요소 노드에서 직접 HTML 어트리뷰트 값을 취득하거나 변경할 수 있다.

Element.prototype.getAttribute(attributeName)
HTML 어트리뷰트 값을 참조한다.

Element.prototype.setAttribute(attributeName, attributeValue) 
첫 번째 인수의 어트리뷰트 값을 두 번째 인수 값으로 변경한다.

Element.prototype.hasAttribute(attributeName)
특정 HTML가 존재하는지 확인한다.

Element.prototype.removeAttribute(attributeName)  
attributeName을 가진 어트리뷰트를 삭제한다.





✅ HTML 어트리뷰트 vs DOM 프로퍼티
어트리뷰트 노드 : 요소 노드의 초기 상태를 관리한다.
DOM 프로퍼티 : 요소 노드의 최신 상태를 관리한다.
어트리뷰트 노드
HTML 어트리뷰트의 값의 초기 상태를 지정한다. getAttribute / setAttribute 메서드를 사용한다.

<!DOCTYPE html>
<html>
<body>
    <input id="user" type="text" value="ungmo2">
    <script>
        const $input = document.getElementBy('user');
        
        // attribute 프로퍼티에 저장된 value 어트리뷰트 값
        console.log($input.getAttribute('value')); // ungmo2
        
        // 요소 노드의 value 프로퍼티에 저장된 value 어트리뷰트 값
        console.log($input.value); // ungmo2
        
        // HTML 요소에 지정한 어트리뷰트 값, 즉, 초기 상태 값을 변경한다.
        document.getElementBy('user').setAttribute('value', 'foo');
    </script>
</body>
</html>
DOM 프로퍼티
최신 상태는 DOM 프로퍼티가 관리한다. 초기 상태는 그대로 유지된다.

<!DOCTYPE html>
<html>
<body>
    <input id="user" type="text" value="ungmo2">
    <script>
        const $input = document.getElementById('user');
        
        // DOM 프로퍼티에 값을 할당하여 HTML 요소의 최신 상태를 변경한다.
        $input.value = 'foo';
        console.log($input.value); // foo
        
        // getAttribute 메서드로 취득한 HTML 어트리뷰트 값. 항상 초기 상태를 유지한다.
        console.log($input.getAttribute('value')); // ungmo2
    </script>
</body>
</html>
DOM 프로퍼티 값의 타입
DOM 프로퍼티로 취득한 최신 상태 값은 문자열이 아닐 수 있다.(checkbox 요소의 checked 프로퍼티 값)

반면, getAttribute 메서드로 취득한 어트리뷰트 값은 항상 문자열이다.







📚 스타일
✅ 인라인 스타일 조작
HTMLElement.prototype.style
요소 노드의 인라인 스타일을 취득하거나 추가, 변경한다. 

CSSStyleDeclaration 객체
style 프로퍼티를 참조하면 CSSStyleDeclaration 객체를 반환한다. 프로퍼티에 값을 할당하면, 해당 CSS 프로퍼티가 인라인 스타일로 HTML 요소에 추가된다.

 CSS 프로퍼티
케밥 케이스를 따른다.

$div.style['background-color'] = 'yellow'
CSSStyleDeclaration 객체의 프로퍼티
카멜 케이스를 따른다.

$div.style.backgroundColor = 'yellow'




✅ 클래스 조작
class 어트리뷰트 값을 변경하여 스타일을 변경할 수 있다. 이 때, class 어트리뷰트에 대응하는 DOM 프로퍼티를 사용해야 한다. (className, classList)

Element.prototype.className
class 어트리뷰트 값을 취득하거나 변경한다.
문자열을 반환하기 때문에 공백으로 구분 된 여러 클래스를 반환하는 경우 사용이 불편하다.
<script>
    const $box = document.querySelector('.box');
    
    // .box 요소의 class 어트리뷰트 값 취득
    console.log($box.className);
    
    // .box 요소의 class 어트리뷰트 값 중에서 'red'만 'blue'로 변경
    $box.className = $box.className.replace('red', 'blue');
</script>
Element.prototype.classList
class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다.﻿
유사 배열 객체이면서 이터러블이고 여러 메서드를 제공한다.
add(...className) : 인수로 전달한 1개 이상의 문자열을 값으로 추가한다.
remove(...className) : 인수로 전달한 1개 이상의 문자열 중 일치하는 클래스를 삭제한다.
item(index) : index에 해당하는 클래스를 반환한다.
contains(className) : 인수로 전달한 문자열과 일치하는 클래스가 있는지 확인한다.
replace(oldClassName, newClassName) : 첫 번째 인수의 문자열을 두 번째 인수의 문자열로 변경한다.
toggle(oldClassName, [true/false]) : 일치하는 클래스가 있으면 제거하고, 존재하지 않으면 추가한다. 두 번째 인수가 true 이면 강제로 첫 번째 인수의 문자열을 추가한다. false이면, 강제로 첫 번째 인수의 문자열을 제거한다.


✅ 요소에 적용되어 있는 CSS 스타일 참조
style 프로퍼티는 인라인 스타일만 반환한다. HTML 요소의 모든 CSS 스타일을 참조할 경우 아래의 메서드를 사용한다.

window.getComputedStyle(element) ﻿
인수로 전달한 요소 노드에 적용되어 있는 평가된 스타일을 CSSStyleDeclaration 객체에 담아 반환한다.﻿
