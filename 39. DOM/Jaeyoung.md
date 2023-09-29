<<<<<<< Updated upstream
<aside>
💡 **HTML 문서의 계층적 구조**와 그속의 정보를 표현하고 제어할수 있는 API
즉! **메서드**와 **프로퍼티**를 제공하는 **트리 자료구조**

</aside>

**DOM ( Document Object Model )**

## HTML 문서

<aside>
💡 HTML 요소들의 집합이며 모든 요소는 **중첩 관계를 가짐**

</aside>

HTML 요소의 **contents 영역안에**는 텍스트 뿐만 아니라 **다른 HTML 요소 포함** 가능

이런 중첩 관계로 인해 **계층적인 부자 관계 ( 자식 child 과 부모 parent )** 가 형성됨

그리고 이런 모든 계층 구조를 **트리 자료 구조**로 구성

🔥 즉! 🔥 노드 객체들로 구성된 트리 자료구조를 DOM 이라고함

## 노드 객체

**파싱?**

컴퓨터에서 컴파일러 또는 번역기가 **원시 부호를 기계어로** 번역하는 과정의 **한 단계**

<aside>
💡 DOM 의 노드객체는 자신의 구조 / 정보를 제어 할 수 있는 **DOM API**를 지니고 있음

</aside>

이를 통해 자신의 부모 / 형제 / 자식 **노드를 탐색** 가능하고 **어트리뷰트 ( 속성 ) / 텍스트를 조작** 할 수 있음

HTML 요소가 렌더링 엔진에 의해 파싱 되어질때 DOM을 구성하는 **요소 노드 객체**로 변환됨

- **HTML 요소** ⇒ 요소 노드 ( 정점 ) 로 변환됨
- **어트리뷰트** ⇒ 어트리뷰트 노드 ( 정점 ) 로 변환
- HTML 요소의 **텍스트 contents ⇒** 텍스트 노드( 정점 ) 로 변환

이미지를 예시로 document ⇒ html ⇒ **body ⇒ ul ⇒ li 의 노드 ( 정점 ) 를 살펴보면**

- 연두색 li
    - **요소 노드** 객체를 의미
- 빨간색 “ Apple ”
    - Text Contents 로 Text / HTML 요소가 들어 갈 수 있고 Text 노드로 변환된 모습
- 파란색 id = “ Apple “
    - 어트리뷰트 ( 속성 ) 로 어트리뷰트 ( 속성 ) 노드로 변환된 모습
- 노란색 document
    - 트리 자료구조의 **최상단 root 노드**로 DOM에서는 **문서노드** 라고함

**DOM 내부 노드의 종류**

🔥위의 이미지를 보며 이해하면 좋음

- **문서 노드**
    - DOM 트리의 **최상단에 위치**하는 즉 트리 구조의 **root 노드로 document 객체**를 가르킴
    - **document 객체 ?**
        
        브라우저가 렌더링한 **HTML 문서 전체**를 가르키는 객체로 window 의 document 프로퍼티에 
        
        바인딩 되어있음 🔥 따라서 HTML 문서당 문서 노드 **1개만 존재**함
        
    - **window.document / document** 로 참조 가능
    - 노드 ( 정점 ) 들에 접근하기 위한 **진입점 역할**을함

- **요소 노드**
    - HTML 요소 ( HTML Tag ) 를 가르키는 객체
    - HTML 요소들끼리 중첩하여 부자관계를 가지고, 이를 통해 정보를 구조화함
    - 문서의 구조를 표현하는 핵심 노드
    
- **어트리뷰트 노드**
    - HTML 요소의 **어트리뷰트 ( 속성 )** 을 가르키는 객체
    - 계층구조 / 부자관계 형성이 아닌 **지정된 HTML 요소의 요소 노드 와 연결**됨
        
        즉! 요소 노드와 형제 노드가 아님
        
    - 어트리뷰트 ( 속성 ) 노드를 접근하려면 해당 **지정 요소 노드에 접근해야함**
    
- **텍스트 노드**
    - **문서의 정보** 를 표현하는 **HTML 요소의 텍스트**를 가르키는 객체
    - 요소 노드의 자식 노드이며 🔥자식을 가질 수 없는 **리프 노드 ( leaf node ) 임**
    - DOM 트리의 **최종 단계**

- **Comment** ( 주석을 위한 노드 ) 노드 / **DocumentType** ( DOCTYPE 을 위한 ) 노드
    
    / **DocumentFragment** ( 복수의 노드 생성시 사용 ) 노드 … 등 
    

**총 12개의 노드 타입이 존재**

**상속 구조**

ECMAScript 사양에 정의된 표준 빌트인 객체가 아닌 브라우저 환경에서 추가적으로 제공하는

**호스트 객체 Host Object**임 

<aside>
💡 But! 노드 객체 또한 JavaScript Object 이기때문에 **프로토타입에 의한 상속 구조**를 가짐

</aside>

- 문서 노드 ⇒ Document / HTML Document 인터페이스를 상속받음
- 어트리뷰트 노드 ⇒ Attr 을 상속 받음
- 텍스트 노드 ⇒ CharacterData 인터페이스를 상속 받음

모든 노드 객체에는 노드 **객체의 종류 / 타입**에 따라 고유하게 갖게 되는 **기능도** 있고

노드 타입에 상관없이 모든 노드가 갖게되는 **공통 기능**이 있음

🔥 요소 노드 예시! **DIV tag** vs **Input tag**

- 모든 요소 노드는 스타일을 나타내는 style 프로퍼티 등을 모두 가지게됨
- Input 요소 노드 객체에는 value 프로퍼티가 필요하지만
    
    DIV 요소 노드는 필요하지않음 
    

## 요소 노드 컨트롤

<aside>
💡 어트리뷰트 노드 / 텍스트 노드 둘다 **요소 노드에 연결**되어있기 때문에
      HTML의 구조 / 내용 / 텍스트 / 스타일 등을 **동적으로 조작하려면** 요소 노드를 취득해야함

</aside>

**Document.prototype.getElementById ( ID )**

- 인수로 전달받은 **id 어트리뷰트 값**을 갖는 요소 노드 한개를 탐색해 반환함
- document 의 프로퍼티 값으로 반드시 문서 노인 document 를 통해 호출됨
- 만약 해당 id 어트리뷰트가 HTML 문서에 없다면? ⇒ null 반환
- 만약 해당 id 어트리뷰트가 HTML 문서에 여러개라면? ⇒ 가장 첫 요소 노드 반환

🔥만약 id 값과 동일한 이름의 전역 변수가 선언되어있지 않다면

해당 id 값과 동일한 이름으로 전역 변수가 암묵적으로 선언되어지고 요소 노드가 할당됨

**Document.prototype.getElementsByTagName
Element.prototype.getElementByTagName**

- 해당 태그의 이름을 가지고 있는 **모든 요소 노드를 탐색**하고 결과를
    
     ****DOM 컬렌션 객체 ( HTMLCollection ) 즉 **유사 배열객체 이터러블로** 반환함
    
    - 즉 div 를 검색시 **모든 div 요소** 노드를 반환
- **Document.prototype / Element.prototype 의 차이**

```jsx
// 문서내에는 id = "divNode" 라는 div 태그 속
// li 태그가 3개 존재함 - HTML 문서 자체에는 li 태그가 1억개 존재함

// Document.prototype은
// 위에서 설명했듯이 Document / 문서 노드를 통해 호출함

// Element.prototype은
// 원하는 element 요소 노드를 기준으로 그 자식 / 자손들에서부터 검색해 결과를 반환함

// 아래의 코드는 id 가 listNode 인 요소 노드 한개를 listNode 전역변수에 담았음	
const divNode = document.getElementById("divNode")

								// element
const listNodes = divNode.getElementByTagName("li")

console.log(listNodes) // => [ li, li, li ]
```

- 메서드 인수에 **“ * ” 전달시** HTML 문소 내의 **모든 요소 노드**를 가져옴
- 해당 요소 노드가 없다면 **빈 배열 반환**

**Document.porototype.getElementByClassName
Element.porototype.getElementByClassName**

- 인수로 전달받은 값과 동일한 **class 어트리뷰트 값**을 가진 모든 요소를 반환함
- DOM 컬렉션 객체를 **리터러블로 반환함**
- class 어트리뷰 자체가 **공백을 통해** 여러개의 class 값을 넣을 수 있다는점 주의
- 해당 요소 노드가 없다면 **빈 배열 반환**

**Document.prototype.querySelector / querySelectorAll        CSS 선택자
Element.prototype.querySelector / querySelectorAll** 

- CSS 에서 특정 HTML 요소에 스타일을 지정하고자 할때 사용함

```css
*{ ... } /* 전체 선택자 */
div { ... } /* 태그 선택자 */
#ID { ... } /* ID 선택자 */
.class { ... } /* class 선택자 */
/* 어트리뷰트 선택자 => input 요소 중 type 어트리뷰트 값이 text인 모든 요소 */
input[type=text] { ... }

div li { ... } /* 후손 선택자 => div 속 모든 li ( 후손까지 포함 ) */
div > li { ... } /* 자식 선택자 => div 속 바로 밑의 자식 요소 중 모든 li */

div + li { ... } /* 인접 형제 선택자 => div 의 형제 요소중 바로 뒤의 li */
div ~ li { ... } /* 일반 형제 선택자 = div 의 형제 요소중 뒤의 모든 li 요소 */

div:hover { ... } /* 가상 클래스 선택자 => hover 상태인 모든 div */
div::before { ... } /* 가상 요소 선택자 => 자세한건 검색 ( 경우가 많음 ) */
```

- 메서드 인수로 **CSS 선택자**를 넣어 만족시키는 노드들 / 노드를 탐색하여 반환
- 조건에 맞는 요소 노드가 여러개면? **첫번째 요소 노드만 ( querySelector기준 )**
    - querySelectorAll 은 모든 요소 반환
- 조건에 맞는 요소 노드가 없다면 ? **null** / CSS 선택자 문법을 틀리면 ? **DOMException 에러**
    - querySelectorAll 조건에 맞는 요소 노드가 없으면 빈 배열을 반환

<aside>
💡 querySelector 메소드보다 getElementBy*** 메소드가 좀 더 빠름

but! querySelector가 좀 더 구체적인 조건을 사용가능함

따라서, **ID 어트리뷰트가 있다면 ? getElementById 를 사용 그외에는 querySelector 추천**

</aside>

**Element.prototype.matches**

- 인수로 CSS 선택자를 전달받아 특정 요소 노드를 취득할 수 있는지 확인함
- 이벤트 위임에 유용함

## HTMLCollection / NodeLIst

<aside>
💡 DOM Collection 객체 / NodeList 모두 DOM API가 **여러 개의 결과값을 반환하기 위한** 
DOM 컬렉션 객체

</aside>

- 모두 유사 배열 객체이면서 **이터러블**이기 때문에 for … of / 스프레드 문법을 통해 **배열 변환 가능**
    - 🔥 계속 언급하지만 **배열이 아닌 객체**
- 둘다 노드 객체의 상태 변화를 실시간으로 반영하는 **살아 있는 객체**
    - NodeList 의 경우 대부분은 실시간으로 반영하지 않고 **non-live 객체로 동작 경우에 따라 live**

**HTMLCollection**

- getElementBy…  메서드에서 반환되어지는 객체의 종류
- 노드 객체의 상태 변화를 실시간으로 반영하는 live 객체임
- L**ive 객체의 원리**
    
    ```jsx
    	
    (
    <li class="one" > first </li>
    <li class="one" > tow </li>
    <li class="one" > three </li> )
    
    // class 이름이 "first"인 모든 요소 노드를 HTMLCollection 객체에 담아 반환함
    const element = document.getElementByClassName("first")
    
    // 이 시점에는 요소 3개가 잘들어감
    console.log(element) // => HTMLCollection(3) [ li.one, li.one, li,one ]
    
    // for 문을 이용해 class를 "none" 으로 변경하면?
    for( let i = 0 ; i < element.length ; i++ ){
    	element[i].className = "none";
    }
    
    // 요소가 모두 변한것이 아닌 한개만 변함 
    console.log(element) // => HTMLCollection(1) [ li.one ]
    ```
    
    결과의 이유를 for문의 작동 순서대로 정리해보면 ?
    
    1. 첫번째 순회 실행시  / i = 0
        
        element 의 첫 li 를 “none” 으로 변경하면서 선언된 getElementByClassName 메서드의
        
        조건에 적합하지 않게 되고 HTMLCollection 은 Live 객체이기때문에 
        
        **실시간으로 element 변수에서 제거됨**
        
    
    1. 두번째 순회 실행   / i = 1
        
        첫번째 순회에서 **첫번째 요소가 삭제**되면서 **첫번째 요소 자리에 2번째 요소가 저장**되게됨
        
        이로인해 2번째 위치 [1] 의 요소를 실행하게되면서 기존의 2번째 요소가 아닌 **3번째 요소가 실행**
        
        이로인해 맨뒤 3번째 li 요소의 className = “none” 으로 변경
        
        이후 getElementByClassName 메서드의 조건에 안맞기때문에 **3번째 요소도 실시간으로 삭제**
        
    
    1. 세번째 순회 실행 / i = 2
        
        순회는 실행되지만 3번째 [2] 위치에는 아무 요소도 들어있지 않기 때문에 그대로 순회 종료
        
    
- 모든 요소 정상 컨트롤 방법
    - while문을 이용
    
    ```jsx
    let i = 0
    while ( element.length !== i ){
    	element[i].className = "none"
    }
    ```
    
    - 배열로 변환하여 사용하기
    
    ```jsx
    [...element].forEach( item => item.className = "none" )
    ```
    
    - querySelectorAll 사용하여 NodeList 컨트롤
    

**NodeList**

- querySelectorAll 메서드를 사용시 NodeList 객체를 반환함
    - 생성시 NodeLIst 객체는 none-live 상태
- NodeList.prototype.forEach / item / entries / keys / values 메소드를 제공받음
- NodeList 또한 안전한 사용을위해 직접 **배열로 변환후 사용**을 권함

## 노드 탐색

탐색을 시작하고자 하는 요소 노드를 취득후 자식 노드를 탐색해 자식 노드를 취득하게됨

⇒ 이후 형제 노드 / 부모 노드를 탐색 할 수 있게됨

즉 DOM 트리의 노드를 탐색할 수 있도록 여러 **탐색 프로퍼티**가 제공되어짐

- **공백 텍스트 노드**
    
    스페이스 / 탭 / 줄바꿈 등의 공백 문자는 텍스트 노드를 생성하게된
    
    ```jsx
    <li > first </li>
    // 줄바꿈 후 2번째 li tag 를 작성했기때문에 공백 텍스트 노드가 생김
    <li > two </li>
    <li > three </li>
    ```
    
- **자식 노드 탐색 / 자식 노드의 존재 확인**
    
    자식 노드를 탐색하기 위해 여러 노드 탐색 프로퍼티가 존재함
    
    **Node.prototype.childNodes**
    
    - 자식 노드를 **모두 탐색**하여 DOM 컬렌션 / NodeList 로 반환
    - **요소 노드 / 텍스트 노드** 모두 포함될 수 있음
    
    **Element.prototype.children**
    
    - 자식 노드를 모두 탐색해 DOM 컬렉션에 담아 반환
    - 텍스트 노드 포함 X
    
    **Node.prototype.firstChild / lastChild**
    
    - **첫 번째 / 마지막 자식 노드**를 반환
    - 텍스트 / 요소 노드 둘중 한개으 노드
    
    **Element.prototype.fisrtElementChild / lastElementChild** 
    
    - **첫 번째 / 마지막 자식 요소** 노드를 반환함
    - **요소 노드만** 반환!
    
    **Node.prototype.hasChildNodes**
    
    - 자식 노드가 존재하면 true / 존재하지 않다면 false
    - 요소 / 텍스트 노드를 포함하여 존재를 확인함
    
    **children.length / childElementCount** 
    
    - 요소 노드만의 존재를 확인하고 싶다면 사용 가능

- **요소 노드의 텍스트 노드 탐색**
    
    텍스트 노드는 **요소 노드의 자식 노드** 이기때문에 요소 노드에서 .**fistChild** 로 쉽게 접근가능
    

- 부모 노드 탐색
    
    **Node.prototype.parentNode** 프로퍼티를 통해 탐색 가능
    
- 형제 노드 탐색
    
    부모 노드가 같은 형제 노드를 탐색 할때 사용함
    
    **Node.prototype.previousSibling / nextSibling**
    
    - 형제 노드 중에서 **자신의 이전 / 자신의 다음** 형제 노드를 탐색 반환
    - 요소 노드 / 텍스트 노드 중 반환
    
    **Element.prototype.previousElementSibling / nextElementSibling**
    
    - 형제 **요소 노드 중**에서 **자신의 이전 / 다음** 형제 요소 노드를 반환함
    - **요소 노드만 반환**
    
- 🔥 **노드 정보 취득**
    
    노드 객체에 대한 정보를 취득하기 위한 프로퍼티
    
    **Node.prototype.nodeType**
    
    노드 객체의 종류 / 노드의 타입을 **상수로 반환**
    
    - 요소 노드 타입 ⇒ 1 반환
    - 텍스트 노드 타입 ⇒ 3 반환
    - 문서 노드 타입 ⇒ 9 반환
    
    **Node.prototype.nodeName**
    
    노드의 이름을 반환
    
    - 요소 노드 ⇒ 대문자로 “DIV” / “INPUT” …
    - 텍스트 노드 ⇒ “text”를 반환
    - 문서 노드 ⇒ “#document” 반환

## 요소 노드의 텍스트 조작

**Node.prototype.nodeValue**

- setter / getter 모두 존재하는 즉, **참조 / 할당이 모두 가능**한 프로퍼티
- **노드의 객체 값 ( 텍스트 노드의 텍스트 )** 을 반환 없다면 **null 반환**
- 텍스트 변경을 위해서는?
    1. 먼저 요소 노드 취득
    2. 취득 요소에서 텍스트 요소 탐색 ⇒ firstChild 이용
    3. 탐색된 노드에 nodeValue 를 이용해 값 변경
    
    ```jsx
    <li id="none"> text </li> 
    
    const node = document.getElementById("none")
    
    console.log( node.firstChild.nodeValue ) // => text
    node.firstChild.nodeValue = "change";
    console.log( node.firstChild.nodeValue ) // => change
    ```
    

**Node.prototype.textContent**

- setter / getter 모두 존재하지만 nodeValue 와 달리
 요소 노드의 텍스트 + 자손노드 텍스트 까지 **모두 취득하여 변경**함
- 취득 하는 과정에서 **HTML 마크업 은 무시**됨

```jsx
// 아래와 같이 div속 p 태그 HTML 마크업은 무시됨
<div id="none"> Hello <p> World </p> </div>
// 그리고 모든 텍스트를 취득
console.log(document.getElementById("none").textcontent )
// => Hello World
```

<aside>
💡 취득 방식에 차이가 있을 뿐 textContent / nodeValue 둘다 값을 가져올 수 있지만

textContent 가 코드사용에 간편한편

</aside>

## DOM 조작

<aside>
💡 새로운 노드 생성후 DOM 에 추가 / 기존 노드 삭제 / 교체 하는것을 의미함

</aside>

하지만, 추가 / 삭제 시 **리플로우**와 **리페인트**가 발생할 수 있으니 조심해야함

**Element.prototype.innerHTML**

- setter / getter 모두 존재
- HTML 마크업을 포함한 모든 문자열을 그대로 반환함
    
    ⇒ 따라서 HTML 마크업을 취득하고 변경 가능함
    
- 구현이 간단하고 직관적이지만 크로스 사이트 스크립팅 공격에 매우 취약함

**Element.prototype.insertAdjacentHTML ( position , String )**

- 기존 요소를 제거 하지 않고 지정 위치에 새로운 요소를 삽입
- 1번째 인자에 **beforebegin / afterbegin / beforeend / afterend** 4가지 가능

- 2번째 인자에 원하는 HTML 마크업을 문자열로 전달 ⇒ “<p> text </p>”
- innerHTML 프로퍼티보다 효율적이고 빠름
- 크로스 사이트 스크립팅 공격에 취약한점은 동일함

**노드의 생성과 추가 방법**

1. **Document.prototype.createElement( tagName )**
    - 전달된 tag 이름을 가지고 새로운 **요소 노드를 생성**함
    - 하지만 안의 자식노드는 [ ] 비어있음
2. **Document.prototype.createTextNode( text )**
    - 인수로 전달받은 text를 가지고 **text 노드를 만듬**
    - 아직 위에서 생성한 요소 노드 따로 / 현재 텍스트 노드 따로 각자 다른 상태
3. **Node.prototype.appendChild ( childNode )**
    - 해당 노드의 자식 노드로 인수로 **전달받은 childNode 를 추가**함
    - 예시를 들면 요소 노드에 현재 만든 텍스트 노드를 인수로 전달하여 appendCild 
    를 사용하게되면 요소 노드 자식 노드로 텍스트 노드가 추가됨
    
    <aside>
    💡 하지만..
    따로 자식 노드를 생성하고 할당 하기보다는 
    요소 노드에 **textContent**를 통해 바로 text를 전달하는게 **훨 씬 빠름**
    
    </aside>
    
    - 텍스트 뿐만 아니라 요소 노드를 **다른 요소 노드의 자식 노드 지정에도 사용**
4. **Node.prototype.insertBefore( newNode , childNode )**
    - 첫번 째 newNode 를 두번째 인수 childNode **앞에 추가**함
    - 두번째 인자가 null 이라면 appendChild 처럼 동작

**여러개의 노드 생성과 추가**

```jsx
<ul id="parent"> </ul>

// 부모 노드 미리 지정
const parent = document.getElementById("parent")

[ "one", "two", "three" ].forEach( text => {
	// 3 번의 자식 노드 생성후 전부 부모 노드에게 붙여줌

	// li 태그 요소 노드 생성
	const li = document.createElement("li")
	// 해단 순회에 해당하는 text 노드 도 생성
	const textNode = document.createTextNode(text)
	// 텍스트 노드를 요소 노드에 이어줌
	li.appendChild(textNode);
	// 그리고 부모 요소의 마지막 자식으로 노드 추가
	parent.appendChild(li);
})
```

예시와 같이 여러 노드를 생성후 추가시 문제점은?

3번 연속 부모에게 추가 하는 과정에서 3번의 리플로우 /  리페인트가 발생

**해결 방법**

1. container ( DocumentFragment 노드 ) 를 이용
2. textContent 사용

```jsx
// 부모 노드 미리 지정
const parent = document.getElementById("parent")
// container 미리 생성
const container = document.createDocumnetFreagment()

[ "one", "two", "three" ].forEach( text => {
	// 3 번의 자식 노드 생성후 전부 부모 노드에게 붙여줌

	// li 태그 요소 노드 생성
	const li = document.createElement("li")
	// textContent를 통해 바로 생성
	li.textContent(text)
	// 그리고 부모 요소의 마지막 자식으로 노드 추가
	container.appendChild(li);
})

// 이후 부모 노드에 container를 합쳐줌
parent.appendChild(container)
```

**노드 이동**

만약 현재 DOM에 이미 존재하는 노드를 appendChild / insertBefore 메서드를 사용에 다른 위치에 추가하면 기**존에 존재했던 위치에서 지워지고 새로운 위치에 추가**되어짐

**노드 복사**

**Node.prototype.cloneNode( ture / false)**

- 노드의 사본을 생성하여 반환함
- 인수로 true 전달시 깊은 복사로 생성하여 자손 노드를 포함하여 반환함
- fasle 전달시 자기 자신 노드만을 카피함
    - 즉 텍스트 노드도 복사되지 않음

**노드 교체**

**Node.prototype.replaceChild ( newNode , oldNode )**

- newNode 를  oldNode와 교체하여 oldNode 를 제거함
- oldNode 는 replaceChild 메서드를 호출한 노드의 자식 노드여야함

**노드 삭제**

**Node.prototype.removeChild ( Child )**

- 메서드를 호출한 노드의 자식 노드를 인수로 전달하면 해당 노드가 삭제됨

## 어트리뷰트

<aside>
💡 HTML 요소는 여러개의 어트리뷰트 ( 속성 ) 을 가질 수 있음

<input id=”none” type=”text” value=”Value” >

🔥HTML 어트리뷰트의 역할은 HTML 요소의 초기 상태를 저장하는 역할로 변하지 않음

</aside>

- 어트리뷰트 의 종류에는
    
    HTML 요소에서 **공통적으로 사용**할 수 있는 특정 어트리뷰트
    
    - 글로벌 어트리뷰트 ⇒ id / class / style / title / lan / tabindex …
    - 이벤트 핸들러 어트리뷰트 ⇒ onclick / onchange / onblur …
    
    **한정적인 HTML 요소**에서만 사용가능한 어트리뷰트
    
    - input 태그에서만 사용되는 ⇒ checked …. value / tpye …

- 어트리뷰트 1개당 1개의 어트리뷰트 노드가 생성되어짐
- Element.prototype.attributes getter만 가능한 읽기 전용 프로퍼티를 통해 취득 가능
    - 반환은 NamedNodeMap 객체를 통해 반환되어짐

**Element.prototype.getAttributes / setAttribute**

- Attributes 프로퍼티를 사용하지 않고 직접 HTML 어트리뷰트 값을 취득 / 변경 할 수 있음

**Element.prototype.hasAttribute( attributeName )**

- 해당 요소에서 인수에 해당하는 attribute 가 존재하는지 boolean으로 반환

**Element.prototype.removeAttribute( attributeName )**

- 해당 요소에서 인수에 해당하는 attribute 제거

- 요소 노드는 변화하는 **상태 State ) 를 가지고** 있으며 **초기 상태 / 최신 상태** 2개의 상태를 가짐
    - 초기 상태 ⇒ 어트리뷰트 노드가 관리
    - 최신 상태 ⇒ DOM 프로퍼티가 관리함
    
    - HTML 프로퍼티 상태 / 어트리뷰트 상태는 **동일한 이름이라면 1 : 1 로 대응**하지만..
        - 항상 언제나 1 : 1로 대응하는것은 아니며 / 서로의 key가 항상 일정하지도 않음

## 🔥 스타일

<aside>
💡 **HTMLElement.prototype.style 
setter / getter** 동시에 접근가능하며 요소 노드의 **인라인 스타일을 취득 / 변경** 할 수 있음

</aside>

프로퍼티 참조시 **CSSStyleDeclaration 타입의 객체를 반환**함

⇒    CSS 프로퍼티에 대응하는 프로퍼티를 가지고있으며 **카멜 케이스로 정의**됨

  CSS 프로퍼티가 **인라인 스타일로 HTML 요소에 추가**됨

**클래스 조작**

class 어트리뷰트를 조작하기 위해서는 DOM 프로퍼티 class 가 아닌 

**className / classList 를 사용**해야함 

⇒ JavaScript 에서의 **class 는 예약어** 이기 때문에

( 예약어 : 함수 명 / 변수 명 등에 사용 할 수 없는 이름 )

**Element.prototype.className**

- getter / setter 모두 존재하는 접근자 프로퍼티로 **class 어트리뷰트 값을 취득 / 변경** 함
- 공백으로 구분된 여러개의 클래스를 다루기에 불편

**Element.prototype.classList**

- class 어트리뷰트의 정보를 담아 DOMTokenList 객체를 반환함
- classList.add ( className )
    - 인수로 전달받은 1개 이상으 문자열을 **class 어트리뷰트 값에 추가**함
- classList.remove ( className )
    - 인수로 전달받은 1개 이상의 문자열과 **일치하는 class 어트리뷰트 값을 제거**함
    - 일치하는 어트리뷰트가 없다면 **에러없이 무시**
- classList.item ( index )
    - 전달받은 해당 인덱스와 일치하는 위치의 class 어트리뷰트 값을 반환함
- classList.contains ( className )
    - 전달받은 인수와 일치하는 class 어트리뷰트 값이 존재하는지 boolean으로 반환
- classList.replace ( oldClassName , newClassName )
    - 첫 번째 인수의 위치에 두번 째 인수를 교체함
    - 첫 번째 인수의 값은 제거됨
- classList.toggle ( className , ( true /  false ) )
    - 해당 인수 값과 일치하는 class 어트리뷰트 값과 일치하는 **값이 있다면 제거하고 없다면 추가**함
    - 두번째 인자는 필수 전달 사항은 아님
        - 만약 true를 전달하면 무조건 추가만 가능
        - false 를 전달하게 되면 무조건 제거만 가능

**요소 노드에 적용되어 있는 CSS 스타일 참조**

**window.getComputedStyle ( Element , ( pseudo ) )**

- 전달받은 인수에 적용되어 있는 스타일을 **CSSStyleDeclaraction 객체에 담아 반환**함
- 두 번째 인수에  :after / :before 와 같은 의사 요소 전달 가능하고 없다면 일반 요소 노드

```html
<style>

	.none {
		width : 400px;
		height : 200 px;
		border : 1px solid red;
	}
</style>

<script>

	const box = document.querySelector( ".none" )

	const styleList = window.getConputedStyle( box )

	console.log( styleList.width ) // 400px
	console.log( styleList.height ) // 200px
	console.log( styleList.border ) // 1px solid red

</script>

```
=======


1. Document.Prototype.getElementById => 에서 따로 변수 생성을 하지않아도 Id 이름으로 전역변수가 생성된다!
>>>>>>> Stashed changes
