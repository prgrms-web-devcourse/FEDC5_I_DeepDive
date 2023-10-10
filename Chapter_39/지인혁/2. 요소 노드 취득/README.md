## id를 이용한 요소 노드 취득 ##

Document.prototype.getElementById 메서드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소 노드를 탐색하여 반환한다.

id 값은 HTML 문서 내에서 유일한 값이어야 하며, class 어트리뷰트와 달리 공백 문자로 구분하여 여러 개의 값을 가질 수 없다.

```HTML
<body>
    <ul>
        <li id="apple">Apple</li>
        <li id="banana">Banana</li>
        <li id="orange">Orange</li>
    </ul>
    <script>
        // id가 banana인 요소를 반환
        const $elem1 = document.getElementById("banana");
    </script>
</body>
```

id가 만약에 중복되어도 에러는 발생하지 않는다. getElementById 메서드는 인수로 전달된 id 값을 갖는 첫 번째 요소 노드만 반환한다.

```HTML
<body>
    <ul>
        <li id="banana">Apple</li>
        <li id="banana">Banana</li>
        <li id="orange">Orange</li>
    </ul>
    <script>
        // id가 중복되어도 첫 요소 <li id="banana">Apple</li>를 반환
        const $elem2 = document.getElementById("banana");
    </script>
</body>
```

먄약 인수로 전달된 id 값을 갖는 HTML 요소가 존재하지 않는 경우 getElementById 메서드는 null을 반환 한다.

```HTML
<body>
    <ul>
        <li id="apple">Apple</li>
        <li id="banana">Banana</li>
        <li id="orange">Orange</li>
    </ul>
    <script>
        // id가 grapge인 HTML 요소가 없어 null을 반환
        const $elem3 = document.getElementById("grapge");
    </script>
</body>
```

id 값을 부여하면 id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당되는 효과가 있다.

단 id 값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 이 전역 변수에 노드 객체가 재할당 되지 않는다.

```HTML
<body>
    <div id="foo"></div>
    <script>
        // id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당된다.
        console.log(foo === document.getElementById("foo")); // true

        // 암묵적 전역으로 생성된 전역 프로퍼티는 삭제되지만 전역 변수는 삭제되지 않는다.
        delete foo;
        console.log(foo); // <div id="foo"></div>

        let foo = 1;

        // id 값과 동일한 전역 변수가 이미 선언되어 있으면 노드 객체가 재할당되지 않는다.
        console.log(foo); // 1
    </script>
</body>
```
<hr><br>

## 태그 이름을 이용한 요소 노드 취득 ##

Document/Element.prototype.getElementsByTagName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다. 

인자로 "*"를 전달하면 HTML 문서의 모든 요소를 반환 받을 수 있다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>
    <script>
         // 태그 이름이 li인 요소 노드를 모두 HTMLCollection 객체에 담겨 반환
        const $elems1 = document.getElementsByTagName("li"); 

        // 모든 요소를 탐색하여 반환
        const $elems2 = document.getElementsByTagName("*");
    </script>
</body>
```

Element.prototype.getElementsByTagName 메서드는 특정 요소 노드를 통해 호출하며, 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>
    <ul>
        <li>HTML</li>
    </ul>
    <script>
         // 특정 요소 노드의 자손 노드 중에서 요소 노드를 검색하여 반환
        const $fruits = document.getElementById("fruits");
        const $lisFromFruits = $fruits.getElementsByTagName("li");

        console.log($lisFromFruits); // HTMLCollection(3) [li, li, li]
    </script>
</body>
```
<hr><br>

## class를 이용한 요소 노드 취득

Document/Element.prototype.getElementsByClassName 메서드는 인수로 전달한 class 어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환한다. 

인수로 전달할 class 값은 공백으로 구분하여 여러 개의 class를 지정할 수 있다.

```HTML
<body>
    <ul>
        <li class="fruit apple">Apple</li>
        <li class="fruit banana">Banana</li>
        <li class="fruit oragne">Oragne</li>
    </ul>
    <script>
        // class 값이 fruit인 요소를 모두 탐색하여 반환
        const $elems = document.getElementsByClassName("fruit");

        // class 값이 fruit, apple인 요소 노드를 모두 탐색하여 반환
        const $apples = document.getElementsByClassName("fruit apple");
    </script>
</body>
```

Element.prototype.getElementsByClassName 메서드는 특정 요소 노드를 통해 호출하며 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

```HTML
<body>
    <ul>
        <li class="fruit apple">Apple</li>
        <li class="fruit banana">Banana</li>
        <li class="fruit oragne">Oragne</li>
    </ul>

    <ul id="fruits">
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="oragne">Oragne</li>
    </ul>
    <script>
        // class 값이 fruit인 요소를 모두 탐색하여 반환
        const $elems = document.getElementsByClassName("fruit");

        // class 값이 fruit, apple인 요소 노드를 모두 탐색하여 반환
        const $apples = document.getElementsByClassName("fruit apple");

        // id가 fruit인 자식 노드 중에 class 값이 banana인 요소 노드 모두 탐색하여 반환
        const $fruit = document.getElementById("fruit");
        const $bananas = $fruit.getElementsByClassName("banana");
    </script>
</body>
```
<hr><br>

## CSS 선택자를 이용한 요소 노드 취득
Document/Element.prototype.querySelector 메서드는 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.

- 반환 요소 노드가 여러 개인 경우 첫 번째 요소 노드만 반환
- 반환 요소 노드가 존재하지 않는 경우 null
- CSS 선택자 문법에 맞지 않는 경우 DOMException 에러가 발생
<br>

**CSS 선택자**
- *{ ... } : 전체 선택자
- p{ ... } : 태그 선택자
- #foo{ ... } : id 선택자
- .foo{ ... } : class 선택자
- input[type=text] { ... } : 어트리뷰트 선택자 
- div p{ ... } : 후손 선택자
- div > p{ ... } : 자식 선택자
- p + ul{ ... } : 인접 형제 선택자
- p ~ ul{ ... } : 일반 형제 선택자
- a:hover{ ... } : 가상 클래스 선택자
- p::before{ ... } : 가상 요소 선택자
<br><br>

```HTML
<body>
    <ul>
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="oragne">Oragne</li>
    </ul>

    <script>
        // class 값이 banana인 첫 번째 요소 노드를 탐색하여 반환
        const $elem = document.querySelector(".banana");

        // HTML 모든 문서 요소 노드를 취득
        const $all = document.querySelectorAll("*");
    </script>
</body>
```

Document/Element.prototype.querySelectorAll 메서드는 인수로 전달한 CSS 선택자를 만족시키는 모든 요소 노드를 탐색하여 반환한다.

- 반환 요소 노드가 존재하지 않는 경우 빈 NodeList 객체를 반환
- CSS 선택자 문법에 맞지 않는 경우 DOMException 에러가 발생

```HTML
<body>
    <ul>
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="oragne">Oragne</li>
    </ul>

    <script>
         // class 값이 banana인 첫 번째 요소 노드를 탐색하여 반환
        const $elem = document.querySelector(".banana");

        // ul 요소의 자식 요소인 li 요소를 모두 탐색하여 반환
        const $elems3 = document.querySelectorAll("ul > li");
    </script>
</body>
```

> querySelector, querySelectorAll 메서드는 getElementBytId, getElementsBy*** 메서드보다 다소 느리다. 하지만 CSS 선택자 문법을 사용하여 좀 더 구체적인 조건으로 요소 노드를 취득할 수 있고 일관된 방식으로 요소 노드를 취득할 수 있다는 장점이 있다.
<br><br> id 어트리뷰트 요소 노드를 취득하는 경우에는 getElementById 메서드를 사용하고 그 외의 경우에는 querySelector, querySelectorAll 메서드를 사용하는 것을 권장한다.
<hr><br>

## 특정 요소 노드를 취득할 수 있는지 확인

Element.prototype.matches 메서드는 인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다.

```HTML
<body>
    <ul id="fruits">
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="oragne">Oragne</li>
    </ul>
    <script>
        const $apple = document.querySelector(".apple");

        // $apple 노드는 #fruits > li.apple로 취득할 수 있따.
        console.log($apple.matches("#fruits > li.apple")); // true
    </script>
</body>
```
<hr><br>


## HTMLCollection과 NodeList
HTMLCollection과 NodeList는 DOM API가 여러 결과값을 반환하기 위한 DOM 컬랙션 객체다. 둘다 모두 유사 배열 객체이면서 이터러블이다.

HTMLCollection과 Nodelist의 중요한 특징은 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 객체라는 것이다. HTMLCollection은 언제나 실시간 객체로 동작한다. NodeList는 대두분의 경우 객체의 상태 변활르 실시간으로 반영하지 않고 과거 정적 상태를 유지하는 객체로 동작하지만 경우에 따라 실시간 객체로 동작할 때가 있다.

### HTMLCollection ###
getElementsByTagName, getElementsByClassName 메서드가 반환하는 HTMLCollection 객체는 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 DOM 컬렉션 객체다.

```HTML
<ul id="fruits">
        <li class="red">Apple</li>
        <li class="red">Banana</li>
        <li class="red">Oragne</li>
    </ul>
    <script>
        // HTMLCollection를 반환
        const $reds = document.getElementsByClassName("red"); // 3개의 요소

        for(let i=0; i<$reds.length ; i++) {
            $reds[i].className = "blue";
        }

        console.log($reds) // 1개의 요소로 변경
    </script>
```

위 예제는 모든 li 요소의 class 값이 blue로 변경되어 모든 li 요소 색상이 파란색으로 렌더링 될 것이다. 하지만 예상대로 동작하지 않고 두 번째 li 요소만 빼고 모두 빨간색으로 렌더링 된다. 그 이유가 뭘까?

- 첫 번째 반복(i === 0) 

    첫 li 요소가 red에서 blue로 변경된다 이때 실시간 객체인 HTMLCollection은 첫 li 요소가 class 값이 red로 일치하지 않기 때문에 실시간으로 제거 된다.

- 두 번째 반복(i === 1)

    첫 요소 li가 제거된 상태에서 $reds[1]은 원래 기준 세 번째 li 요소를 가르킨다. 이때 세번째 요소 li가 class 값이 blue로 변경되고 실시간으로 제거 된다.

- 세 번째 반복(i == 2)

    첫 번째, 세 번째 li가 제거되고 두 번째 요소만 남아있다. 이때 $reds.length의 길이는 1이므로 반복이 종료된다. 따라서 $reds에 남아있는 두 번째 li요소는 class 값이 변경 되지 않는다.
<br>

이러한 문제를 해결하기 위해 for 문을 역뱡향을 순회하거나 객체 노드가 남아있지 않을 때까지 무한 반복하는 방법이 있다.

더 간단한 방법은 부작용을 발생시키는 HTMLCollection 객체를 사용하지 않고 HTMLCollection객체를 [...$reds] 배열로 변환시키는 방법도 있다.

### NodeList ###
HTMLCollection 객체의 부작용을 해결하기 위해 querySelectorAll 메서드를 사용하는 방법도 있다. 이 메서드는 NodeList 객체를 반환하며 실시간으로 노드 객체의 상태 변경을 반영하지 않는다.

```HTML
<ul id="fruits">
        <li class="red">Apple</li>
        <li class="red">Banana</li>
        <li class="red">Oragne</li>
    </ul>
    <script>
        // NodeList를 반환
        const $reds2 = document.querySelectorAll(".red");

        $reds2.forEach(elem => elem.className = "blue");
    </script>
```

NodeList는 NodeList.prototype.forEach 메서드를 상속받아 사용할 수 있으며 배열 메서드와 사용방법이 동일하다. 그 외에도 item, entries, keys, values 메서드를 제공한다.

NodeList 객체는 대부분의 경우 노드 객체의 상태 변경을 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작한다. 

**하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollection객체와 같이 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로 주의가 필요하다.**

> 이처럼 HTMLCollection이나 NodeList 객체는 예상과 다르게 동작할 때가 있어 다루기 까다롭고 실수하기 쉽다. 따라서 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList를 배열로 변환하여 사용하는 것을 권장한다. 또한 배열의 다양한 고차 함수를 사용할 수 있어 유용하다.
<hr>